<template>
	<div class="detail">
		<leader></leader>
		<div class="main">
			<!--布局头部-->
			<div class="lay_head">
				<section class="mod_head">
					<div class="head_info">
						<div class="head_info_cover">
							<img :src="showDetail.week_url" />
						</div>
						<div class="head_info_detail">
							<ul>
								<li class="head_info_text title">
									<h1>{{showDetail.week_title}}</h1>
									<span>{{showDetail.grade}}</span>
								</li>
								<li class="head_info_text tags">
									<label>标签：</label>
									<span>爆笑</span>
									<span>冒险</span>
									<span>悬疑</span>
								</li>
								<li class="head_info_text author">作者：{{showDetail.writer}}</li>
								<li class="head_info_text author">人气：
									<span>{{showDetail.popularity}}万</span>
								</li>
								<li class="head_info_text author">月票：
									<span>{{showDetail.monthly}}</span>
								</li>
							</ul>
						</div>
					</div>
				</section>
				
				<!--标签切换-->
				<section class="mod_tab">
					<div class="tab_list">
						<a class="tab_list_link" v-for="(item,index) in tabActive" @click="isTabactive(item)" :class="{active:isTabnum==item.id}">{{item.title}}</a>
					</div>
				</section>
			</div>
			
			<!--切换内容-->
			<div class="list_detail" :class="{active:isTabnum==1}">
				<section class="mod_detail">
					<i class="detail_icon"></i>
					<div class="detail_summary">
						<p>{{showDetail.week_desc}}</p>
					</div>
				</section>
				
				<!--推荐-->
				<section class="mod_detail_recommend">
					<h2>骚年们都在看</h2>
					<ul class="mod_recommend_ul">
						<li class="mod_recommend_li" v-for="(item, index) in bottomList">
							<router-link class="mod_recommend_link" :to="{path:'/detail',query:{id:item.week_id}}" @click.native="isDataTitle(item)">
							<!--<a class="mod_recommend_link">-->
								<div class="mod_recommend_cover">
									<img :src="item.week_url" />
								</div>
								<div class="mod_recommend_info">
									<strong class="mod_recommend_text title">{{item.week_title}}</strong>
									<small class="mod_recommend_text desc">{{item.week_text}}</small>
								</div>
							</router-link>
						</li>
					</ul>
				</section>
			</div>
			
			<div class="list_detail" :class="{active:isTabnum==2}">
				<section class="mod_comicList">
					<div class="comicList_info">
						<div class="comicList_info_box">
							<span class="comicList_info_time">2017-08-11</span>
							<span class="comicList_info_updata">更新到22话</span>
						</div>
					</div>
					<div class="chapter_list">
						<ul class="chapter_list_ul">
							<li class="chapter_list_li">
								<a class="chapter_list_link">23</a>
							</li>
							<li class="chapter_list_li">
								<a class="chapter_list_link">22</a>
							</li>
							<li class="chapter_list_li">
								<a class="chapter_list_link">21</a>
							</li>
							<li class="chapter_list_li">
								<a class="chapter_list_link">20</a>
							</li>
							<li class="chapter_list_li">
								<a class="chapter_list_link">19</a>
							</li>
							<li class="chapter_list_li">
								<a class="chapter_list_link">18</a>
							</li>
							<li class="chapter_list_li">
								<a class="chapter_list_link">17</a>
							</li>
							<li class="chapter_list_li">
								<a class="chapter_list_link">16</a>
							</li>
							<li class="chapter_list_li">
								<a class="chapter_list_link">15</a>
							</li>
						</ul>
						<a class="btn_expand">大人，查看更多目录</a>
					</div>
				</section>
				
				<!--目录-->
				<section class="mod_detail_recommend">
					<h2>骚年们都在看</h2>
					<ul class="mod_recommend_ul">
						<li class="mod_recommend_li" v-for="(item, index) in bottomList">
							<router-link class="mod_recommend_link" :to="{path:'/detail',query:{id:item.week_id}}" @click.native="isDataTitle(item)">
							<!--<a class="mod_recommend_link">-->
								<div class="mod_recommend_cover">
									<img :src="item.week_url" />
								</div>
								<div class="mod_recommend_info">
									<strong class="mod_recommend_text title">{{item.week_title}}</strong>
									<small class="mod_recommend_text desc">{{item.week_text}}</small>
								</div>
							</router-link>
						</li>
					</ul>
				</section>
			</div>
			
			<!--评论区-->
			<div class="list_detail" :class="{active:isTabnum==3}">
				<section class="mod_common">
					<ul class="mod_comment_ul">
						<li class="mod_comment_li">
							<div class="mod_comment_head">
								<div class="mod_comment_img">
									<img src="./image/11.jpg" />
									<div class="mod_img_head">
										<strong class="mod_img_strong">阿萨德看见</strong>
										<span class="mod_img_time">213214214</span>
									</div>
								</div>
								<div class="mod_comment_layRight">
									<a class="mod_comment_link">
										<span class="mod_zan_img active"></span>
										<span class="mod_zan_sum">0</span>
									</a>
								</div>
							</div>
							<div class="mod_comment_content">
								<p>大萨达萨达撒大大阿萨德撒多</p>
							</div>
						</li>
						<li class="mod_comment_li">
							<div class="mod_comment_head">
								<div class="mod_comment_img">
									<img src="./image/11.jpg" />
									<div class="mod_img_head">
										<strong class="mod_img_strong">阿萨德看见</strong>
										<span class="mod_img_time">213214214</span>
									</div>
								</div>
								<div class="mod_comment_layRight">
									<a class="mod_comment_link">
										<span class="mod_zan_img active"></span>
										<span class="mod_zan_sum">0</span>
									</a>
								</div>
							</div>
							<div class="mod_comment_content">
								<p>大萨达萨达撒大大阿萨德撒多</p>
							</div>
						</li>
						<li class="mod_comment_li">
							<div class="mod_comment_head">
								<div class="mod_comment_img">
									<img src="./image/11.jpg" />
									<div class="mod_img_head">
										<strong class="mod_img_strong">阿萨德看见</strong>
										<span class="mod_img_time">213214214</span>
									</div>
								</div>
								<div class="mod_comment_layRight">
									<a class="mod_comment_link">
										<span class="mod_zan_img active"></span>
										<span class="mod_zan_sum">0</span>
									</a>
								</div>
							</div>
							<div class="mod_comment_content">
								<p>大萨达萨达撒大大阿萨德撒多</p>
							</div>
						</li>
						<li class="mod_comment_li">
							<div class="mod_comment_head">
								<div class="mod_comment_img">
									<img src="./image/11.jpg" />
									<div class="mod_img_head">
										<strong class="mod_img_strong">阿萨德看见</strong>
										<span class="mod_img_time">213214214</span>
									</div>
								</div>
								<div class="mod_comment_layRight">
									<a class="mod_comment_link">
										<span class="mod_zan_img active"></span>
										<span class="mod_zan_sum">0</span>
									</a>
								</div>
							</div>
							<div class="mod_comment_content">
								<p>大萨达萨达撒大大阿萨德撒多</p>
							</div>
						</li>
					</ul>
				</section>
			</div>
			
			
			
			
			<!--底部tab-->
			<section class="lay_flex">
				<div class="lay_box">
					<div class="lay_links">
						<a class="btn_toolFav collect" @click="addData(showDetail)" :class="{'active':showDetail.isBoolean}"></a>
						<a class="btn_toolFav share"></a>
						<a class="btn_toolFav download"></a>
					</div>
					<a class="lay_btn" @click="isclick()">开始阅读</a>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	import Leader from 'components/Header/Leader'
	// 引入需要的mint-ui
	import { Indicator } from 'mint-ui';
	export default {
		beforeCreate(){
			Indicator.open({
			  text: '加载中...',
			  spinnerType: 'fading-circle'
			})
		},
		created(){	
			let weekUrl = 'http://localhost:8081/more'
			this.axios.get(weekUrl)
		    .then((data) => {
		    	this.detailData = data.data
		    	var detailList = data.data
		    	for(let i = 0; detailList.length > i; i++){
		    		for(let j = 0; detailList[i].week_book.length > j; j++){
		    			if(detailList[i].week_book[j].week_id == this.$route.query.id){
		    				this.showDetail = detailList[i].week_book[j]
		    			}
		    		}
		    		setTimeout(function(){
			        	Indicator.close()
			        }, 500)
		    	}
		    	console.log(this.detailData)
		    })
		    
		},
		data(){
			return {
				// 获取的全部数据
				detailData:[],
				// 获取对应数据
				showDetail:[],
				// tab切换
				tabActive:[
					{title:"详情", id:1},
					{title:"目录", id:2},
					{title:"评论", id:3}
				],
				isTabnum:1
			}
		},
		components: {
			Leader
		},
		computed: {
			bottomList(){
				if(this.detailData.length > 0){
					var arrList = this.detailData[this.isTabnum].week_book
					return arrList.slice(0,3)
				}
			},
			cartoonActive(){
				return this.$store.state.cartActive
			}
		},
		methods:{
			isclick(){
				console.log(this.showDetail)
				Indicator.open({
				  text: '加载中...',
				  spinnerType: 'fading-circle'
				});
			},
			// tab切换对应数据
			isTabactive(item){
				this.isTabnum = item.id
			},
			// 点击传本对象的名字
			isDataTitle(item){
				this.showDetail = item
				this.$store.state.topdata = item.week_title
			},
			// 收藏
			addData(item){
				item.isBoolean = !item.isBoolean
				this.$store.dispatch("addCartoon",item)
			}
		}
	}
</script>

<style scoped>
	.lay_head{
		
	}
	.mod_head{
		height: 10rem;
	    width: 100%;
	    overflow: hidden;
	    position: relative;
	}
	.head_info{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	    padding-left: 0.75rem;
	    padding-right: 0.75rem;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: end;
	    -ms-flex-align: end;
	    align-items: flex-end;
	    background:url("./image/bgs.png") no-repeat;
	    background-size: 100% 100%;
	}
	.head_info::before{
		background-color: rgba(0, 0, 0, 0.2);
	}
	.head_info_cover{
		width: 6.5rem;
	    height: 8.75rem;
	    margin-left: 1.05rem;
	    margin-right: 1.15rem;
	    position: relative;
	    background: url("./image/isbg.png") no-repeat;
	    background-size: contain;	
	    background-position: center;
	    /*background-color: white;*/
	}
	.head_info img{
		display: block;
		width: 100%;
		height: 100%;
	}
	.head_info_detail{
		color: #fff;
	    height: 8.75rem;
	    -webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    position: relative;
	    z-index: 1;
	}
	.head_info_text{
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    padding-top: 1px;
	    text-align: left;
	}
	.head_info_text.title{
		padding-top: 1.25rem;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	}
	.head_info_text.title>h1{
		font-size: 0.95rem;
	    text-shadow: 0 0 0.075rem rgba(9, 2, 4, 0.1);
	    max-width: 7rem;
	    font-weight: 700;
	}
	.head_info_text.title>span{
		display: block;
	    width: 1.05rem;
	    height: 1.05rem;
	    line-height: 1.05rem;
	    font-size: 0.5rem;
	    color: white;
	    border-radius: 50%;
	    text-align: center;
	    background-color: #d97e5c;
	    margin-left: 0.25rem;
	}
	.head_info_text.tags{
		padding-top: 1rem;
		color: white;
    	font-size: 0.6rem;
	}
	.head_info_text.tags>label{
		float: left;
	}
	.head_info_text.tags>span{
		padding-right: 0.3rem;
    	padding-left: 0.3rem;
    	border-left: 1px solid white;
    	float: left;
	}
	.head_info_text.tags>span:nth-of-type(1){
		border-left: none;
    	padding-left: 0;
	}
	.head_info_text.tags>span:nth-of-type(3)::after{
		content: '';
		display: block;
		clear: both;	
	}
	.head_info_text.author{
		padding-top: 0.4rem;
	    font-size: 0.6rem;
	    line-height: 100%;
	    text-shadow: 0 0 0.075rem rgba(9, 2, 4, 0.1);
	}
	.head_info_text.author{
		padding-top: 0.4rem;
	    font-size: 0.6rem;
	    line-height: 100%;
	    text-shadow: 0 0 0.075rem rgba(9, 2, 4, 0.1);
	}
	.head_info_text.author>span{
		color: #fef886;
	}
	.mod_tab{
		height: 2.25rem;
    	background-color: white;
    	border-bottom: 1px solid #F5F5EE;
	}
	.tab_list{
		display: flex;
    	-webkit-box-pack: center;
    	-ms-flex-pack: center;
    	justify-content: center;
	}
	.tab_list_link{
		display: block;
	    width: 5.75rem;
	    text-align: center;
	    height: 2.25rem;
	    line-height: 2.25rem;
	    font-size: 0.75rem;
	    position: relative;
	    color: #969696;
	}
	.tab_list_link.active{
		color: #535252;
	}
	.tab_list_link.active::after{
		content: '';
	    width: 0.5rem;
	    height: 0.15rem;
	    left: 2.625rem;
	    bottom: 0;
	    position: absolute;
	    background-color: #ff9a6a;
	    border-radius: 0.15rem;
	    display: block;
	}
	
	/*切换内容*/
	.list_detail{
		display: none;
	}
	.list_detail.active{
		display: block;
	}
	.mod_detail{
		padding-left: 1.25rem;
    	padding-right: 1.25rem;
    	position: relative;
    	background-color: white;
	}
	.detail_icon{
		font-size: 2rem;
	    color: #C5C5C5;
	    text-align: center;
	    display: block;
	    height: 2rem;
	    padding-bottom: 0.25rem;
	    padding-top: 0.25rem;
	    background: url("./image/isyin.png") no-repeat center;
	    background-size: 2rem 2rem;
	}
	.detail_summary{
		text-align: left;
	}
	.detail_summary>p{
		font-size: 0.7rem;
    	color: #535252;
    	line-height: 150%;
    	padding-bottom: 0.75rem;
	}
	.mod_detail_recommend{
		padding-top: 0.75rem;
    	padding-bottom: 4rem;
    	position: relative;
    	background-color: white;
	}
	.mod_detail_recommend::before{
		content: "";
	    display: block;
	    position: absolute;
	    -webkit-transform-origin: center top;
	    transform-origin: center top;
	    width: 100%;
	    top: 0;
	    width: 200%;
	    left: -50%;
	    -webkit-transform: scale(0.5);
	    transform: scale(0.5);
	    border-top: 1px solid #F5F5EE;
	}
	.mod_detail_recommend>h2{
		font-size: 0.7rem;
	    color: #969696;
	    padding-bottom: 0.75rem;
	    line-height: 100%;
	    font-weight: normal;
	    padding-left: 0.75rem;
	    box-sizing: border-box;
	    text-align: left;
	}
	.mod_recommend_ul{
		display: flex;
		justify-content: center;
	}
	.mod_recommend_li:nth-of-type(2){
		margin-left: 0.75rem;
    	margin-right: 0.75rem;
	}
	.mod_recommend_link{
		display: block;
    	width: 5.25rem;
    	text-decoration: none;
    	background-color: #F5F5EE;
	}
	.mod_recommend_cover{
		width: 5.25rem;
    	height: 7rem;
    	background-image: url("./image/isbg.png");
	    background-size: contain;
	    background-position: center;
	    background-color: white;
	}
	.mod_recommend_cover>img{
		display: block;
		width: 100%;
		height: 100%;
	}
	.mod_recommend_info{
		
	}
	.mod_recommend_text{
		white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	display: block;
    	box-sizing: border-box;
    	text-align: center;
    	line-height: 100%;
	}
	.mod_recommend_text.title{
		font-size: 0.7rem;
    	color: #535252;
    	padding-top: 0.375rem;
	}
	.mod_recommend_text.desc{
		padding-top: 0.25rem;
	    padding-bottom: 0.3rem;
	    font-size: 0.6rem;
	    color: #969696;
	}
	
	/*第二部分*/
	.mod_comicList{
		background-color: white;
	}
	.comicList_info{
		margin-left: 4%;
    	margin-right: 4%;
    	color: #666666;
    	font-size: 0.6rem;
	}
	.comicList_info_box{
		padding-top: 1rem;
		color: #C5C5C5;
		text-align: left;
	}
	.comicList_info_time{
		
	}
	.chapter_list{
		overflow-x: hidden;
		margin-top: 0.4rem;
	}
	.chapter_list_ul{
		font-size: 0;
    	text-align: left;
    	padding-top: 0.1rem;
	}
	.chapter_list_li{
		display: inline-block;
	    width: 28%;
	    height: 2.25rem;
	    margin-left: 4%;
	    margin-bottom: 4%;
	}
	.chapter_list_li:nth-child(3n){
		margin-right: 4%;
	}
	.chapter_list_link{
		display: block;
	    height: 2.25rem;
	    line-height: 2.25rem;
	    border: 1px solid #C5C5C5;
	    box-sizing: border-box;
	    overflow: hidden;
	    background-color: #fff;
	    color: #535252;
	    font-size: 0.8rem;
	    text-align: center;
	}
	.btn_expand{
		display: block;
	    width: 92%;
	    height: 2.25rem;
	    box-sizing: border-box;
	    border: 1px solid #C5C5C5;
	    overflow: hidden;
	    background-color: #fff;
	    margin: 0 auto 0.75rem auto;
	    color: #535252;
	    font-size: 0.8rem;
	    line-height: 2.25rem;
	    text-align: center;
	}
	
	/*评论区*/
	.mod_common{
		padding-left: 0.75rem;
    	padding-right: 0.75rem;
    	padding-top: 0.25rem;
    	padding-bottom: 3.75rem;
    	background-color: white;
	}
	.mod_comment_ul{
		
	}
	.mod_comment_li{
		position: relative;
    	padding-top: 0.9rem;
	}
	.mod_comment_head{
		display: flex;
	    -webkit-box-pack: justify;
	    -ms-flex-pack: justify;
	    justify-content: space-between;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    color: #666666;
	}
	.mod_comment_img{
		font-size: 0.7rem;
	    display: flex;
	    align-items: center;
	}
	.mod_comment_img>img{
		display: inline-block;
	    width: 1.5rem;
	    height: 1.5rem;
	    border-radius: 50%;
	    margin-right: 0.3rem;
	    box-shadow: 0 0 0 1px #cccccc;
	}
	.mod_img_head{
		text-align: left;
	}
	.mod_img_strong{
		color: #e86a3e;
    	display: block;
    	padding-bottom: 0.15rem;
    	font-weight: 700;
	}
	.mod_img_time{
		color: #cccccc;
    	font-size: 0.6rem;
    	vertical-align: middle;
	}
	.mod_comment_layRight{
		
	}
	.mod_comment_link{
		display: block;
	}
	.mod_zan_img{
		display: inline-block;
		width: 1rem;
		height: 1rem;
		background: url("./image/zan1.png") no-repeat;
		background-position:0.2rem 0.2rem;
		background-size: 0.8rem 0.8rem;
	}
	.mod_zan_img.active{
		background: url("./image/zan.png") no-repeat;
		background-position:0.2rem 0.2rem;
		background-size: 0.8rem 0.8rem;
	}
	.mod_zan_sum{
		font-size: 0.6rem;
    	color: #969696;
	}
	.mod_comment_content{
		padding-left: 1.75rem;
    	padding-top: 0.5rem;
    	padding-bottom: 0.875rem;
    	text-align: left;
	}
	.mod_comment_content>p{
		font-size: 0.8rem;
    	color: #535252;
    	line-height: 150%;
    	word-break: break-all;
	}
	
	
	
	/*底部tab*/
	.lay_flex{
		background-color: white;
	    height: 3.25rem;
	    position: relative;
	    box-sizing: border-box;
	    position: fixed;
	    z-index: 9;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	}
	.lay_flex::before{
		content: "";
	    display: block;
	    position: absolute;
	    -webkit-transform-origin: center top;
	    transform-origin: center top;
	    width: 100%;
	    top: 0;
	    width: 200%;
	    left: -50%;
	    -webkit-transform: scale(0.5);
	    transform: scale(0.5);
	    border-top: 1px solid #C5C5C5;
	}
	.lay_box{
		width: 100%;
	    height: 100%;
	    display: flex;
	    align-items: center;
	    -webkit-box-pack: justify;
	    -ms-flex-pack: justify;
	    justify-content: space-between;
	}
	.lay_links{
		display: flex;
	}
	.btn_toolFav{
		display: block;
		width: 1.35rem;
	    height: 1.35rem;
		background: url("./image/lay.png") no-repeat 0rem -1.925rem;
	    background-size: 4.875rem 3.275rem; 
    	margin-left: 1.4rem;
    	overflow: hidden;
	}
	.btn_toolFav.collect.active{
		background: url("./image/lay.png") no-repeat -1.925rem 0rem;
	    background-size: 4.875rem 3.275rem; 
	}
	.btn_toolFav.share{
		background: url("./image/lay.png") no-repeat -1.6rem -1.925rem;
	    background-size: 4.875rem 3.275rem; 
	}
	.btn_toolFav.download{
		background: url("./image/lay.png") no-repeat -3.525rem 0rem;
	    background-size: 4.875rem 3.275rem; 
	}
	.lay_btn{
	    flex: 1;
	    display: block;
    	margin-left: 1.4rem;
    	overflow: hidden;
	    height: 2.25rem;
	    font-size: 0.9rem;
	    font-weight: bold;
	    color: white;
	    height: 2.25rem;
	    line-height: 2.25rem;
	    background-color: #ff9a6a;
	    text-align: center;
	    margin-right: 0.75rem;   
	}
</style>