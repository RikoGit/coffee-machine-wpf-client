<template>
    <button class="button" :disabled="!(coin[1] > 0)" @click="() => onClickHandler(coin[0])">
        <CoinIcon :value="coin[0]" />
        <Count :value="coin[1]" />
    </button>
</template>

<script>
import CoinIcon from '../CoinIcon/index.vue';
import Count from '../Count/index.vue';

export default {
    name: 'CoinButton',
    components: {
        CoinIcon,
        Count,
    },
    props: {
        coin: {
            type: Array,
            default: () => [1, 0],
        },
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
