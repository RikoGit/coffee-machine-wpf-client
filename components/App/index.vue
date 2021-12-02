<template>
    <div class="root">
        <main class="main">
            <h1 class="main__header">Coffee Machine WPF Client</h1>
            <CoffeeMachine
                :balance="balance"
                :coins="coffeeMachineCoins"
                :buyProductHandler="buyProduct"
            />
            <Client
                :balance="balance"
                :coins="clientCoins"
                :rechargeBalanceHandler="rechargeBalance"
                :getBalanceHandler="getBalance"
            />
        </main>
        <Modal v-show="isModal" :onClickHandler="closeModal"
            ><h4>Вы купили {{ productValue }}.</h4>
            <p>Спасибо за покупку!</p></Modal
        >
    </div>
</template>

<script>
import Client from '../Client/index.vue';
import CoffeeMachine from '../CoffeeMachine/index.vue';
import Modal from '../Modal/index.vue';
import { coins } from '../../constants.js';

const coinsByValue = [...coins].sort((a, b) => a.value - b.value);

const coffeeMachineCoins = () => {
    const coins = new Map();
    coinsByValue.forEach((coin) => coins.set(coin.value, 100));

    return coins;
};
const clientCoins = () => {
    const coins = new Map();
    coins.set(1, 10);
    coins.set(2, 30);
    coins.set(5, 20);
    coins.set(10, 15);

    return coins;
};

export default {
    components: {
        Client,
        CoffeeMachine,
        Modal,
    },
    data() {
        return {
            balance: 0,
            clientCoins: clientCoins(),
            coffeeMachineCoins: coffeeMachineCoins(),
            productValue: '',
            isModal: false,
        };
    },
    methods: {
        rechargeBalance(value) {
            this.balance += value;

            const clientCoinsValue = this.clientCoins.get(value);
            this.clientCoins.set(value, clientCoinsValue - 1);
            this.clientCoins = new Map([...this.clientCoins]);

            const coffeeMachineCoinsValue = this.coffeeMachineCoins.get(value);
            this.coffeeMachineCoins.set(value, coffeeMachineCoinsValue + 1);
            this.coffeeMachineCoins = new Map([...this.coffeeMachineCoins]);
        },
        getBalance() {
            if (this.balance <= 0) return;

            const coffeeMachineReverseCoins = new Map([...this.coffeeMachineCoins].reverse());
            coffeeMachineReverseCoins.forEach((value, key) => {
                if (value === 0 || key === 0) return;

                const numberOfCoins = Math.trunc(this.balance / key);
                if (numberOfCoins < 1) return;

                const clientCoinsValue = this.clientCoins.get(key);
                if (value >= numberOfCoins) {
                    this.coffeeMachineCoins.set(key, value - numberOfCoins);
                    this.clientCoins.set(key, clientCoinsValue + numberOfCoins);
                    this.balance -= numberOfCoins * key;
                } else {
                    console.log(`монет ${key} руб. всего ${value}`);
                    this.coffeeMachineCoins.set(key, 0);
                    this.clientCoins.set(key, clientCoinsValue + value);
                    this.balance -= value * key;
                }
            });

            this.coffeeMachineCoins = new Map([...this.coffeeMachineCoins]);
            this.clientCoins = new Map([...this.clientCoins]);
        },
        openModal() {
            this.isModal = true;
        },
        closeModal() {
            this.isModal = false;
            this.productValue = '';
        },
        buyProduct({ value, price }) {
            this.balance -= price;
            this.productValue = value;
            this.openModal();
        },
    },
};
</script>

<style lang="scss">
@import './styles.scss';
</style>
