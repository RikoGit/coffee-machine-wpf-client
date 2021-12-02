<template>
    <article>
        <fieldset>
            <legend><h3>Товары</h3></legend>
            <ul class="products">
                <li v-for="product in products" :key="product.value" class="products__item">
                    <div class="product">
                        <span>{{ product.value }}</span> ({{ product.price }} руб.
                        <Count :value="product.count" />)
                    </div>
                    <Button
                        :disabled="!(product.count > 0 && balance >= product.price)"
                        :onClickHandler="() => getProduct(product)"
                    >
                        {{ product.count ? 'Купить' : 'Отсутствует' }}
                    </Button>
                </li>
            </ul>
        </fieldset>
    </article>
</template>

<script>
import Button from '../Button/index.vue';
import Count from '../Count/index.vue';
import TotalSum from '../TotalSum/index.vue';

export default {
    props: {
        balance: {
            type: Number,
            default: 0,
        },
        onClickHandler: {
            type: Function,
            default: () => {},
        },
    },
    components: {
        Button,
        Count,
        TotalSum,
    },
    data() {
        return {
            products: [
                {
                    value: 'Чай',
                    price: 13,
                    count: 2,
                },
                {
                    value: 'Кофе',
                    price: 18,
                    count: 20,
                },
                {
                    value: 'Кофе с молоком',
                    price: 21,
                    count: 20,
                },
                {
                    value: 'Сок',
                    price: 35,
                    count: 15,
                },
            ],
        };
    },
    methods: {
        getProduct(product) {
            product.count -= 1;
            this.onClickHandler(product);
        },
    },
};
</script>

<style lang="scss">
@import './styles.scss';
</style>
