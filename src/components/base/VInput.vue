<template>
	<div class="input-item" :class="{ error: notFound || notExist || duplicate }">
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

		<div v-if="notFound" class="warning-mess">
			<span class="material-symbols-outlined"> error </span>
			<p>City not found</p>
		</div>

		<div v-if="duplicate" class="warning-mess">
			<span class="material-symbols-outlined"> error </span>
			<p>City already exists</p>
		</div>

		<div v-if="notExist" class="warning-mess">
			<span class="material-symbols-outlined"> error </span>
			<p>Sorry, city doesn't exist</p>
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

	notExist: {
		type: Boolean,
		default: false,
	},

	duplicate: {
		type: Boolean,
		default: false,
	},

	notFound: {
		type: Boolean,
		default: false,
	},
});
</script>

<style scoped lang="scss">
@import "input";
</style>
