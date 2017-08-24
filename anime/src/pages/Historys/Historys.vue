<template>
	<div class="historys">
		<leader></leader>
		<!--头部切换部分-->
		<div class="main">
			<section class="bookShelf_tab">
				<div class="tab_list">
					<a class="tab_list_item" @click="isaNumberOne()" :class="{active : activeNumber}">收藏</a>
					<a class="tab_list_item" @click="isaNumberTwo()" :class="{active : !activeNumber}">历史</a>
					<a class="tab_edit" @click="isactiveBoolean()" :class="{onEdit : activeBoolean}"></a>
					<!--onEdit-->
				</div>
			</section>
			
			<!--收藏签页部分-->
			<div class="mod_fav" :class="{active : activeNumber}">
				<!--未登录部分-->
				<section class="not_logIn">
					<div class="fav_box">
						<ul class="fav_recommend_ul">
							<li class="fav_recommend_li" v-for="(item, index) in isCollect">
								<a class="fav_recommend_link">
									<div class="fav_recommend_cover">
										<img :src="item.week_url" />
									</div>
									<div class="fav_recommend_content">
										<strong class="fav_recommend_text strong">{{item.week_title}}</strong>
										<small class="fav_recommend_text small">{{item.week_desc}}</small>
									</div>
								</a>
							</li>
							<!--<li class="fav_recommend_li">
								<a class="fav_recommend_link">
									<div class="fav_recommend_cover">
										<img src="./image/1.jpg" />
									</div>
									<div class="fav_recommend_content">
										<strong class="fav_recommend_text strong">微光世界</strong>
										<small class="fav_recommend_text small">Bless新作登场，异世界的你愿意拯救我吗？</small>
									</div>
								</a>
							</li>
							<li class="fav_recommend_li">
								<a class="fav_recommend_link">
									<div class="fav_recommend_cover">
										<img src="./image/1.jpg" />
									</div>
									<div class="fav_recommend_content">
										<strong class="fav_recommend_text strong">微光世界</strong>
										<small class="fav_recommend_text small">Bless新作登场，异世界的你愿意拯救我吗？</small>
									</div>
								</a>
							</li>-->
						</ul>
						<section class="mod_load_bottom">
							<div class="mlm_status_over">客官，人家已经没有那个的啦~~</div>
						</section>
						<!--<img class="fav_bgImg" src="./image/bg_fav.png" />
						<p class="fav_bgp">大人，快快登录，<br/> 同步云书架，漫画们等着你哦</p>
						<a class="unload_load">登录</a>-->
					</div>
					
					<!--<div class="fav_recommend">
						<h2 class="fav_recommend_suo">大家都在搜</h2>
						
					</div>-->
				</section>
			</div>
			
			<!--历史页面-->
			<div class="mod_his" :class="{active : !activeNumber}">
				<section class="his_normal">
					<ul class="his_normal_ul">
						<li class="his_normal_li">
							<a class="his_normal_link" :class="{active : activeBoolean}">
								<div class="his_normal_cover">
									<img src="./image/1.jpg" />
								</div>
								<div class="his_normal_info">
									<strong class="fav_recommend_text tetle">微光世界</strong>
									<small class="fav_recommend_text author">作者：某某某</small>
									<small class="fav_recommend_text updata">更新到234话</small>
									<div class="his_normal_continue">
										<i class="his_continue_img"></i>
										<small class="fav_recommend_text extend">续看234话</small>
									</div>
								</div>
							</a>
							<div class="his_normal_choose">
								<i class="icon_choose"></i>
								<i class="icon_unChoose"></i>
							</div>
						</li>
						<li class="his_normal_li">
							<a class="his_normal_link" :class="{active : activeBoolean}">
								<div class="his_normal_cover">
									<img src="./image/1.jpg" />
								</div>
								<div class="his_normal_info">
									<strong class="fav_recommend_text tetle">微光世界</strong>
									<small class="fav_recommend_text author">作者：某某某</small>
									<small class="fav_recommend_text updata">更新到234话</small>
									<div class="his_normal_continue">
										<i class="his_continue_img"></i>
										<small class="fav_recommend_text extend">续看234话</small>
									</div>
								</div>
							</a>
							<div class="his_normal_choose">
								<i class="icon_choose"></i>
								<i class="icon_unChoose"></i>
							</div>
						</li>
						<li class="his_normal_li">
							<a class="his_normal_link" :class="{active : activeBoolean}">
								<div class="his_normal_cover">
									<img src="./image/1.jpg" />
								</div>
								<div class="his_normal_info">
									<strong class="fav_recommend_text tetle">微光世界</strong>
									<small class="fav_recommend_text author">作者：某某某</small>
									<small class="fav_recommend_text updata">更新到234话</small>
									<div class="his_normal_continue">
										<i class="his_continue_img"></i>
										<small class="fav_recommend_text extend">续看234话</small>
									</div>
								</div>
							</a>
							<div class="his_normal_choose">
								<i class="icon_choose"></i>
								<i class="icon_unChoose"></i>
							</div>
						</li>
						<li class="his_normal_li">
							<a class="his_normal_link" :class="{active : activeBoolean}">
								<div class="his_normal_cover">
									<img src="./image/1.jpg" />
								</div>
								<div class="his_normal_info">
									<strong class="fav_recommend_text tetle">微光世界</strong>
									<small class="fav_recommend_text author">作者：某某某</small>
									<small class="fav_recommend_text updata">更新到234话</small>
									<div class="his_normal_continue">
										<i class="his_continue_img"></i>
										<small class="fav_recommend_text extend">续看234话</small>
									</div>
								</div>
							</a>
							<div class="his_normal_choose">
								<i class="icon_choose"></i>
								<i class="icon_unChoose"></i>
							</div>
						</li>
						<li class="his_normal_li">
							<a class="his_normal_link" :class="{active : activeBoolean}">
								<div class="his_normal_cover">
									<img src="./image/1.jpg" />
								</div>
								<div class="his_normal_info">
									<strong class="fav_recommend_text tetle">微光世界</strong>
									<small class="fav_recommend_text author">作者：某某某</small>
									<small class="fav_recommend_text updata">更新到234话</small>
									<div class="his_normal_continue">
										<i class="his_continue_img"></i>
										<small class="fav_recommend_text extend">续看234话</small>
									</div>
								</div>
							</a>
							<div class="his_normal_choose">
								<i class="icon_choose"></i>
								<i class="icon_unChoose"></i>
							</div>
						</li>
					</ul>
					
					<!--底部-->
					<section class="mod_load_bottom">
						<div class="mlm_status_over">客官，人家已经没有那个的啦~~</div>
					</section>
					
					<!--底部编辑-->
					<div class="mod_edit" :class="{active : activeBoolean}">
						<a class="edit_choose">
							<i class="edit_choice normal active"></i>
							<i class="edit_choice all"></i>
							<span class="edit_text normal active">全选</span>
							<span class="edit_text all">取消全选</span>
						</a>
						<a class="edit_choose">
							<i class="edit_del"></i>
							<span class="edit_text">删除</span>
						</a>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
	import Leader from 'components/Header/Leader'
	export default {
		created(){
			let collectUrl = 'http://localhost:8081/addNum'
			this.axios.get(collectUrl)
		    .then((data) => {
		    	this.isCollect = data.data
		    	console.log(this.isCollect)
		    })
		},
		data(){
			return {
				activeNumber:true,
				activeBoolean:false,
				isCollect:[]
			}
		},
		components: {
			Leader
		},
		computed:{
			collectList(){
				
			}
		},
		mounted() {
			// 判断点击的是收藏还是历史
			if(this.$route.query.index == "fav"){
				this.activeNumber = true
			}else if(this.$route.query.index == "his"){
				this.activeNumber = false
			}
		},
		methods:{
			isaNumberOne(){
				this.activeNumber = true
				this.activeBoolean = false
			},
			isaNumberTwo(){
				this.activeNumber = false
			},
			isactiveBoolean(){
				this.activeBoolean = !this.activeBoolean
			}
		}
	}
</script>

<style scoped>
	/*头部切换部分*/
	.bookShelf_tab{
		height: 2rem;
		margin-top: 2px;
	    background-color: white;
	    position: fixed;
	    left: 0;
	    width: 100%;
	    z-index: 3;
	}
	.tab_list{
		display: flex;
		justify-content: center;
	}
	.tab_list_item{
		display: block;
	    width: 5rem;
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
	    left: 2.25rem;
	    bottom: 0;
	    position: absolute;
	    background-color: #ff9a6a;
	    border-radius: 0.15rem;
	    display: block;
	}
	.tab_edit{
		display: block;
		width: 1.35rem;
	    height: 1.35rem;
	    position: absolute;
	    right: 0.5rem;
	    top: 0.325rem;
	    background: url("./image/edlt.png") no-repeat 0rem 0rem;
	    background-size: 4.55rem 4.55rem;
	}
	.tab_edit.onEdit{
		background: url("./image/edlt.png") no-repeat -1.6rem 0rem;
    	background-size: 4.55rem 4.55rem;
	}
	
	/*收藏签页部分*/
	.mod_fav{
		min-height: 100%;
		background-color: white;
		display: none;
	}
	.mod_fav.active{
		display: block;
	}
	/*未登录部分收藏*/
	.not_logIn{
		background-color: #F5F5EE;
		padding-bottom: 3rem;
	}
	.fav_box{
		min-height: 13.65rem;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    -webkit-box-orient: vertical;
	    -webkit-box-direction: normal;
	    -ms-flex-direction: column;
	    flex-direction: column;
	    background-color: #F5F5EE;
	}
	.fav_bgImg{
		display: block;
	    width: 4.375rem;
	    height: 7.125rem;
	    margin-top: 2rem;
	    padding-top: 1.25rem;
	    padding-bottom: 0.5rem;
	}
	.fav_bgp{
		font-size: 0.7rem;
	    color: #C5C5C5;
	    padding-bottom: 0.75rem;
	    text-align: center;
	    line-height: 120%;
	}
	.unload_load{
		border: 1px solid #ff9a6a;
	    height: 2.25rem;
	    width: 5.75rem;
	    text-align: center;
	    box-sizing: border-box;
	    background: white;
	    font-size: 0.9rem;
	    color: #ff9a6a;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    -webkit-box-pack: center;
	    -ms-flex-pack: center;
	    justify-content: center;
	    margin-bottom: 1rem;
	}
	.fav_recommend{
		
	}
	.fav_recommend_suo{
		font-size: 0.7rem;
	    color: #C5C5C5;
	    line-height: 100%;
	    text-align: left;
	    font-weight: 700;
	    padding-top: 0.75rem;
	    background-color: white;
	    padding-left: 4%;
	}
	.fav_recommend_ul{
		width: 100%;
    	font-size: 0;
    	text-align: left;
    	display: block;
    	margin-top: 2rem;
	}
	.fav_recommend_li{
		display: inline-block;
	    width: 28%;
	    margin-left: 4%;
	    margin-top: 0.75rem;
	    overflow: hidden;
	    background-color: #FFFFFF;
	}
	.fav_recommend_li:nth-child(3n){
		margin-right: 4%;
	}
	.fav_recommend_link{
		display: block;
	}
	.fav_recommend_cover{
		margin-bottom: 0.4rem;
	}
	.fav_recommend_cover img{
		width: 5.25rem;
    	height: 7rem;
	}
	.fav_recommend_content{
		
	}
	.fav_recommend_text{
		white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    padding-top: 1px;
	}
	.fav_recommend_text.strong{
		display: block;
	    text-align: center;
	    font-weight: 700;
	    margin-bottom: 0.25rem;
	    font-size: 0.7rem;
	    color: #535252;
	}
	.fav_recommend_text.small{
		display: block;
	    text-align: center;
	    margin-bottom: 0.375rem;
	    font-size: 0.6rem;
	    color: #969696;
	}
	
	/*历史页面*/
	.mod_his{
		padding-bottom: 3rem;
		margin-top: 2.17rem;
		display: none;
	}
	.mod_his.active{
		display: block;
	}
	.his_normal{
		
	}
	.his_normal_ul{
		padding-left: 0.25rem;
	    padding-right: 0.25rem;
	    padding-bottom: 0.25rem;
	}
	.his_normal_li{
		position: relative;
		border-bottom: 0.25rem solid #F5F5EE;
	}
	.his_normal_link{
		display: flex;
	    background-color: white;
	    padding: 0.25rem;
	    box-sizing: border-box;
	    position: relative;
	    z-index: 2;
	    -webkit-transition: all 0.5s ease;
	    transition: all 0.5s ease;
	}
	.his_normal_link.active{
		transform: translate3d(4.15rem, 0, 0);
	}
	.his_normal_cover{
		height: 4.675rem;
	    width: 3.5rem;
	    margin-right: 0.5rem;
	    background-image: url("./image/isbg.png");
	    background-size: contain;
	    background-position: center;
	    background-color: white;
	}
	.his_normal_cover img{
		display: block;
	    width: 100%;
	    height: 100%;
	}
	.his_normal_info{
	    flex: 1;
	    min-width: 1px;
	    text-align: left;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-orient: vertical;
	    flex-direction: column;
	    justify-content: center;
	}
	.fav_recommend_text.tetle{
		width: 10rem;
		color: #535252;
	    font-size: 0.8rem;
	    line-height: 150%;
	    padding-top: 0.25rem;
	    font-weight: 700;
	}
	.fav_recommend_text.author{
		width: 10rem;
		font-size: 0.6rem;
	    color: #969696;
	    line-height: 1rem;
	}
	.fav_recommend_text.updata{
		width: 10rem;
		font-size: 0.6rem;
	    color: #969696;
	    line-height: 1rem;
	}
	.his_normal_continue{
		position: absolute;
	    z-index: 1;
	    right: 1.25rem;
	    top: 1.5rem;
	    width: 3.25rem;
	    text-align: center;
	}
	.his_continue_img{
		width: 1.35rem;
	    height: 1.35rem;
		margin: 0 auto;
	    padding-bottom: 0.25rem;
	    display: block;
	    background: url("./image/edlt.png") no-repeat 0rem -1.6rem;
	    background-size: 4.55rem 4.55rem;
	}
	.fav_recommend_text.extend{
		display: block;
		font-size: 0.6rem;
	    color: #969696;
	    line-height: 1rem;
	}
	.his_normal_choose{
		position: absolute;
	    z-index: 1;
	    width: 4.15rem;
	    height: 100%;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    -webkit-box-pack: center;
	    -ms-flex-pack: center;
	    justify-content: center;
	    left: 0;
	    top: 0;
	}
	.icon_choose{
		display: none;
	    width: 1.125rem;
	    height: 1.125rem;
	    background: url("./image/edlt.png") no-repeat -1.6rem -1.6rem;
	    background-size: 4.55rem 4.55rem;
	    width: 1.35rem;
	    height: 1.35rem;
	    background-repeat: no-repeat;
	}
	.icon_unChoose{
		/*display: block;*/
	    width: 1.125rem;
	    height: 1.125rem;
	    border-radius: 50%;
	    border: 1px solid #C5C5C5;
	    background-color: white;
	}
	/*底部*/
	.mod_load_bottom{
		text-align: center;
	    padding-top: 0.95rem;
	    padding-bottom: 0.95rem;
	    color: #9a9a9a;
	    font-size: 0.6rem;
	}
	.mlm_status_over{
		
	}
	/*底部编辑*/
	.mod_edit{
		visibility: hidden;
		display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    z-index: 2;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 3rem;
	    position: relative;
	    position: fixed !important;
	    background-color: white;
	}
	.mod_edit.active{
		visibility: visible;
	}
	.mod_edit::before{
		content: "";
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
	.edit_choose{
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
    	color: #535252;
	}
	.edit_choose::after{
		content: "";
	    position: absolute;
	    -webkit-transform-origin: right center;
	    transform-origin: right center;
	    height: 100%;
	    right: 0;
	    height: 200%;
	    top: -50%;
	    -webkit-transform: scale(0.5);
	    transform: scale(0.5);
	    border-right: 1px solid #C5C5C5;
	}
	.edit_choice{
		vertical-align: middle;
	    line-height: 1.35rem;
	    margin-right: 0.25rem;
	}
	.edit_choice.normal{
		display: none;
		width: 1.35rem;
	    height: 1.35rem;
		background: url("./image/edlt.png") no-repeat -1.6rem -1.6rem;
	    background-size: 4.55rem 4.55rem;
	}
	.edit_choice.all{
		display: none;
		width: 1.35rem;
	    height: 1.35rem;
		background: url("./image/edlt.png") no-repeat -3.2rem 0rem;
    	background-size: 4.55rem 4.55rem;
	}
	.edit_choice.normal.active{
		display: block;
	}
	.edit_choice.all.active{
		display: block;
	}
	.edit_text{
		color: #535252;
		font-size: 0.7rem;
	}
	.edit_text.normal{
		display: none;
	}
	.edit_text.all{
		display: none;
	}
	.edit_text.normal.active{
		display: block;
	}
	.edit_text.all.active{
		display: block;
	}
	.edit_del{
		width: 1.35rem;
	    height: 1.35rem;
	    margin-right: 0.25rem;
		background: url("./image/edlt.png") no-repeat -3.2rem -1.6rem;
    	background-size: 4.55rem 4.55rem;
	}
</style>