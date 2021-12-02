<template>
    <img :src="img" :alt="`${value} руб.`" height="80" />
</template>

<script>
import { coins } from '../../constants.js';

export default {
    props: {
        value: {
            type: Number,
            default: 1,
        },
    },
    computed: {
        img() {
            return coins.find((coin) => coin.value === this.value).img;
        },
    },
};
</script>

<style lang="scss">
@import './styles.scss';
</style>
