<template>
	<div class="overtake">
		<leader></leader>
		<div class="main">
			<!--选择日期-->
			<section class="day_tab">
				<ul class="day_tab_ul">
					<li class="day_tab_li" v-for="(item, index) in listdata" :class="{active : listactive==item.id}" @click="isactive(item)">{{item.time}}</li>
				</ul>
			</section>
			
			<!--更新列表-->
			<section class="day_area">
				<div class="day_area_box" v-for="(item, index) in overtakeList" :class="{active : listactive==item.id}" @click="isactive(item)">
					<ul class="day_comic_list">
						<li class="day_comic_item" v-for="(item, index) in activeOvertakeList">
							<router-link class="day_comic_link" :to="{path:'detail', query:{id:item.week_id}}" @click.native="isDataTitle(item)">
							
								<div class="day_comic_cover">
									<img class="day_comic_image" :src="item.week_url" />
								</div>
								<div class="day_comic_info">
									<strong class="day_comic_text tetle">{{item.week_title}}</strong>
									<small class="day_comic_text updata">更新到{{item.updata}}话</small>
									<small class="day_comic_text desc">{{item.week_desc}}</small>
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
			let weekUrl = 'http://localhost:8081/more'
			this.axios.get(weekUrl)
		    .then((data) => {
		    	console.log(data.data)
		        this.overtakeList = data.data
		    })
		},
		data(){
			return {
				listdata:[
					{time:"一",id:1},
					{time:"二",id:2},
					{time:"三",id:3},
					{time:"四",id:4},
					{time:"五",id:5},
					{time:"六",id:6},
					{time:"日",id:7}
				],
				listactive:1,
				overtakeList:[]
			}
		},
		components: {
			Leader
		},
		computed: {
			activeOvertakeList(){
				if(this.overtakeList.length > 0){
					return this.overtakeList[this.listactive-1].week_book
				}else{
					return
				}
			}
		},
		methods:{
			isactive(item){
				this.listactive = item.id
			},
			// 点击传本对象的名字
			isDataTitle(item){
				this.$store.state.detail = item.week_title
			}
		}
	}
</script>

<style scoped>
	/*选择日期tab*/
	.day_tab{
		position: fixed;
	    left: 0;
	    width: 100%;
	    height: 2rem;
	    margin-top: 2px;
	    background-color: #FFFFFF;
	}
	.day_tab_ul{
		display: flex;
		width: 100%;
	    height: 100%;
	    overflow: hidden;
	}
	.day_tab_li{
		flex: 1;
	    display: block;
	    position: relative;
	    height: 2rem;
	    line-height: 2rem;
	    font-size: 0.75rem;
	    color: #969696;
	    text-align: center;
	}
	.day_tab_li.active::after{
		content: '';
	    position: absolute;
	    bottom: 0;
	    left: 50%;
	    -webkit-transform: translate(-50%, 0);
	    transform: translate(-50%, 0);
	    width: 0.5rem;
	    height: 0.15rem;
	    background-color: #ff9a6a;
	}
	
	/*更新列表*/
	.day_area{
		margin-top: 2rem;
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
    	margin: 0.275rem 0.65rem 0rem 0.25rem;
    	background-image: url("./image/isbg.png");
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
	.day_comic_text{
		padding-top: 1px;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.day_comic_text.tetle{
		display: block;
	    margin-top: 1.15rem;
	    font-size: 0.8rem;
	    font-weight: bold;
	    color: #535252;
	}
	.day_comic_text.updata{
		display: block;
	    margin-top: 0.4rem;
	    font-size: 0.6rem;
	    font-weight: normal;
	    color: #969696;
	}
	.day_comic_text.desc{
		display: block;
	    margin-top: 0.4rem;
	    font-size: 0.6rem;
	    font-weight: normal;
	    color: #969696;
	}
</style>