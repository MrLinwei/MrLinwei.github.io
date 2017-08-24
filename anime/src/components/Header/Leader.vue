<template>
	<header>
		<div class="header_box">
				<!--<router-link class="btn_top" @click="isback()" to="{path:{}}"></router-link>-->
				<a class="btn_top" @click="isback()" v-if="!toptext"></a>
				<!--返回上一级路由-->
				<h1 class="text_top" v-if="!toptext">{{topdata}}</h1>
			<div class="header_logo" v-if="toptext">腾讯动漫logo</div>
			<div class="top_padding"></div>
			<div class="header_options">
				<a class="header_seek"></a>
				<a class="header_classify" @click="isheaderActive()"></a>
			</div>
		</div>
		<div class="hide_options" v-show="headerShow">
			<div class="hide_backdrop" :class="{'active' : headerActive}" @click="isbackdrop()"></div>
			<div class="hide_nav" :class="{'active' : headerActive}">
				<ul class="hide_nvalist">
					<li class="hide_nvali">
						<router-link class="hide_link" to="/">
							<i></i>
							<span>首页</span>
						</router-link>
					</li>
					<li class="hide_nvali">
						<router-link class="hide_link" :to="{path:'/historys', query:{index:'fav'}}" @click.native="settoptext()">
							<i></i>
							<span>收藏</span>
						</router-link>
					</li>
					<li class="hide_nvali">
						<router-link class="hide_link" :to="{path:'/historys', query:{index:'his'}}" @click.native="settoptext()">
							<i></i>
							<span>历史</span>
						</router-link>
					</li>
					<li class="hide_nvali">
						<router-link class="hide_link" :to="{path:'/classify/index'}" @click.native="settoptext()">
							<i></i>
							<span>分类</span>
						</router-link>
					</li>
					<li class="hide_nvali">
						<router-link class="hide_link" to="/ranking" @click.native="settoptext()">
							<i></i>
							<span>排行</span>
						</router-link>
					</li>
					<li class="hide_nvali">
						<router-link class="hide_link" to="/overtake" @click.native="settoptext()">
							<i></i>
							<span>追更</span>
						</router-link>
					</li>
				</ul>
				<a class="btn_home"></a>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		created(){
		//	获取top文字描述
		if(this.$route.path == "/classify/index"){
			this.$store.state.topdata = "分类"
		}
		if(this.$route.path == "/ranking"){
			this.$store.state.topdata = "排行"
		}
		if(this.$route.path == "/channel"){
			this.$store.state.topdata = "条漫"
		}
		if(this.$route.query.index == "his"){
			this.$store.state.topdata = "历史"
		}
		if(this.$route.path == "/overtake"){
			this.$store.state.topdata = "追更"
		}
		if(this.$route.query.index == "fav"){
			this.$store.state.topdata = "收藏"
		}
		if(this.$route.query.even == "nice"){
			this.$store.state.topdata = "无良推荐"
		}
		if(this.$route.query.even == "everyday"){
			this.$store.state.topdata = "每日一推"
		}
		if(this.$route.query.even == "vip"){
			this.$store.state.topdata = "vip推荐"
		}
		if(this.$route.query.even == "today"){
			this.$store.state.topdata = "今日推荐"
		}
		if(this.$route.query.even == "manga"){
			this.$store.state.topdata = "日漫经典"
		}
		if(this.$route.query.even == "work"){
			this.$store.state.topdata = "新作上线"
		}
		if(this.$route.path == "/detail"){
			this.$store.state.topdata = this.$store.state.detail
		}
		
		
		},
		data(){
			return {
				headerActive : false,
				headerShow : false
			}
		},
		methods:{
			isheaderActive(){
				if(this.headerShow){
					this.headerActive = false
					setTimeout(()=>{
						this.headerShow = false
					},310)
				}else{
					
					this.headerShow = true
					setTimeout(()=>{
						this.headerActive = true
					},100)
				}
			},
			isbackdrop(){
				if(this.headerShow){
					this.headerActive = false
					setTimeout(()=>{
						this.headerShow = false
					},310)
				}
			},
			isback(){
				this.$router.go(-1)
			},
			// 顶部进入状态
			settoptext(){
   				this.$store.state.toptext = false
   			}
		},
		computed:{
			// 进入的页面状态
			toptext(){
				return this.$store.state.toptext
			},
			topdata(){
				return this.$store.state.topdata
			}
		}
	}
</script>

<style scoped>
	header{
		width: 100%;
		height: 2.5rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		background-color: #FFFFFF;
	}
	.header_box{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
	}
	.header_logo{
		width: 6rem;
		height: 2.5rem;
		text-indent: -1000rem;
		background: url("./image/sprite_sheet.png") no-repeat 0rem -2.55rem;
		background-size: 14.8rem 7rem;
		float: left;
	}
	.top_padding{
		flex: 1;
	}
	/*分页按钮*/
	.btn_top{
		padding: 0.375rem;
		float: left;
	}
	.btn_top::after{
		content: "";
	    display: block;
	    width: 1.35rem;
	    height: 1.35rem;
	    background: url("./image/sprite_sheet.png") no-repeat -3.9rem -5.3rem;
	    background-size: 14.8rem 7rem;
	}
	.text_top{
		display: block;
	    height: 1.1rem;
	    line-height: 1.1rem;
	    font-size: 0.9rem;
	    font-weight: bold;
	    color: #535252;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    float: left;
	}
	/*--------------------分割线---------------------*/
	.header_options{
		display: flex;
		float: right;
	}
	.header_seek{
		padding: 0.375rem;
	}
	.header_seek::after{
		content:"";
		width: 1.35rem;
		height: 1.35rem;
		display: block;
		background: url("./image/sprite_sheet.png") no-repeat -7.1rem -5.3rem;
    	background-size: 14.8rem 7rem;
	}
	.header_classify{
		padding: 0.375rem;
		margin-right: 0.125rem;
	}
	.header_classify::after{
		content:"";
		width: 1.35rem;
		height: 1.35rem;
		display: block;
		background: url("./image/sprite_sheet.png") no-repeat -5.5rem -5.3rem;
    	background-size: 14.8rem 7rem;
	}
	/*隐藏的选项*/
	.hide_options{
		position: fixed;
	    z-index: 10;
	    top: 2.5rem;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    overflow: hidden;
	}
	.hide_backdrop{
		position: absolute;
	    z-index: 11;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    background-color: rgba(0, 0, 0, 0.4);
	    
	    -webkit-transition: opacity 300ms ease;
	    transition: opacity 300ms ease;
	    opacity: 0;
	}
	.hide_backdrop.active{
		opacity: 1;
	}
	.hide_nav{
		position: relative;
	    z-index: 12;
	    background-color: #F5F5EE;
	    padding-bottom: 0.75rem;
	    border-bottom: 0.25rem solid #ff9a6a;
	    
	    -webkit-transition: -webkit-transform 300ms ease;
	    -webkit-transform: translate3d(0, -100%, 0);
	    transform: translate3d(0, -100%, 0);
	}
	.hide_nav.active{
		/*transition: transform 300ms ease, -webkit-transform 300ms ease;*/
		transform: translate3d(0, 0, 0);
	}
	.hide_nvalist{
		padding-top: 0.5rem;
    	padding-bottom: 0.2rem;
    	display: flex;
    	flex-flow: row wrap;
    	justify-content: center;
    	align-items: center;
	}
	.hide_nvali{
		display: inline-block;
	    width: 28%;
	    margin-right: 4%;
	}
	.hide_link{
		display: inline-block;
	    height: 2.75rem;
	    padding-top: 0.25rem;
	    padding-left: 0.25rem;
	    padding-right: 0.25rem;
	    text-decoration: none;
	}
	.hide_link i{
		display: inline-block;
	    width: 1.7rem;
	    height: 1.7rem;
	    background: url("./image/sprite_sheet.png") no-repeat -10.15rem -2.55rem;
	    background-size: 14.8rem 7rem;
	}
	.hide_nvalist>.hide_nvali:nth-child(2)>.hide_link i{
		background: url("./image/sprite_sheet.png") no-repeat -12.1rem -2.55rem;
		background-size: 14.8rem 7rem;
	}
	.hide_nvalist>.hide_nvali:nth-child(3)>.hide_link i{
		background: url("./image/sprite_sheet.png") no-repeat -6.25rem -2.55rem;
		background-size: 14.8rem 7rem;
	}
	.hide_nvalist>.hide_nvali:nth-child(4)>.hide_link i{
		background: url("./image/sprite_sheet.png") no-repeat -1.95rem -5.3rem;
		background-size: 14.8rem 7rem;
	}
	.hide_nvalist>.hide_nvali:nth-child(5)>.hide_link i{
		background: url("./image/sprite_sheet.png") no-repeat 0rem -5.3rem;
		background-size: 14.8rem 7rem;
	}
	.hide_nvalist>.hide_nvali:nth-child(6)>.hide_link i{
		background: url("./image/sprite_sheet.png") no-repeat -8.2rem -2.55rem;
		background-size: 14.8rem 7rem;
	}

	.hide_link span{
		display: block;
	    margin-top: 0.15rem;
	    font-size: 0.6rem;
	    color: #969696;
	}
	.btn_home{
		display: block;
		width: 14.8rem;
	    height: 2.3rem;
	    text-indent: -2500rem;
	    font-size: 0;
	    margin: 0 auto;
	    width: 14.85rem;
	    height: 2.3rem;
	    background: url("./image/sprite_sheet.png") no-repeat 0rem 0rem;
	    background-size: 14.8rem 7rem;
	}
</style>