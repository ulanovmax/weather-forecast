<template>
	<div class="input-item">
		<span v-if="iconName" class="material-symbols-outlined icon">{{ iconName }}</span>
		<input
			type="text"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			:placeholder="placeholder"
		/>
	</div>
</template>

<script setup>
defineProps({
	placeholder: {
		type: [String, Number],
		default: "",
	},

	modelValue: {
		type: [String, Number],
	},

	withIcon: {
		type: Boolean,
		default: false,
	},

	iconName: {
		type: String,
	},
});
</script>

<style scoped lang="scss">
@import "input";
</style>
