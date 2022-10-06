<script >
export default{
    data(){
        return{
        coin:50
        }
    }
}
</script>
<template>
<nav>
        <RouterLink class="Link" to="/">home</RouterLink>
        <RouterLink class="Link" to="/factory">factory</RouterLink>
        <RouterLink class="Link" to="/market">market</RouterLink>
        <RouterLink class="Link" to="/ressource">ressource</RouterLink>
</nav>

<p>coin : {{this.coin}}</p>
</template>

<style>
    .Link{
        padding-right: 30px;
    }
</style>