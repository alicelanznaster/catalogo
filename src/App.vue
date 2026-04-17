<script setup>
  import { ref } from 'vue'
  import ProdutoChild from './components/ProdutoChild.vue'
  import SalvarChild from './components/SalvarChild.vue'
  import { listaProdutos } from './data/produtos'
  import { formataPreco } from './utils/produtoUtils'
  const produtos = ref(listaProdutos);
  
  const preco = ref(0)
  const posicaoProduto = ref(-1)
  const alterando = ref(false)

  function corrigirPreco(idProduto, precoProduto){
    preco.value = precoProduto;
    posicaoProduto.value = produtos.value.findIndex(p => p.id === idProduto);
    alterando.value = true;
    
  }

  function salvarPreco() {
    produtos.value[posicaoProduto.value].preco = preco.value
    alterando.value = false;
  }
</script>

<template>
  <div class="container">
    <h1>Catálogo de Produtos</h1>
    <div>
      <ul>
        <ProdutoChild v-for="produto in produtos" :key="produto.id" :nome="produto.nome" :preco="produto.preco" :categoria="produto.categoria" @corrigirpreco="corrigirPreco" :id="produto.id">
          
        </ProdutoChild>
      </ul>
    </div>
    <div v-show="alterando">
      <label>Preço: </label>
      <input type="text" v-model="preco" @keyup.enter="salvarPreco">
      <button @click.prevent="salvarPreco()">Salvar</button>
    </div>
  </div>
</template>

<style scoped>
</style>
