<script setup>
    import { formataPreco } from '@/utils/produtoUtils';
    import ButtonChild from './ButtonChild.vue';
    defineProps(['id', 'nome', 'preco', 'imagem', 'categoria'])
</script>

<template>
    <div class="produto-card">
        <div>
            <h2>{{ nome }}</h2>
            <p>Preço: {{ formataPreco(preco) }}</p>
        </div>
        <div>
            <img :src="imagem" :alt="nome" class="produto-imagem" />
        </div>
        <ButtonChild>Editar</ButtonChild>
    </div>
</template>

<style scoped>
.produto-card{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 16px;
    margin-bottom: 16px;
}

.produto-imagem{
    height: 100px;
    width: 100px;
    object-fit: cover;
}
</style>