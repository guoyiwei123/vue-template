<script setup>
import {computed} from 'vue';
const props = defineProps({
    // 类型
    type: {
        type: String,
        default: 'normal'
    },
    // 是否禁用
    disabled: {
        type: Boolean,
        default: false
    },
    // 链接状态
    link: {
        type: Boolean,
        default: false
    },
    // 加载中状态
    loading: {
        type: Boolean,
        default: false
    }
});
defineEmits([
    'click'
]);
const classList = computed(() => {
    const {type, link, loading} = props;
    const list = [type];
    loading && list.push('loading');
    link && list.push('link');
    console.log(list);
    return list;
});
</script>
<template>
	<button
		class="ld-button"
		:class="classList"
		:disabled="disabled"
		@click="$emit('click', $event)"
	>
		<slot />
	</button>
</template>
<style lang="scss">
$primary-color: #1890ff;
$primary-hover-color: #79bbff;
$primary-disabled-color: #a0cfff;

$success-color: #67c23a;
$success-hover-color: #95d475;
$success-disabled-color: #b3e19d;

$info-color: #909399;
$info-hover-color: #b1b3b8;
$info-disabled-color: #c8c9cc;

$warning-color: #e6a23c;
$warning-hover-color: #eebe77;
$warning-disabled-color: #f3d19e;

$danger-color: #ff4d4f;
$danger-hover-color: #ff7875;
$danger-disabled-color: #fab6b6;
.ld-button{
    display: inline-flex;
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 3px;
    border: 1px solid;
    cursor: pointer;
    &:hover{
        border-color: #409eff;
        color: #409eff;
    }
    &.normal{
        border-color: #dcdfe6;
        color: #606266;
        background-color: #fff;
    }
    &.primary{
        background-color: $primary-color;
        border-color: $primary-color;
        color: #fff;
        &:hover{
            border-color: $primary-hover-color;
            background-color: $primary-hover-color;
        }
    }
    &.success{
        background-color: $success-color;
        border-color: $success-color;
        color: #fff;
        &:hover{
            border-color: $success-hover-color;
            background-color: $success-hover-color;
        }
    }
    &.info{
        background-color: $info-color;
        border-color: $info-color;
        color: #fff;
        &:hover{
            border-color: $info-hover-color;
            background-color: $info-hover-color;
        }
    }
    &.warning{
        background-color: $warning-color;
        border-color: $warning-color;
        color: #fff;
        &:hover{
            border-color: $warning-hover-color;
            background-color: $warning-hover-color;
        }
    }
    &.danger{
        background-color: $danger-color;
        border-color: $danger-color;
        color: #fff;
        &:hover{
            border-color: $danger-hover-color;
            background-color: $danger-hover-color;
        }
    }
}
// 不可选中 & 加载中
.ld-button:disabled, .ld-button.loading{
    &.normal{
        border-color: #e4e7ed;
    }
    &.primary{
        background-color: $primary-disabled-color;
        border-color: $primary-disabled-color;
    }
    &.success{
        background-color: $success-disabled-color;
        border-color: $success-disabled-color;
    }
    &.info{
        background-color: $info-disabled-color;
        border-color: $info-disabled-color;
    }
    &.warning{
        background-color: $warning-disabled-color;
        border-color: $warning-disabled-color;
    }
    &.danger{
        background-color: $danger-disabled-color;
        border-color: $danger-disabled-color;
    }
}
.ld-button:disabled{
    cursor: not-allowed;
}
.ld-button.loading{
    pointer-events: none;
}
// 链接状态
.ld-button.link{
    &.normal, &.primary, &.info, &.warning, &.danger, :disabled{
        background-color: #fff;
        border-color: #fff;
    }
    &.primary{
        color: $primary-color;
    }
    &.success{
        color: $success-color;
    }
    &.info{
        color: $info-color;
    }
    &.warning{
        color: $warning-color;
    }
    &.danger{
        color: $danger-color;
    }
    &:disabled, &.loading{
        &.primary{
            color: $primary-disabled-color;
        }
        &.success{
            color: $success-disabled-color;
        }
        &.info{
            color: $info-disabled-color;
        }
        &.warning{
            color: $warning-disabled-color;
        }
        &.danger{
            color: $danger-disabled-color;
        }
    }
}
</style>