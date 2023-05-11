<template>
	<transition>
		<div v-if="isOpen" class="popup">
			<div class="popup__cont">
				<h3>Are you sure you want to delete?</h3>

				<div class="buttons">
					<button type="button" class="btn" @click="$emit('close', false)">Cancel</button>
					<button type="button" class="btn btn-red">Yes</button>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup>
defineProps({
	isOpen: {
		type: Boolean,
		default: false,
	},
});
</script>

<style scoped lang="scss">
@import "popup";
</style>
