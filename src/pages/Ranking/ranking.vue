<template>
	<div class="ranking">
		<leader></leader>
		<div class="main">
			<!--头部切换部分-->
			<div class="tab_list">
				<a class="tab_list_item" v-for="(item, index) in tablist" @click="isTabactive(item)" :class="{active:isTabactiveId==item.id}">{{item.tetle}}</a>
			</div>
			
			<!--头部top3部分-->
			<section class="rank_top3">
				<div class="rank_top3_box active">
					<div class="top3_box_item" v-for="(item, index) in topThree">
						<router-link class="top3_box_link" :to="{path:'/detail', query:{id:item.week_id}}" @click.native="isDataTitle(item)">
						<!--<a class="top3_box_link">-->
							<img class="top3_cover" :src="item.week_url" />
							<strong class="top3_tetle">{{item.week_title}}</strong>
							<small class="top3_updata">更新到{{item.updata}}话</small>
						<!--</a>-->
						</router-link>
					</div>
				</div>
			</section>
			
			<!--排行数据-->
			<section class="rank_orderedList">
				<div class="list_hot active">
					<ul class="list_hot_ul">
						<li class="list_hot_li" v-for="(item,index) in rankData">
							<router-link class="list_hot_link" :to="{path:'/detail', query:{id:item.week_id}}" @click.native="isDataTitle(item)">
								<div class="list_hot_left">
									<img :src="item.week_url" />
								</div>
								<div class="list_hot_rigth">
									<strong class="list_hot_tetle">{{item.week_title}}</strong>
									<small class="list_hot_updata">更新到{{item.updata}}话</small>
									<small class="list_hot_tag">恋爱 爆笑 冒险</small>
									<small class="list_hot_desc">{{item.week_desc}}</small>
									<i class="list_hot_index">{{item.week_id}}</i>
								</div>
							</router-link>
						</li>
						
					</ul>
				</div>
				
			</section>
		</div>
	</div>
</template>

<script>
	import Leader from 'components/Header/Leader'
	export default {
		created(){
			let rankUrl = 'http://localhost:8081/more'
			this.axios.get(rankUrl)
		    .then((data) => {
		        this.rangkingList = data.data
		        console.log(this.rangkingList)
		    })
		    
		},
		data(){
			return {
				tablist:[
					{tetle:"更新", id:1,},
					{tetle:"畅销", id:2,},
					{tetle:"人气", id:3,},
					{tetle:"月票", id:4,}
				],
				isTabactiveId:1,
				rangkingList:[],
				topThree:[],
				// 排行排号和 排行的总数
				topNumber:4,
//				topSum:0,
			}
		},
		components: {
			Leader
		},
		computed: {
			rankData(){
				if(this.rangkingList.length > 0){
					for(let i = 0; i < this.rangkingList.length; i++){
						if(this.rangkingList[i].id == this.isTabactiveId){
							this.topThree = this.rangkingList[i].week_book.slice(0,3)
							return this.rangkingList[i].week_book.slice(3)
						}
					}
				}
			},
			// 排行数
			istopNumber(){
				
			}
		},
		methods:{
			isTabactive(item){
				this.isTabactiveId = item.id
			},
			// 点击传本对象的名字
			isDataTitle(item){
				this.$store.state.detail = item.week_title
			}
		}
	}
</script>

<style scoped>
	/*头部分页部分*/
	.tab_list{
		width: 100%;
		height: 2rem;
		background-color: white;
		margin-top: 0.05rem;
		display: flex;
		justify-content: center;
	}
	.tab_list_item{
		display: block;
		text-decoration: none;
		width: 4rem;
		text-align: center;
		height: 2rem;
		line-height: 2rem;
		font-size: 0.75rem;
		position: relative;
		color: #969696;
	}
	.tab_list_item.active{
		color: #535252;
	}
	.tab_list_item.active::after{
		content: '';
	    width: 0.5rem;
	    height: 0.15rem;
	    left: 1.75rem;
	    bottom: 0;
	    position: absolute;
	    background-color: #ff9a6a;
	    border-radius: 0.15rem;
	    display: block;
	}
	
	/*头部top3部分*/
	.rank_top3{
		
	}
	.rank_top3_box{
	    display: none;
	    -webkit-box-align: end;
	    -ms-flex-align: end;
	    align-items: flex-end;
	    -webkit-box-pack: center;
	    -ms-flex-pack: center;
	    justify-content: center;
	    padding-top: 0.95rem;
	    padding-bottom: 1.1rem;
	    background-image: url("./image/rank.png");
	    background-position: center bottom;
	    background-repeat: no-repeat;
	    background-size: 100% auto;
	}
	.rank_top3_box.active{
		display: flex;
	}
	.top3_box_item{
		width: 4.35rem;
		position: relative;
		border-radius: 0.1rem;
    	overflow: hidden;
	}
	.top3_box_item:nth-child(1){
		margin-right: 1.1rem;
	}
	.top3_box_item:nth-child(3){
		margin-left: 1.1rem;
	}
	.top3_box_item::before{
		width: 3.85rem;
    	left: 0.25rem;
    	top: -0.35rem;
    	position: absolute;
	    content: '';
	    height: 1px;
	    -webkit-transform: scale(1, 0.5);
	    transform: scale(1, 0.5);
	    background-color: #C5C5C5;
	}
	
	.top3_box_item:nth-child(2){
		width: 5.25rem;
		position: relative;
		overflow: hidden;
	}
	.top3_box_item:nth-child(2)>.top3_box_link>.top3_cover{
		display: block;
		width: 5.25rem;
		height: 7rem;
	}
	.top3_box_item>.top3_box_link{
		display: block;
		text-decoration: none;
		background: url("./image/top3_2bg.jpg") no-repeat right bottom;
		background-size: auto 2.25rem;
		background-color: #ffa755;
	}
	.top3_box_item:nth-child(2)>.top3_box_link{
		display: block;
		background: url("./image/top3_1bg.jpg") no-repeat right bottom;
		background-size: auto 2.25rem;
		background-color: #e86a3e;
	}
	.top3_box_item:nth-of-type(3)>.top3_box_link{
		display: block;
		background: url("./image/top3_3bg.jpg") no-repeat right bottom;
		background-size: auto 2.25rem;
		background-color: #ffa755;
	}
	
	.top3_box_link::after{
		width: 4.1rem;
    	left: 0.125rem;
    	top: -0.2rem;
    	position: absolute;
	    content: '';
	    height: 1px;
	    -webkit-transform: scale(1, 0.5);
	    transform: scale(1, 0.5);
	    background-color: #C5C5C5;
	}
	.top3_cover{
		display: block;
		width: 4.35rem;
		height: 5.8rem;
		background-image: url("./image/isbg.png");
	    background-size: contain;
	    background-position: center;
	    background-color: white;
	}
	.top3_tetle{
		display: block;
	    text-align: center;
	    color: white;
		font-size: 0.8rem;
	    line-height: 100%;
	    padding-top: 0.3rem;
	    padding-bottom: 0.15rem;
	    white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
	}
	.top3_updata{
		display: block;
	    text-align: center;
	    color: white;
	    font-size: 0.6rem;
	    line-height: 100%;
	    padding-bottom: 0.35rem;
	    white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
	}
	
	/*排行数据*/
	.rank_orderedList{
		padding-top: 0.25rem;
	}
	.list_hot{
		display: none;
	}
	.list_hot.active{
		display: block;
	}
	.list_hot_ul{
		padding-left: 0.25rem;
	    padding-right: 0.25rem;
	    padding-bottom: 0.25rem;
	}
	.list_hot_li{
		position: relative;
		border-bottom: 0.25rem solid #F5F5EE;
	}
	.list_hot_link{
		display: flex;
		text-decoration: none;
		background-color: white;
		padding: 0.25rem;
		box-sizing: border-box;
	}
	.list_hot_left{
		width: 3.5rem;
		height: 4.675rem;
	    margin-right: 0.5rem;
		background-image: url("./image/isbg.png");
	    background-size: contain;
	    background-position: center;
	    background-color: white;
	}
	.list_hot_left img{
		display: block;
		width: 100%;
		height: 100%;
	}
	.list_hot_rigth{
		-webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    text-align: left;
	    min-width: 1px;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-orient: vertical;
	    -webkit-box-direction: normal;
	    -ms-flex-direction: column;
	    flex-direction: column;
	    -webkit-box-pack: center;
	    -ms-flex-pack: center;
	    justify-content: center;
	}
	.list_hot_rigth strong{
		color: #535252;
	    font-size: 0.8rem;
	    line-height: 150%;
	    padding-top: 0.25rem;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.list_hot_rigth small{
		font-size: 0.6rem;
	    color: #969696;
	    line-height: 1rem;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.list_hot_index{
		position: absolute;
	    font-size: 1.5rem;
	    color: #C5C5C5;
	    right: 0.45rem;
	    line-height: 100%;
	    top: 0.45rem;
	    display: block;
	    font-style: normal;
	}
</style>