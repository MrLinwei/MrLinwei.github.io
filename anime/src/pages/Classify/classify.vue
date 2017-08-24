<template>
	<div class="classify">
		<leader></leader>
		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Leader from 'components/Header/Leader'
	
	export default {
		created(){
			
		},
		data(){
			return {
				
			}
		},
		components: {
			Leader
		},
		computed: {
			
		}
	}
	
</script>

<style scoped>
	
</style>