<template>
	<div class="classify">
			<!--分类选项-->
			<section class="classify_list">
				<ul class="classify_ul">
					<li class="classify_li" v-for="(item, index) in classifyData">
						<router-link class="classify_link" :to="{path:'/classify/listAll', query:{rank:item.id}}">
						
							<strong class="classify_strong">{{item.classify_title}}</strong>
							<small class="classify_small red">{{item.describe}}</small>
							<small class="classify_small green">高大上</small>
						
						</router-link>
					</li>
				</ul>
			</section>
			
			<!--详细分类-->
			<section class="details_class">
				<ul class="details_ul">
					<li class="details_li" v-for="(item, index) in subclassification">
						<router-link class="details_link" :to="{path:'/classify/listAll', query:{type:item.id}}">
						
							<span class="details_link_span">|&nbsp;{{item.title}}</span>
							<img v-lazy="item.img" />
						
						</router-link>
					</li>
				</ul>
			</section>
		
	</div>
</template>

<script>
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
		    	console.log(data.data)
		        this.classifyList = data.data
		        setTimeout(function(){
		        	Indicator.close()
		        }, 500)
		    })
		    
		},
		data(){
			return {
				classifyList:[],
				subclassification:[
					{title:"恐怖", id:1, img:"https://manhua.qpic.cn/manhua_detail/0/30_11_26_079e5bcf8a73b77857e0d212cd5e0d20.png/0"},
					{title:"妖怪", id:2, img:"https://manhua.qpic.cn/manhua_detail/0/30_11_26_9e3365cff339f85bcc93fc72d9a27884.png/0"},
					{title:"恋爱", id:3, img:"https://manhua.qpic.cn/manhua_detail/0/30_11_26_79f6f2156ce47f4c47579671444263c9.png/0"},
					{title:"玄幻", id:4, img:"https://manhua.qpic.cn/manhua_detail/0/30_11_26_1b8ef0efec87763077d2ee95e4cdaa13.png/0"},
					{title:"热血", id:5, img:"https://manhua.qpic.cn/manhua_detail/0/30_11_27_43b05722507f9e913533ae00f123bdeb.png/0"},
					{title:"悬疑", id:6, img:"https://manhua.qpic.cn/manhua_detail/0/30_11_27_64085cac227c31477a921a9b52e07410.png/0"},
					{title:"彩虹", id:7, img:"https://manhua.qpic.cn/manhua_detail/0/30_11_27_6194ea4c4376578cbdf8c1f91b883922.png/0"},
					{title:"少女", id:8, img:"https://manhua.qpic.cn/manhua_detail/0/30_11_27_d1c3588b16012b76563fe4890ad62151.png/0"},
					{title:"韩漫", id:9, img:"https://manhua.qpic.cn/manhua_detail/0/30_11_27_6268987d7f90727ab17db3f6d1eee537.png/0"},
					{title:"科幻", id:10, img:"https://manhua.qpic.cn/manhua_detail/0/30_11_27_c06f9704479b3a2bc3517d1c48bd9909.png/0"},
					{title:"逗比", id:11, img:"https://manhua.qpic.cn/manhua_detail/0/30_11_27_eeedc3e7f8f329425787b49142f4dd93.png/0"},
					{title:"校园", id:12, img:"https://manhua.qpic.cn/manhua_detail/0/30_11_27_56fba2120c3a669ec521a7c2c89311a4.png/0"},
					{title:"都市", id:13, img:"https://manhua.qpic.cn/manhua_detail/0/30_11_27_2323eb2554ddfa153bb147784ef38d2e.png/0"},
					{title:"治愈", id:14, img:"https://manhua.qpic.cn/manhua_detail/0/30_11_27_56606cf718b6ce3f1e4ad3c26972f31b.png/0"}
				]
			}
		},
		components: {
			
		},
		computed: {
			classifyData(){
				if(this.classifyList.length > 0){
					return this.classifyList.slice(0,5)
				}
			}
		},
		methods:{
			
		}
	}
	
</script>

<style scoped>
	image[lazy=loading] {
	  width: 40px;
	  height: 300px;
	  margin: auto;
	}
	/*分类选项*/
	.classify_list{
	    width: 17.95rem;
	    height: 8.75rem;
	    margin-left: auto;
	    margin-right: auto;
	    overflow: hidden;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	}
	.classify_ul{
		width: 100%;
		margin-top: 0.5rem;
	    background-color: white;
	    overflow: hidden;
	}
	.classify_li{
		width: 50%;
	    height: 2.55rem;
	    float: left;
	    position: relative;
	}
	.classify_li:nth-of-type(5)>.classify_link>.classify_small.green{
		display: block;
	}
	.classify_li::before{
		content: '';
	    width: 1px;
	    height: 7.65rem;
	    background-color: #F5F5EE;
	    right: 0;
	    top: 0;
	    position: absolute;
	    display: block;
	}
	.classify_link{
		width: 100%;
	    height: 100%;
	    box-sizing: border-box;
	    padding-left: 1.25rem;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    text-decoration: none;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	}
	.classify_link::after{
		width: 6.3rem;
	    height: 1px;
	    -webkit-transform: scale(1, 0.5);
	    transform: scale(1, 0.5);
	    background-color: #F5F5EE;
	    content: '';
	    position: absolute;
	    left: 1.25rem;
	    bottom: 0px;
	}
	.classify_strong{
		width: 1.75rem;
		color: #969696;
	    font-size: 0.75rem;
	    display: block;
	    line-height: 2.55rem;
	    margin-right: 0.1rem;
	    font-weight: normal;
	}
	.classify_small{
		display: block;
		width: 1.775rem;
	    height: 0.7rem;
	    color: white;
	    background-image: url("../image/2.png");
	    background-size: 100% 100%;
	    background-repeat: no-repeat;
	    font-size: 0.4rem;
	    text-align: right;
	    line-height: 0.75rem;
	    box-sizing: border-box;
	    padding-right: 0.15rem;
	    margin-bottom: 0.1rem;
	}
	.classify_small.red{
		background-color: #de8275;
    	margin-right: 0.25rem;
	}
	.classify_small.green{
		display: none;
		background-color: #aadd71;
    	margin-right: 0.25rem;
	}
	
	/*详细分类*/
	.details_class{
		margin-top: 0.5rem;
	    background-color: #ffffff;
	    padding-top: 0.75rem;
	    overflow: hidden;
	}
	.details_ul{
		width: 18.75rem;
	    margin: 0 auto;
	    padding-left: 0.5rem;
	}
	.details_li{
		width: 8.55rem;
	    height: 5rem;
	    float: left;
	    margin-bottom: 0.75rem;
	}
	.details_li:nth-of-type(2n+1){
		margin-right: 0.65rem;
	}
	.details_link{
		position: relative;
	    width: 8.55rem;
	    height: 5rem;
	    display: block;
	}
	.details_link_span{
		color: #535252;
	    font-size: 0.7rem;
	    position: absolute;
	    left: 0.9rem;
	    top: 2.05rem;
	}
	.details_link img{
		width: 100%;
		height: 100%;
		display: block;
	}
</style>