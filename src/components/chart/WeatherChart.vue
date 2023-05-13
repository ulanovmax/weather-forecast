<template>
	<v-chart :option="chartOptions" :autoresize="true"></v-chart>
</template>

<script setup>
// Vue
import { ref } from "vue";

// Echart
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts.js";

use([CanvasRenderer, GridComponent, BarChart]);

// Props
const props = defineProps({
	days: {
		type: Array,
		required: true,
	},

	values: {
		type: Array,
		required: true,
	},
});

const chartOptions = ref({
	xAxis: {
		type: "category",
		data: props.days,
	},
	yAxis: {
		type: "value",
		data: props.values,

		axisLabel: {
			formatter: "{value} °",
		},
	},
	series: [
		{
			data: props.values,
			type: "bar",
		},
	],
});
</script>

<style scoped></style>
