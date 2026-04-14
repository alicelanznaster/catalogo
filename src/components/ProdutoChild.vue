<script setup>
    defineProps(['nome', 'preco', 'categoria'])
</script>

<template>
    <li>
         {{ nome }} - R$ {{ preco }} ({{ categoria }})
    </li>
</template>

<style scoped>
</style>