<template>
    <article class="coffeemachine">
        <fieldset class="coffeemachine__fieldset">
            <legend><h2>Кофейный автомат</h2></legend>
            <p>
                Внесено <span class="coffeemachine__balance">{{ balance }}</span> руб.
            </p>
            <Products :balance="balance" :onClickHandler="buyProductHandler" />
            <CoffeeMachineCoins :coins="coins" />
        </fieldset>
    </article>
</template>

<script>
import CoffeeMachineCoins from '../CoffeeMachineCoins/index.vue';
import Products from '../Products/index.vue';

export default {
    props: {
        balance: {
            type: Number,
            default: 0,
        },
        coins: {
            type: Array,
            default: () => [],
        },
        buyProductHandler: {
            type: Function,
            default: () => {},
        },
    },
    components: {
        CoffeeMachineCoins,
        Products,
    },
};
</script>

<style lang="scss">
@import './styles.scss';
</style>
