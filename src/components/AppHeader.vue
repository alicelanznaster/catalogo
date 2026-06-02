<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/alimentos">Alimentos</RouterLink>
            
        </nav>
    </header>
</template>

<style scoped>
header{
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    background: #555454;
    z-index: 100;
    padding: 16px;
    border-bottom: 1px solid #444444;
    box-sizing: border-box;
}

nav{
    display: flex;
    gap: 16px;
}

a{
    text-decoration: none;
    color: #69ffac;
}

.router-link-active {
    font-weight: bold;
}
</style>