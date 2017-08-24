<template>
	<div class="more">
		<leader></leader>
		<div class="main">
			<section class="day_area">
				<div class="day_area_box">
					<ul class="day_comic_list">
						<li class="day_comic_item" v-for="(item, index) in more">
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
			</section>
		</div>
	</div>
</template>

<script>
	import Leader from 'components/Header/Leader'
	export default {
		created(){
			let moreUrl = 'http://localhost:8081/more'
			this.axios.get(moreUrl)
		    .then((data) => {
		    	this.more = data.data[this.$route.query.tags-1].week_book
		    	console.log(this.more)
		    })
		},
		data(){
			return {
				more:[]
			}
		},
		components: {
			Leader
		},
		computed:{
			moreList(){
				if(this.more.length > 0){
					
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
	/*对应分类数据*/
	.day_area{
		
	}
	.day_area_box{
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