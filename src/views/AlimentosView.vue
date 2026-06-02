<script setup>
    import { ref } from 'vue'
    import { listaProdutos } from '@/data/produtos'; 

    import ProdutoCard from '@/components/ProdutoCard.vue';
    defineProps(['id', 'imagem', 'nome', 'categoria', 'preco'])
    const produtos = ref(listaProdutos);
    produtos.value = produtos.value.filter(p => p.categoria === 'Alimentos');
</script>

<template>
    <div class="container">
        <h1>Alimentos</h1>
        <div class="produtos">
            <ProdutoCard v-for="produto in produtos" :key="produto.id" :nome="produto.nome" :id="produto.id" :preco="produto.preco" :categoria="produto.categoria" :imagem="produto.imagem"> 

            </ProdutoCard>
        </div>
</div>
</template>

<style scoped>
</style>