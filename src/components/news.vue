<template>
	<div>
		<h2>News</h2>
		<ul>
			<router-link to='/content'>
				<li v-for="elm in list"> {{elm}} </li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				list: ['owo', 'qwq']
			}
		},
	}
</script>