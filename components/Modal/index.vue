<template>
    <div class="modal">
        <div
            role="dialog"
            id="modal"
            aria-labelledby="modal_label"
            aria-modal="true"
            class="modal__content"
        >
            <slot />
            <Button :onClickHandler="onClickHandler">OK</Button>
        </div>
    </div>
</template>

<script>
import Button from '../Button/index.vue';

export default {
    name: 'Modal',
    components: {
        Button,
    },
    props: {
        onClickHandler: {
            type: Function,
            default: () => {},
        },
    },
};
</script>

<style lang="scss">
@import './styles.scss';
</style>
