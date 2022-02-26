<template>
	<div class="mainDiv">
		{{import}}
		<el-button type="primary" class="btn">a按钮121</el-button>
		<el-badge :value="12" class="item">
			<el-button>comments</el-button>
		</el-badge>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	setup() {},
});
</script>

<style lang="scss" scoped>
.mainDiv {
	position: relative;
	.btn {
		margin-right: 40px;
	}
}
</style>
