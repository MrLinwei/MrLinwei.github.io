import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
	// 存储tabBar显示布尔值
	toptext:true,
	// tabBar显示详情
	topdata:{},
	// tabBar显示数据
	detail:{},
	// 收藏
	cartoon:[]
}
const actions = {
	addCartoon({commit},item){
		let isUrl = 'http://localhost:8081/addNum?week_id='+item.week_id
		axios.get(isUrl)
		.then(function(data){
			if(data.data.length>0){
				return
				
			}else if(data.data.length===0){
				let postUrl = 'http://localhost:8081/addNum'
				axios.post(postUrl, item)
				commit('ADDCARTOON',item)
			}
		})
	}
}
const mutations = {
	ADDCARTOON(state, item){
		state.cartoon.push(item)
	}
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})