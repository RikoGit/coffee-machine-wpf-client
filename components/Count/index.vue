<template>
    <span class="count"
        ><span class="count__value">{{ value }}</span> шт.</span
    >
</template>

<script>
export default {
    name: 'Count',
    props: {
        value: {
            type: Number,
            default: 0,
        },
    },
};
</script>

<style lang="scss">
@import './styles.scss';
</style>
