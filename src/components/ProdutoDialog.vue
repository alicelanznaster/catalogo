<script setup>
    import ButtonChild from './ButtonChild.vue';
    import { formataPreco } from '@/utils/produtoUtils';
    import { ref } from 'vue';
    import { listaProdutos } from '@/data/produtos';
    const props = defineProps(['id', 'nome', 'categoria', 'preco'])
</script>

<template>
    <div class="overlay">
    <div class="produto-dialog">
        <h2>{{ props.nome }}</h2>
        <h3>ID:{{ props.id }}</h3>
        <p>Preço: {{ formataPreco(props.preco) }}</p>
        <p>Categoria: {{ props.categoria }}</p>
        <ButtonChild>Corrigir Preço</ButtonChild>
        <ButoonChild>Fechar</ButoonChild>
    </div>
    </div>
</template>

<style scoped>
    .produto-dialog{
        background-color: rgb(73, 73, 73);
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 24px;
        min-width: 320px;
    }

    .overlay{
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
    }
</style>