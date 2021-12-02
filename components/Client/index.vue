<template>
    <article class="client">
        <fieldset class="client__fieldset">
            <legend><h2>Клиент</h2></legend>
            <CoinButton
                v-for="coin in coins"
                :key="coin[0]"
                :coin="coin"
                :onClickHandler="rechargeBalanceHandler"
            />
            <TotalSum :coins="coins" />
            <Button :disabled="isDisabled" :onClickHandler="getBalanceHandler">
                Забрать сдачу
            </Button>
        </fieldset>
    </article>
</template>

<script>
import Button from '../Button/index.vue';
import CoinButton from '../CoinButton/index.vue';
import TotalSum from '../TotalSum/index.vue';

export default {
    name: 'Client',
    components: {
        Button,
        CoinButton,
        TotalSum,
    },
    props: {
        balance: {
            type: Number,
            default: 0,
        },
        coins: {
            type: Array,
            default: () => [],
        },
        rechargeBalanceHandler: {
            type: Function,
            default: () => {},
        },
        getBalanceHandler: {
            type: Function,
            default: () => {},
        },
    },
    computed: {
        isDisabled() {
            return this.balance <= 0;
        },
    },
};
</script>

<style lang="scss">
@import './styles.scss';
</style>
