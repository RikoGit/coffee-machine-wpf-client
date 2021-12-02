<template>
    <article>
        <fieldset>
            <legend><h3>Остаток монет</h3></legend>
            <ul class="coffeemachinecoins">
                <li v-for="coin in coins" :key="coin[0]" class="coffeemachinecoins__item">
                    {{ coin[0] }} руб. -
                    <Count :value="coin[1]" />
                </li>
            </ul>
            <TotalSum :coins="coins" />
        </fieldset>
    </article>
</template>

<script>
import Count from '../Count/index.vue';
import TotalSum from '../TotalSum/index.vue';

export default {
    name: 'CoffeeMachineCoins',
    props: {
        coins: {
            type: Array,
            default: () => [],
        },
    },
    components: { Count, TotalSum },
};
</script>

<style lang="scss">
@import './styles.scss';
</style>
