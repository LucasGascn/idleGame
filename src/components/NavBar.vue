<script >
export default{

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


</template>

<style>
    .containerNav{
    background-color: #1f272e;
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: 3vw 0;

    }
    nav{
        text-align: center;
        align-items: center;
        justify-content: space-around;
        display: flex;
        width: 100%;
    }
    .Link{
        color:white;
        margin: 0 1vw;
        text-decoration: none;
    }

</style>