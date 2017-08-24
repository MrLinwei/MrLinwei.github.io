<template>
	<div class="hello">
		<!--头部选项-->
		<leader></leader>
		<!--整体内容盒子-->
		<div class="main">
			<!--轮播图-->
			<div class="swiper_list" id="spot">
				<swiper :options="swiperOption" ref="mySwiper">
				    <!-- slides -->
				    <swiper-slide><img src="./image/0.jpg" /></swiper-slide>
				    <swiper-slide><img src="./image/1.jpg" /></swiper-slide>
				    <swiper-slide><img src="./image/2.jpg" /></swiper-slide>
				    <swiper-slide><img src="./image/3.jpg" /></swiper-slide>
				    <swiper-slide><img src="./image/4.jpg" /></swiper-slide>
				    <!-- Optional controls -->
				    <div class="swiper-pagination"  slot="pagination"></div>
				</swiper>
			</div>
			
			<!--选项分类-->
			<ul class="options_list">
				<li class="options_listsub">
					<!--/classify-->
					<router-link class="options_access" :to="{path:'/classify/index'}" @click.native="settoptext()">
						<i></i>
						<span>分类</span>
					</router-link>
				</li>
				<li class="options_listsub">
					<!--/ranking-->
					<router-link class="options_access" to="/ranking" @click.native="settoptext()">
						<i></i>
						<span>排行</span>
					</router-link>
				</li>
				<li class="options_listsub">
					<!--channel-->
					<router-link class="options_access" to="/channel" @click.native="settoptext()">
						<i></i>
						<span>条漫</span>
					</router-link>
				</li>
				<li class="options_listsub">
					<router-link class="options_access" :to="{path:'/historys', query:{index:'his'}}" @click.native="settoptext()">
						<i></i>
						<span>历史</span>
					</router-link>
				</li>
			</ul>
			
			<!--无良推荐-->
			<section class="recommend">
				<h2 class="sub_title">
					<div class="sub_titleLeft"></div>
					
					<router-link class="sub_titleRight" :to="{path:'/more', query:{tags:1,even:'nice'}}" @click.native="settoptext()"></router-link>
				</h2>
				
				<ul class="comic_list">
					<li class="subcomic_list" v-for="(item, index) in unscrupulous">
						<router-link class="passcomic_list" :to="{path:'detail',query:{id:item.week_id}}" @click.native="settoptext(item)">
							<div class="subcomic_list_map"><img :src="item.week_url" /></div>
							<div class="subcomic_list_writing">
								<strong class="writing_son">{{item.week_title}}</strong>
								<p class="writing_section">{{item.week_desc}}</p>
							</div>
						</router-link>
					</li>
				</ul>
			</section>
			
			<!--每日一推-->
			<section class="recommend_days">
				<h2 class="sub_title">
					<div class="sub_titleLeft two"></div>
					
					<router-link class="sub_titleRight" :to="{path:'/more', query:{tags:2,even:'everyday'}}" @click.native="settoptext()"></router-link>
				</h2>
				<div class="recommend_list" v-for="(item, index) in everyday">
					
					<router-link class="recommend_cover" :to="{path:'detail',query:{id:item.week_id}}" @click.native="settoptext(item)">
						<img :src="item.week_url"/>
					</router-link>
					<a class="recommend_character">
						<span class="text">{{item.week_title}}</span>
						<small class="artist">作者：{{item.writer}}</small>
					</a>
				</div>
			</section>
			
			<!--vip阅读数据-->
			<section class="recommend three">
				<h2 class="sub_title">
					<div class="sub_titleLeft three"></div>
					
					<router-link class="sub_titleRight" :to="{path:'/more', query:{tags:3,even:'vip'}}" @click.native="settoptext()"></router-link>
				</h2>
				
				<ul class="comic_list">
					<li class="subcomic_list" v-for="(item, index) in vipread">
						<router-link class="passcomic_list" :to="{path:'detail',query:{id:item.week_id}}" @click.native="settoptext(item)">
						
							<div class="subcomic_list_map">
								<img :src="item.week_url" />
								<i class="passcomic_list_vip"></i>
							</div>
							<div class="subcomic_list_writing">
								<strong class="writing_son">{{item.week_title}}</strong>
								<p class="writing_section">{{item.week_desc}}</p>
							</div>
						
						</router-link>
					</li>
				</ul>
			</section>
			
			<!--锚点top-->
			<a class="anchor" href="javascript:void(0)" @click="isAnchor()" :class="{'active':scrolled}"></a>
			
			<!--特别君-->
			<section class="especially">
				<h2 class="sub_title">
					<div class="sub_titleLeft four"></div>
					<a class="sub_titleRight"></a>
				</h2>
				
				<ul class="especially_list">
					<li class="especially_list_left">
						<a class="especially_list_link">
							<img src="./image/8.jpg" />
						</a>
					</li>
					<li class="especially_list_left two">
						<a class="especially_list_link">
							<img src="./image/9.jpg" />
						</a>
					</li>
					<div class="clear"></div>
				</ul>
			</section>
			
			<!--今日更新-->
			<section class="update_today">
				<h2 class="sub_title">
					<div class="sub_titleLeft five"></div>
					
					<router-link class="sub_titleRight" :to="{path:'/more', query:{tags:4,even:'today'}}" @click.native="settoptext()"></router-link>
				</h2>
				
				<div class="update_area">
					<aside class="npc_1"></aside>
					<ul class="update_list">
						<li class="update_list_li" v-for="(item, index) in updata">
							<router-link class="update_list_link" :to="{path:'detail',query:{id:item.week_id}}" @click.native="settoptext(item)">
							<!--<a class="update_list_link">-->
								<div class="update_list_map">
									<img :src="item.week_url" />
								</div>
								<div class="update_list_message">
									<strong class="update_list_strong">{{item.week_title}}</strong>
									<small class="update_list_small">作者：{{item.writer}}</small>
									<small class="update_list_small">更新到{{item.updata}}话</small>
									<ul class="update_list_rank">
										<li class="update_list_star"></li>
										<li class="update_list_star"></li>
										<li class="update_list_star"></li>
										<li class="update_list_star"></li>
										<li class="update_list_star"></li>
										<li class="update_list_score">9.2</li>
										<div class="clear"></div>
									</ul>
								</div>
								<div class="clear"></div>
							<!--</a>-->
							</router-link>
						</li>
						
					</ul>
				</div>
			</section>
			
			<!--动画专区-->
			<section class="animation">
				<h2 class="sub_title">
					<div class="sub_titleLeft six"></div>
					<a class="sub_titleRight"></a>
				</h2>
				
				<ul class="animation_list">
					<li class="animation_list_li">
						<a class="animation_list_link">
							<div class="animation_list_video">
								<img src="./image/12.jpg" />
								<i class="animation_list_videostart"></i>
							</div>
							<strong class="animation_list_title">
								<i></i>
								<span>银之守墓人</span>
							</strong>
							<small class="animation_list_collect">12集</small>
						</a>
					</li>
					<li class="animation_list_li">
						<a class="animation_list_link">
							<div class="animation_list_video">
								<img src="./image/12.jpg" />
								<i class="animation_list_videostart"></i>
							</div>
							<strong class="animation_list_title">
								<i></i>
								<span>银之守墓人</span>
							</strong>
							<small class="animation_list_collect">12集</small>
						</a>
					</li>
					<li class="animation_list_li">
						<a class="animation_list_link">
							<div class="animation_list_video">
								<img src="./image/12.jpg" />
								<i class="animation_list_videostart"></i>
							</div>
							<strong class="animation_list_title">
								<i></i>
								<span>银之守墓人</span>
							</strong>
							<small class="animation_list_collect">12集</small>
						</a>
					</li>
					<li class="animation_list_li">
						<a class="animation_list_link">
							<div class="animation_list_video">
								<img src="./image/12.jpg" />
								<i class="animation_list_videostart"></i>
							</div>
							<strong class="animation_list_title">
								<i></i>
								<span>银之守墓人</span>
							</strong>
							<small class="animation_list_collect">12集</small>
						</a>
					</li>
					<div class="clear"></div>
				</ul>
			</section>
			
			<!--日漫经典-->
			<section class="japan_comic">
				<h2 class="sub_title">
					<div class="sub_titleLeft seven"></div>
					<router-link class="sub_titleRight" :to="{path:'/more', query:{tags:5,even:'manga'}}" @click.native="settoptext()"></router-link>
				</h2>
				
				<ul class="comic_list">
					<li class="subcomic_list" v-for="(item, index) in manga">
						<router-link class="passcomic_list" :to="{path:'detail',query:{id:item.week_id}}" @click.native="settoptext(item)">
						
							<div class="subcomic_list_map"><img :src="item.week_url" /></div>
							<div class="subcomic_list_writing">
								<strong class="writing_son">{{item.week_title}}</strong>
								<p class="writing_section">{{item.week_desc}}</p>
							</div>
						
						</router-link>
					</li>
				</ul>
			</section>
			
			<!--新作数据-->
			<section class="new_comic">
				<h2 class="sub_title">
					<div class="sub_titleLeft eight"></div>
					<router-link class="sub_titleRight" :to="{path:'/more', query:{tags:6,even:'work'}}" @click.native="settoptext()"></router-link>
				</h2>
				
				<ul class="comic_list">
					<li class="subcomic_list" v-for="(item, index) in newwork">
						<router-link class="passcomic_list" :to="{path:'detail',query:{id:item.week_id}}" @click.native="settoptext(item)">
						
							<div class="subcomic_list_map"><img :src="item.week_url" /></div>
							<div class="subcomic_list_writing">
								<strong class="writing_son">{{item.week_title}}</strong>
								<p class="writing_section">{{item.week_desc}}</p>
							</div>
						
						</router-link>
					</li>
				</ul>
			</section>
			
			<!--底部-->
			<footer class="bottom">
				<div class="bottom_row">
					<i class="link"></i>
					<a class="npc_2 one">电脑版</a>
					<a class="npc_2 two">帮助</a>
					<a class="npc_2 three">意见反馈</a>
				</div>
			</footer>
		</div>
	</div>
</template>

<script>
// 引入header
import Leader from 'components/Header/Leader'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
// 引入mint-ui
import { Lazyload } from 'mint-ui';
export default {
	name :'carrousel',
	created(){
		// 获取首页的数据
    	let recommendUrl = 'http://localhost:8081/more'
    	this.axios.get(recommendUrl)
      		.then((data) => {
        	this.recommend = data.data
      	})
      	
      	// 判断是在主页
      	if(this.$route.path === "/"){
      		this.$store.state.toptext = true
      	}
      	console.log(this.$route.name)
      	
	},
	data(){
		return {
		// 存储获取到的推荐数据
		recommend:[],
		// 锚点显示功能
		scrolled:false,
		// swiper
        swiperOption: {
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          autoplayDisableOnInteraction: false,
//        direction : 'vertical',
          grabCursor : true,
          loop : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true
        }
      }
	},
	components: {
		Leader,
		swiper,
    	swiperSlide
	},
	computed: {
      	swiper() {
        	return this.$refs.mySwiper.swiper
      	},
      
      	// 获取加载数据
		unscrupulous() {
			if(this.recommend.length > 0){
				return this.recommend[0].week_book.slice(0,6)
			}
		},
		// 每日一推
		everyday() {
			if(this.recommend.length > 0){
				return this.recommend[1].week_book.slice(0,1)
			}
		},
		
		// 存储获取vip阅读数据
		vipread() {
			if(this.recommend.length > 0){
				return this.recommend[2].week_book.slice(0,6)
			}
		},
		// 今天更新数据
		updata(){
			if(this.recommend.length > 0){
				return this.recommend[3].week_book.slice(0,3)
			}
		},
		// 日漫经典
		manga() {
			if(this.recommend.length > 0){
				return this.recommend[4].week_book.slice(0,3)
			}
		},
		// 存储新作数据
		newwork() {
			if(this.recommend.length > 0){
				return this.recommend[5].week_book.slice(0,3)
			}
		}
    },
	mounted() {
		var main = document.querySelector(".main")
		var _this = this
		main.onscroll = function () {
	 		if(main.scrollTop >= 200) {
	 			_this.scrolled = true
	 		}else{
	 			_this.scrolled = false
	 		}
		}
		
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      	this.swiper.slideTo(2, 500, false)
      	
   	},
   	methods:{
   		isAnchor(){
   			document.getElementById('spot').scrollIntoView()
   		},
   		settoptext(item){
   			// 改变tabBar显示状态
   			this.$store.state.toptext = false
   			// 点击传本对象的名字
   			if(item){
   				this.$store.state.detail = item.week_title
   			}
   		}
		
	}
}
</script>

<style scoped>
	/*轮播图*/
	.swiper_list{
		width: 100%;
		height: 10.9rem;
	}
	.swiper-container{
		width: 100%;
		height: 100%;
	}
	.swiper-container img{
		width: 100%;
		height: 100%;
	}
	.swiper-pagination{
		width: 4.5rem;
		height: 1rem;
		margin-left: 80%;
		margin-bottom: 0.5rem;
	}
	/*选项栏*/
	.options_list{
		width: 100%;
		height: 4.5rem;
		background: transparent url("image/5.png") no-repeat scroll 0 100%;
		background-size: 100% 4.5rem;
		margin-top: -1.75rem;
		z-index: 2;
		position: relative;
		font-size: 0.6rem;
		text-align: center;
	}
	.options_list>.options_listsub{
		display: inline-block;
    	width: 22%;
    	margin-top: 1.5rem;
    	text-align: center;
	}
	.options_list>.options_listsub>.options_access{
		text-decoration: none;
		display: inline-block;
	    padding-left: 0.25rem;
	    padding-right: 0.25rem;
	    padding-bottom: 0.2rem;
	}
	.options_list>.options_listsub>.options_access i{
		display: block;
		width: 1.7rem;
    	height: 1.7rem;
		background:url("./image/sprite_sheetTwo.png") no-repeat -17rem -3.75rem;
		background-size: 20.5rem 17.5rem;
	}
	.options_list>.options_listsub:nth-child(2)>.options_access i{
		background:url("./image/sprite_sheetTwo.png") no-repeat -13rem -5.825rem;
		background-size: 20.5rem 17.5rem;
	}
	.options_list>.options_listsub:nth-child(3)>.options_access i{
		background:url("./image/sprite_sheetTwo.png") no-repeat -14.95rem -5.825rem;
		background-size: 20.5rem 17.5rem;
	}
	.options_list>.options_listsub:nth-child(4)>.options_access i{
		background:url("./image/sprite_sheetTwo.png") no-repeat -16.9rem -5.825rem;
		background-size: 20.5rem 17.5rem;
	}
	.options_list>.options_listsub>.options_access span{
		display: block;
	    margin-top: 0.15rem;
	    font-size: 0.6rem;
	    color: #969696;
	}
	/*内容推荐*/
	.recommend{
		margin-top: 0.25rem;
	}
	.comic_list{
		margin-top: -0.75rem;
		overflow: hidden;
	}
	.sub_title{
		width: 100%;
		height: 2.3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
	.sub_titleLeft{
		width: 7.5rem;
		height: 2rem;
		background: url("./image/sprite_sheetTwo.png") no-repeat -5.25rem 0rem;
		background-size: 20.5rem 17.5rem;
	}
	.sub_titleRight{
		display: block;
		font-size: 0;
		width: 3rem;
		height: 1.25rem;
		background: url("image/sprite_sheetTwo.png") no-repeat -17rem -2.25rem;
		background-size: 20.5rem 17.5rem;
	}
	
	.subcomic_list{
		display: inline-block;
		width: 28%;
		margin-left: 4%;
		margin-top: 0.75rem;
		background-color: #FFFFFF;
		overflow: hidden;
		float: left;
	}
	.passcomic_list{
		display: block;
		text-decoration: none;
	}
	.subcomic_list_map{
	    position: relative;
	    width: 100%;
	    height: 7rem;
	    margin-bottom: 0.4rem;
	    background-image: url("./image/isbg.png");
	    background-size: contain;
	    background-position: center;
	    background-color: white;
	}
	.subcomic_list_map img{
		width: 100%;
		height: 100%;
	}
	.clear{
		clear: both;
	}
	.writing_son{
		display: block;
	    margin-bottom: 0.25rem;
	    font-size: 0.7rem;
	    color: #535252;
	    font-weight: 700;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.writing_section{
		padding-top: 1px;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: block;
	    margin-bottom: 0.375rem;
	    font-size: 0.6rem;
	    color: #969696;
	}
	
	/*每日推荐*/
	.recommend_days{
		margin-top: 0.25rem;
	}
	.recommend_list{
		margin-left: 0.5rem;
	    margin-right: 0.5rem;
	    background-color: #FFFFFF;
	    overflow: hidden;
	}
	.recommend_cover{
		display: block;
		width: 100%;
		height: 9.1rem;
	}
	.recommend_cover>img{
		width: 100%;
		height: 100%;
	}
	.recommend_character{
		display: flex;
	    justify-content: space-between;
	    align-items: center;
	    height: 2rem;
	}
	.recommend_character>.text{
		display: block;
	    margin-left: 0.75rem;
	    font-size: 0.8rem;
	    color: #535252;
	}
	.recommend_character>.artist{
		display: block;
	    margin-right: 0.75rem;
	    font-size: 0.6rem;
	    color: #C5C5C5;
	}
	.sub_titleLeft.two{
		background: url("./image/sprite_sheetTwo.png") no-repeat -13rem 0rem;
		background-size: 20.5rem 17.5rem;
	}
	
	/*vip阅读数据*/
	.recommend.three{
		margin-bottom: 0.75rem;
	}
	.passcomic_list_vip{
		display: block;
		width: 1.6rem;
	    height: 1.6rem;
	    background-image: url("./image/vip.png");
	    background-size: 1.6rem 1.6rem;
	    background-repeat: no-repeat;
	    position: absolute;
	    top: 0;
	    right: 0;
	}
	.sub_titleLeft.three{
		background: url("./image/sprite_sheetTwo.png") no-repeat -5.25rem -2.25rem;
		background-size: 20.5rem 17.5rem;
	}
	
	/*锚点*/
	.anchor{
		position: fixed;
		z-index: 1;
		bottom: 4rem;
		right: 1rem;
		text-indent: -2500rem;
		font-size: 0;
		padding: 0.275rem;
		background-color: white;
		border-radius: 0.125rem;
		border: 1px solid #797878;
		
		transition: transform 300ms ease, visibility 300ms ease, opacity 300ms ease, -webkit-transform 300ms ease;
		transform: translate3d(0, 200%, 0);
	    visibility: hidden;
	    opacity: 0;
	}
	.anchor.active{
		transform: translate3d(0, 0, 0);
	    visibility: visible;
	    opacity: 1;
	}
	.anchor::after{
		content: "";
	    display: block;
	    width: 1.35rem;
	    height: 1.35rem;
	    background: url("../../components/Header/image/sprite_sheet.png") no-repeat -8.7rem -5.3rem;
	    background-size: 14.8rem 7rem;
	}
	
	/*特别君*/
	.sub_titleLeft.four{
		background: url("./image/sprite_sheetTwo.png") no-repeat -5.25rem -4.5rem;
		background-size: 20.5rem 17.5rem;
	}
	.especially{
		margin-bottom: 0.75rem;
		background-color: #FFFFFF;
	}
	.especially_list{
		padding-bottom: 0.75rem;
	}
	.especially_list_left{
		display: inline-block;
		float: left;
	    margin-left: 4%;
	    width: 44%;
	}
	.especially_list_link{
		display: block;
    	overflow: hidden;
	}
	.especially_list_link img{
		width: 100%;
		height: 100%;
	}
	.especially_list_left.two{
		margin-right: 4%;
	}
	
	
	/*今日更新*/
	.update_today{
		background-color: #FFFFFF;
	}
	.sub_titleLeft.five{
		background: url("./image/sprite_sheetTwo.png") no-repeat -5.25rem -6.75rem;
		background-size: 20.5rem 17.5rem;
	}
	.update_area{
		display: flex;
	}
	.update_area>.npc_1{
		display: block;
		width: 5rem;
    	height: 17.5rem;
    	background: url("./image/sprite_sheetTwo.png") no-repeat 0rem 0rem;
    	background-size: 20.5rem 17.5rem;
	}
	.update_list{
		flex: 1;
    	margin-right: 0.5rem;
	}
	.update_list_li{
		display: block;
    	background-color: #F5F4EF;
	}
	.update_list_link{
		display: block;
		text-decoration: none;
    	height: 5.25rem;
    	margin-bottom: 0.6rem;
    	overflow: hidden;
	}
	.update_list_map{
		display: block;
    	width: 4rem;
    	height: 5.25rem;
    	float: left;
    	margin-right: 0.65rem;
    	background-image: url("./image/isbg.png");
	    background-size: contain;
	    background-position: center;
	    background-color: white;
	}
	.update_list_map img{
		width: 100%;
		height: 100%;
	}
	.update_list_message{
		
	}
	.update_list_strong{
		display: block;
	    margin-top: 0.7rem;
	    font-size: 0.8rem;
	    font-weight: bold;
	    color: #535252;
	    padding-top: 1px;
	   	text-align: left;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.update_list_small{
		display: block;
	    margin-top: 0.35rem;
	    font-size: 0.6rem;
	    font-weight: normal;
	    color: #969696;
	    text-align: left;
	    padding-top: 1px;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.update_list_rank{
		display: block;
    	margin-top: 0.35rem;
	}
	.update_list_star{
		float: left;
	    display: block;
	    font-size: 0;
	    width: 0.55rem;
	    height: 0.55rem;
	    background: url("./image/sprite_sheetTwo.png") no-repeat -19.925rem -3.75rem;
	    background-size: 20.5rem 17.5rem;
	}
	.update_list_score{
		float: left;
	    margin-left: 0.125rem;
	    height: 0.55rem;
	    line-height: 0.55rem;
	    font-size: 0.5rem;
	    font-weight: 200;
	    color: #ff9a6a;
	}
	
	/*动画专区*/
	.animation{
		padding-bottom: 0.25rem;
	}
	.sub_titleLeft.six{
		background: url("./image/sprite_sheetTwo.png") no-repeat -5.25rem -9rem;
		background-size: 20.5rem 17.5rem;
	}
	.animation_list{
		margin-top: -0.5rem;
	}
	.animation_list_li{
		display: inline-block;
	    margin-top: 0.5rem;
	    width: 45%;
	    margin-left: 3%;
	    margin-right: 3%;
	    float: left;
	}
	.animation_list_li:nth-child(2n){
		margin-left: 1%;
	}
	.animation_list_link{
		display: block;
	    /*position: relative;*/
	    background-color: #FFFFFF;
	    overflow: hidden;
	}
	.animation_list_video{
		display: block;
	    width: 100%;
	    position: relative;
	    margin-bottom: 0.35rem;
	    overflow: hidden;
	}
	.animation_list_video img{
		width: 100%;
		height: 100%;
	}
	.animation_list_videostart{
		display: block;
		width: 1.675rem;
		height: 1.675rem;
		position: absolute;
		top: 50%;
		left: 50%;
		margin: -0.8375rem;
		background: url("./image/sprite_sheetTwo.png") no-repeat -13rem -7.775rem;
    	background-size: 20.5rem 17.5rem;
	}
	.animation_list_title{
		display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    margin-left: 0.3rem;
	    margin-right: 0.3rem;
	    margin-bottom: 0.25rem;
	}
	.animation_list_title>i{
		display: block;
		width: 0.5rem;
		height: 0.5rem;
		background: url("./image/sprite_sheetTwo.png") no-repeat -18.95rem -4.725rem;
    	background-size: 20.5rem 17.5rem;
	}
	.animation_list_title>span{
		margin-left: 0.25rem;
	    font-size: 0.7rem;
	    font-weight: bold;
	    color: #535252;
	}
	.animation_list_collect{
		display: block;
		text-align: left;
	    margin-left: 1.1rem;
	    margin-right: 0.3rem;
	    margin-bottom: 0.35rem;
	    font-size: 0.6rem;
	    font-weight: normal;
	    color: #969696;
	}
	
	/*日漫经典*/
	.japan_comic{
		padding-bottom: 0.25rem;
	}
	.sub_titleLeft.seven{
		background: url("./image/sprite_sheetTwo.png") no-repeat -5.25rem -11.25rem;
		background-size: 20.5rem 17.5rem;
	}
	
	/*新作上线*/
	.new_comic{
		padding-bottom: 0.25rem;
	}
	.sub_titleLeft.eight{
		background: url("./image/sprite_sheetTwo.png") no-repeat -5.25rem -13.5rem;
		background-size: 20.5rem 17.5rem;
	}
	
	/*底部*/
	.bottom{
		position: relative;
	    width: 100%;
	    height: 3.5rem;
	    background-image: url("./image/bottomBg.png");
	    background-size: 100% auto;
	    background-repeat: no-repeat;
	    background-position: center bottom;
	}
	.bottom_row{
		position: absolute;
	    bottom: 0;
	    left: 52%;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: end;
	    -ms-flex-align: end;
	    align-items: flex-end;
	    text-align: center;
	    width: 15rem;
	    margin-left: -7.5rem;
	}
	.bottom_row>.link{
		display: inline-block;
	    width: 3.75rem;
	    height: 3.325rem;
	    background: url("./image/sprite_sheetTwo.png") no-repeat -13rem -2.25rem;
	    background-size: 20.5rem 17.5rem;
	    position: relative;
	    z-index: 1;
	    left: 0.75rem;
	    vertical-align: bottom;
	}
	.bottom_row>.npc_2{
		display: inline-block;
	    font-size: 0.75rem;
	    font-weight: bold;
	    color: #535252;
	    position: relative;
	    z-index: 2;
	    line-height: 3.75rem;
	}
	.bottom_row>.npc_2.one{
		flex: 3;
	}
	.bottom_row>.npc_2.two{
		flex: 2;
	}
	.bottom_row>.npc_2.three{
		flex: 4;
	}
</style>