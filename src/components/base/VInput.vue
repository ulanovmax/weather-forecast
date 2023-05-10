<template>
	<div class="input-item" :class="{ error }">
		<span v-if="iconName" ref="input" class="material-symbols-outlined icon">{{
			iconName
		}}</span>
		<input
			type="text"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			@keydown="$emit('keydown', $event.target)"
			@focusout="$emit('focusout', $event.target)"
			:placeholder="placeholder"
		/>

		<div v-if="error" class="error-message">
			<span class="material-symbols-outlined"> error </span>
			<p>{{ errorMessage }}</p>
		</div>
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

	error: {
		type: Boolean,
		default: false,
	},

	errorMessage: {
		type: [String, Number],
		default: "Nothing found",
	},
});
</script>

<style scoped lang="scss">
@import "input";
</style>
