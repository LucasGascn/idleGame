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

<div class="containerNav">
    <nav>
        <RouterLink class="Link" to="/">Home</RouterLink>
        <RouterLink class="Link" to="/factory">Factory</RouterLink>
        <RouterLink class="Link" to="/market">Market</RouterLink>
        <RouterLink class="Link" to="/ressource">Ressource</RouterLink>
    </nav>
</div>


<p>coin : {{this.coin}}</p>
</template>

<style>
    .Link{
        padding-right: 30px;
    }
    .containerNav{
        display: flex;
        align-content: center;
        justify-content: center;
    }
</style>