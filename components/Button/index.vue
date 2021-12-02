<template>
    <button class="button" :disabled="disabled" @click="onClickHandler">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        disabled: Boolean,
        onClickHandler: {
            type: Function,
            default: () => {},
        },
    },
};
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
