<template>
    <p>Сумма {{ value }} руб.</p>
</template>

<script>
export default {
    name: 'TotalSum',
    props: {
        coins: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        value() {
            return [...this.coins].reduce((acc, coin) => (acc += coin[0] * coin[1]), 0);
        },
    },
};
</script>

<style lang="scss">
@import './styles.scss';
</style>
