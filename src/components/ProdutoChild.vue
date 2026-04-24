<script setup>
    defineProps(['nome', 'preco', 'categoria', 'id'])
    defineEmits(['corrigirpreco'])
    import ButtonChild from './ButtonChild.vue';
    import { formataPreco } from '@/utils/produtoUtils';
</script>

<template>
    <li>
         {{ nome }} - {{ formataPreco(preco) }} ({{ categoria }})
    </li>
    <ButtonChild @clique="$emit('corrigirpreco', id, preco)">
        Corrigir preço
    </ButtonChild>
</template>

<style scoped>


</style>