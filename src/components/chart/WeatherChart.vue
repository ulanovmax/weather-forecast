<template>
	<v-chart :option="chartOptions"></v-chart>
</template>

<script setup>
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts.js";
import { ref } from "vue";

use([CanvasRenderer, GridComponent, BarChart]);

// Props
// const props = defineProps({
// 	cardInfo: {
// 		type: Object,
// 		required: true,
// 	},
//
// 	hideDelete: {
// 		type: Boolean,
// 		default: false,
// 	},
// });

const chartOptions = ref({
	xAxis: {
		type: "category",
		data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	},
	yAxis: {
		type: "value",
		data: [120, 200, 150, 80, 70, 110, 130],
	},
	series: [
		{
			data: [120, 200, 150, 80, 70, 110, 130],
			type: "bar",
		},
	],
});
</script>

<style scoped></style>
