<template>
	<div class="channel">
		<leader></leader>
		<div class="main">
			<!--今日更新-->
		<section class="update_today">
			<h2 class="channel_title">
				<i class="title_content"></i>
				<a class="channel_more"></a>
			</h2>
			<div class="channel_item" v-for="(item, index) in todayList">
				<router-link class="channel_link" :to="{path:'/detail', query:{id:item.week_id}}" @click.native="isDataTitle(item)">
				
					<div class="channel_item_top">
						<img :src="item.week_url" />
					</div>
					<div class="channel_item_bottom">
						<p class="channel_bottom_name">
							<span class="channel_bottom_left">{{item.week_title}}</span>
							<span class="channel_bottom_right">作者：{{item.writer}}</span>
						</p>
						<p class="channel_bottom_latest">{{item.synopsis}}</p>
					</div>
				</router-link>
			</div>
		</section>
		
		<!--人气推荐-->
		<section class="channel_moods">
			<h2 class="channel_title">
				<i class="title_content two"></i>
			</h2>
			
			<ul class="channel_moods_list">
				<li class="channel_moods_li" v-for="(item, index) in moodsList">
					
					<router-link class="channel_link" :to="{path:'/detail', query:{id:item.week_id}}" @click.native="isDataTitle(item)">
						<div class="channel_item_top">
							<img :src="item.week_url" />
						</div>
						<div class="channel_moods_bottom">
							<p class="channel_bottom_text tetle">{{item.week_title}}</p>
							<p class="channel_bottom_text desc">{{item.week_desc}}</p>
						</div>
					</router-link>
				</li>
				
			</ul>
		</section>
		
		<!--粉丝飙升-->
		<section class="channel_fans">
			<h2 class="channel_title">
				<i class="title_content three"></i>
			</h2>
			
			<ul class="channel_fans_list">
				<li class="channel_fans_li" v-for="(item, index) in fansList">
					
					<router-link class="channel_link vertical" :to="{path:'/detail', query:{id:item.week_id}}" @click.native="isDataTitle(item)">
						<div class="channel_item_top cover">
							<img :src="item.week_url" />
						</div>
						<div class="channel_item_info">
							<p class="channel_bottom_text fansname">{{item.week_title}}</p>
							<p class="channel_bottom_text artist">{{item.writer}}</p>
							<ul class="rank_bar">
								<li class="rank_star"></li>
								<li class="rank_star"></li>
								<li class="rank_star"></li>
								<li class="rank_star"></li>
								<li class="rank_star"></li>
								<li class="rank_score">{{item.grade}}</li>
							</ul>
						</div>
					</router-link>
				</li>
				
			</ul>
		</section>
		
		<!--每周排行-->
		<section class="channel_weekly">
			<h2 class="channel_title">
				<i class="title_content four"></i>
			</h2>
			
			<ul class="channel_fans_list">
				<li class="channel_fans_li litwo" v-for="(item, index) in weeklyList">
					<router-link class="channel_link linktwo" :to="{path:'/detail', query:{id:item.week_id}}" @click.native="isDataTitle(item)">
					
						<div class="channel_item_top cover">
							<img :src="item.week_url" />
						</div>
						<div class="channel_item_info">
							<p class="channel_bottom_text fansname">{{item.week_title}}</p>
							<p class="channel_bottom_text artist">{{item.writer}}</p>
							<p class="channel_bottom_text artist">更新到{{item.updata}}话</p>
						</div>
						<sub class="channel_index"></sub>
					</router-link>
				</li>
			</ul>
		</section>
		</div>
	</div>
</template>

<script>
	import Leader from 'components/Header/Leader'
	export default {
		created(){
			let channelUrl = 'http://localhost:8081/more'
			this.axios.get(channelUrl)
		    .then((data) => {
		        this.channelData = data.data
		        console.log(this.channelData)
		    })
		    
		},
		data(){
			return {
				channelData:[]
			}
		},
		components: {
			Leader
		},
		computed:{
			// 获取今日更新数据
			todayList(){
				if(this.channelData.length > 0){
					return this.channelData[0].week_book.slice(0,1)
				}
			},
			// 人气推荐
			moodsList(){
				if(this.channelData.length > 0){
					return this.channelData[1].week_book.slice(0,6)
				}
			},
			// 粉丝飙升
			fansList(){
				if(this.channelData.length > 0){
					return this.channelData[2].week_book.slice(0,3)
				}
			},
			// 每周推荐
			weeklyList(){
				if(this.channelData.length > 0){
					return this.channelData[3].week_book.slice(0,5)
				}
			}
		},
		methods:{
			// 点击传本对象的名字
			isDataTitle(item){
				this.$store.state.detail = item.week_title
			}
		}
	}
</script>

<style scoped>
	/*今日更新*/
	.update_today{
		box-sizing: border-box;
	}
	.channel_title{
		display: flex;
		-webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    height: 2.3rem;
	    margin-left: 0.5rem;
	    margin-right: 0.5rem;
	}
	.title_content{
		width: 3.875rem;
	    height: 1.35rem;
		background: url("./image/index.png") no-repeat -7.8rem 0rem;
	    background-size: 11.675rem 7.55rem;
	}
	.title_content{
		display: block;
		flex: 1;
	}
	.channel_more{
		width: 3rem;
	    height: 1.25rem;
		background: url("./image/index.png") no-repeat -7.8rem -4.8rem;
	    background-size: 11.675rem 7.55rem;
	}
	.channel_item{
		margin-left: 0.5rem;
		margin-right: 0.5rem;
	}
	.channel_link{
		display: block;
		background-color: #FFFFFF;
		text-decoration: none;
		box-shadow: 0 0 0.125rem rgba(9, 2, 4, 0.06);
	}
	.channel_item_top{
		position: relative;
	    padding-bottom: 46.66%;
	    overflow: hidden;
	    background: url("./image/isbg.png") no-repeat center center;
    	background-size: contain;
	}
	.channel_item_top img{
		z-index: 1;
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	}
	.channel_item_bottom{
		padding: 0.45rem 0rem;
    	box-sizing: border-box;
    	text-align: left;
    	margin-left: 0.5rem;
    	margin-right: 0.5rem;
	}
	.channel_bottom_name{
		display: flex;
		align-items: center;
	}
	.channel_bottom_left{
		flex: 1;
		color: #535252;
	    font-size: 0.7rem;
	    line-height: 0.8rem;
	}
	.channel_bottom_right{
		display: block;
		color: #969696;
	    font-size: 0.6rem;
	    line-height: 0.7rem;
		white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.channel_bottom_latest{
		margin-top: 0.2rem;
		color: #969696;
	    font-size: 0.6rem;
	    line-height: 0.7rem;
	}
	
	/*人气推荐*/
	.channel_moods{
		box-sizing: border-box;
	}
	.title_content.two{
		background: url("./image/index.png") no-repeat -7.8rem -1.6rem;
	    background-size: 11.675rem 7.55rem;
	}
	.channel_moods_list{
		margin-left: 0.5rem;
	}
	.channel_moods_list::after{
		content: "";
	    display: block;
	    clear: both;
	}
	.channel_moods_li{
		float: left;
	    display: block;
	    width: 50%;
	    box-sizing: border-box;
	    padding-right: 0.5rem;
	    padding-bottom: 0.5rem;
	}
	.channel_moods_bottom{
		text-align: left;
		padding: 0.45rem 0.5rem;
    	box-sizing: border-box;
	}
	.channel_bottom_text{
		display: block;
		white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.channel_bottom_text.tetle{
		color: #535252;
	    font-size: 0.7rem;
	    line-height: 0.8rem;
	}
	.channel_bottom_text.desc{
		color: #969696;
	    font-size: 0.6rem;
	    line-height: 0.7rem;
	    margin-top: 0.25rem;
	}
	
	/*粉丝飙升*/
	.channel_fans{
		background-color: #FFFFFF;
		box-shadow: 0 0 0.125rem rgba(9, 2, 4, 0.06);
	}
	.title_content.three{
		background: url("./image/index.png") no-repeat -7.8rem -3.2rem;
	    background-size: 11.675rem 7.55rem;
	}
	.channel_fans_list{
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		background-color: #FFFFFF;
	}
	.channel_fans_li{
		display: block;
		padding-bottom: 0.5rem;
	}
	.channel_link.vertical{
		display: flex;
		background: #F5F5EE;
	}
	.channel_item_top.cover{
		width: 8.625rem;
	    height: 4.025rem;
	    padding: 0;
	    overflow: hidden;
	}
	.channel_item_info{
		flex: 1;
		text-align: left;
	}
	.channel_bottom_text.fansname{
		margin-left: 0.5rem;
		margin-top: 0.5rem;
		margin-right: 0.5rem;
		color: #535252;
	    font-size: 0.7rem;
	    line-height: 0.8rem;
	}
	.channel_bottom_text.artist{
		margin-top: 0.3rem;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		color: #969696;
	    font-size: 0.6rem;
	    line-height: 0.7rem;
	}
	.rank_bar{
		display: flex;
		margin-top: 0.35rem;
		margin-left: 0.5rem;
	}
	.rank_star{
		text-indent: -2500rem;
	    width: 0.55rem;
	    height: 0.55rem;
	    background: url("./image/star.png");
	    background-size: 0.55rem 0.55rem;
	}
	.rank_score{
		margin-left: 0.125rem;
	    height: 0.55rem;
	    line-height: 0.55rem;
	    font-size: 0.5rem;
	    font-weight: 200;
	    color: #ff9a6a;
	}
	
	/*每周排行*/
	.channel_weekly{
		padding-bottom: 0.5rem;
		box-sizing: border-box;
	}
	.title_content.four{
		background: url("./image/index.png") no-repeat 0rem -6.2rem;
	    background-size: 11.675rem 7.55rem;
	}
	.channel_fans_li.litwo{
		padding-top: 0.5rem;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		position: relative;
		border-bottom:1px solid #C5C5C5;
	}
	.channel_link.linktwo{
		display: flex;
	}
	.channel_index{
	    width: 2.35rem;
	    height: 2.85rem;
	    position: absolute;
	    z-index: 0;
	    right: 0;
	    bottom: 0;
	    color: #C5C5C5;
	    font-size: 1.8rem;
	    font-weight: 100;
	}
	.channel_weekly .channel_fans_li.litwo:nth-child(1) .channel_index{
		background: url("./image/index.png") no-repeat 0rem 0rem;
	    background-size: 11.675rem 7.55rem;
	}
	.channel_weekly .channel_fans_li.litwo:nth-child(2) .channel_index{
		background: url("./image/index.png") no-repeat -2.6rem 0rem;
	    background-size: 11.675rem 7.55rem;
	}
	.channel_weekly .channel_fans_li.litwo:nth-child(3) .channel_index{
		background: url("./image/index.png") no-repeat -5.2rem 0rem;
	    background-size: 11.675rem 7.55rem;
	}
	.channel_weekly .channel_fans_li.litwo:nth-child(4) .channel_index{
		background: url("./image/index.png") no-repeat 0rem -3.1rem;
	    background-size: 11.675rem 7.55rem;
	}
	.channel_weekly .channel_fans_li.litwo:nth-child(5) .channel_index{
		background: url("./image/index.png") no-repeat -2.6rem -3.1rem;
	    background-size: 11.675rem 7.55rem;
	}
</style>