<template>
	<div class="listAll">
		<!--选择分类-->
		<section class="classify_tab">
			<div class="tab_list">
				<a class="tab_link" v-for="(item, index) in tabList" :class="{active:isActiveTab==item.id}" @click="clickActiveTab(item)">{{item.title}}</a>
			</div>
		</section>
		
		<!--对应分类-->
		<section class="day_area">
				<div class="day_area_box" :class="{active:isActiveTab==1}">
					<ul class="day_comic_list">
						<li class="day_comic_item" v-for="(item, index) in showList">
							<router-link class="day_comic_link" :to="{path:'/detail',query:{id:item.week_id}}" @click.native="isDataTitle(item)">
							<!--<a class="day_comic_link">-->
								<div class="day_comic_cover">
									<img class="day_comic_image" :src="item.week_url" />
								</div>
								<div class="day_comic_info">
									<strong class="day_comic_text tetle">{{item.week_title}}</strong>
									<small class="day_comic_text">更新到{{item.updata}}话</small>
									<small class="day_comic_text">大神 萨达 爱的</small>
									<small class="day_comic_text">{{item.week_desc}}</small>
								</div>
							<!--</a>-->
							</router-link>
						</li>
						
					</ul>
				</div>
				<div class="day_area_box" :class="{active:isActiveTab==2}">
					<ul class="day_comic_list">
						<li class="day_comic_item" v-for="(item, index) in showList">
							<router-link class="day_comic_link" :to="{path:'/detail',query:{id:item.week_id}}" @click.native="isDataTitle(item)">
							<!--<a class="day_comic_link">-->
								<div class="day_comic_cover">
									<img class="day_comic_image" :src="item.week_url" />
								</div>
								<div class="day_comic_info">
									<strong class="day_comic_text tetle">{{item.week_title}}</strong>
									<small class="day_comic_text">人气：{{item.popularity}}</small>
									<small class="day_comic_text">大神 萨达 爱的</small>
									<small class="day_comic_text">{{item.week_desc}}</small>
								</div>
							<!--</a>-->
							</router-link>
						</li>
						
					</ul>
				</div>
				<div class="day_area_box" :class="{active:isActiveTab==3}">
					<ul class="day_comic_list">
						<li class="day_comic_item" v-for="(item, index) in showList">
							<router-link class="day_comic_link" :to="{path:'/detail',query:{id:item.week_id}}" @click.native="isDataTitle(item)">
							<!--<a class="day_comic_link">-->
								<div class="day_comic_cover">
									<img class="day_comic_image" :src="item.week_url" />
								</div>
								<div class="day_comic_info">
									<strong class="day_comic_text tetle">{{item.week_title}}</strong>
									<small class="day_comic_text">收藏数：{{item.collect}}</small>
									<small class="day_comic_text">大神 萨达 爱的</small>
									<small class="day_comic_text">{{item.week_desc}}</small>
								</div>
							<!--</a>-->
							</router-link>
						</li>
						
					</ul>
				</div>
			</section>
	</div>
</template>

<script>
	export default {
		created(){
			let weekUrl = 'http://localhost:8081/more'
			this.axios.get(weekUrl)
		    .then((data) => {
		    	var dataList = data.data
		    	// 判断点击的是大分类还是内容分类
		    	if(this.$route.query.type){
		    		for(let i = 0; dataList.length > i; i++){
		    		for(let j = 0; dataList[i].week_book.length > j; j++){
		    			if(dataList[i].week_book[j].week_tags == this.$route.query.type){
		    				this.updataList.push(dataList[i].week_book[j])
		    			}
		    		}
		    		}
		    	}else if(this.$route.query.rank){
		    		for(let r = 0; dataList.length > r; r++){
		    			if(dataList[r].id == this.$route.query.rank){
		    				this.updataList = dataList[r].week_book
		    			}
		    		}
		    	}
		
//		        console.log(this.updataList)
		    })
		},
		data(){
			return {
				tabList:[
					{title:"更新",id:1},
					{title:"人气",id:2},
					{title:"收藏",id:3}
				],
				// tab切换
				isActiveTab:1,
				// 更新数据
				updataList:[]
			}
		},
		components: {
		
		},
		computed:{
			// 人气数据
			dataMoods(){
				var moods = this.updataList
				var moods2 = moods.slice(0)
				moods2.sort(function(a, b){
					if(a.popularity > b.popularity){
						return -1
					}else if(a.popularity == b.popularity){
						return 0
					}else{
						return 1
					}
				})
				return moods2
			},
			// 收藏数据
			dataCollect(){
				var Collect = this.updataList
				var Collect2 = Collect.slice(0)
				Collect2.sort(function(a, b){
					if(a.collect > b.collect){
						return -1
					}else if(a.collect == b.collect){
						return 0
					}else{
						return 1
					}
				})
				return Collect2
			},
			// 判断tab显示数据
			showList(){
				if(this.isActiveTab == 1){
					return this.updataList
				}else if(this.isActiveTab == 2){
					return this.dataMoods
				}else if(this.isActiveTab == 3){
					return this.dataCollect
				}
			}
		},
		methods:{
			clickActiveTab(item){
				this.isActiveTab = item.id
			},
			// 点击传本对象的名字
			isDataTitle(item){
				this.$store.state.detail = item.week_title
			}
		},
	}
</script>

<style scoped>
	/*选择分类tab*/
	.classify_tab{
		height: 2rem;
    	background-color: white;
	}
	.tab_list{
		display: flex;
	    -webkit-box-pack: center;
	    -ms-flex-pack: center;
	    justify-content: center;
	}
	.tab_link{
		display: block;
    	width: 5rem;
	    text-align: center;
	    height: 2rem;
	    line-height: 2rem;
	    font-size: 0.75rem;
	    position: relative;
	    color: #969696;
	}
	.tab_link.active{
		color: #535252;
	}
	.tab_link.active::after{
		content: '';
	    width: 0.5rem;
	    height: 0.15rem;
	    left: 2.25rem;
	    bottom: 0;
	    position: absolute;
	    background-color: #ff9a6a;
	    border-radius: 0.15rem;
	    display: block;
	}
	
	/*对应分类数据*/
	.day_area{
		
	}
	.day_area_box{
		display: none;
	}
	.day_area_box.active{
		display: block;
	}
	.day_comic_list{
		overflow: hidden;
    	background-color: #F5F5EE;
	}
	.day_comic_item{
		display: block;
    	margin: 0.25rem 0.25rem 0rem 0.25rem;
    	box-shadow: 0 0 0.125rem rgba(9, 2, 4, 0.06);
	}
	.day_comic_link{
		display: block;
	    height: 5.25rem;
	    text-decoration: none;
	    background-color: white;
	    overflow: hidden;
	}
	.day_comic_cover{
		width: 3.5rem; 
    	height: 4.65rem;
    	float: left;
    	margin: 0.275rem 0.5rem 0rem 0.25rem;
    	background-image: url("../image/isbg.png");
	    background-size: contain;
	    background-position: center;
	    background-color: white;
	}
	.day_comic_image{
		width: 100%;
		height: 100%;
	}
	.day_comic_info{
		text-align: left;
	}
	.day_comic_info::after{
		content: '';
		display: block;
		clear: both;
	}
	.day_comic_text{
		display: block;
		line-height: 1rem;
		padding-top: 1px;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    font-size: 0.6rem;
    	color: #969696;
	}
	.day_comic_text.tetle{
		color: #535252;
    	font-size: 0.8rem; 
    	line-height: 150%;
    	padding-top: 0.5rem;
    	font-weight: 700;
	}
</style>