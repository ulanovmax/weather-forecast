<template>
	<transition>
		<div v-if="isOpen" class="popup" @click="close">
			<div class="popup__cont" @click.stop>
				<slot><h3>Are you sure you want to delete?</h3></slot>

				<slot name="actions" :close="close">
					<div class="buttons">
						<button type="button" class="btn" @click="close">Cancel</button>
						<button type="button" class="btn btn-red" @click="$emit('delete')">
							Yes
						</button>
					</div>
				</slot>
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

const emits = defineEmits(["close"]);

function close() {
	emits("close");
}
</script>

<style lang="scss">
@import "popup";
</style>
