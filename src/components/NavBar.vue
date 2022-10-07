
<template>

<div class="containerNav">
    <!-- <div> argent : {{this.inventory.money}}</div> -->
    <nav>
        <RouterLink class="Link" to="/">Home</RouterLink>
        <RouterLink class="Link" to="/factory">Factory</RouterLink>
        <RouterLink class="Link" to="/market">Market</RouterLink>
        <RouterLink class="Link" to="/ressource">Ressource</RouterLink>
        <div class="coinsDiv" > Coins : {{this.inventory.money}}</div>

    </nav>
</div>


</template>

<script>
    import { mapActions,mapState } from 'pinia';
    import { useResourceStore } from '../store/resourceStore'

    export default {
        methods: {
        ...mapActions(useResourceStore,["getResources","createResources","getInventory","getResourcesById"]),
        // updateTimer(){
        //     setInterval(() => {
        //         getInventory()
        //     }, 10)
        // }
    },
    computed:{
        ...mapState(useResourceStore,["inventory","resourceList"]),
    },
    mounted(){
        // this.inventory.money = setInterval(()=>{
        //     this.getInventory();
        // },1000)
    }
    }

</script>

<style>
    .containerNav{
    background-color: #1f272e;
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: 1vw 0;

    }
    nav{
        text-align: center;
        align-items: center;
        justify-content: space-around;
        display: flex;
        width: 100%;
        font-size: large;
    }
    .Link,.coinsDiv{
        color:white;
        margin: 0 1vw;
        text-decoration: none;
    }

    .coinsDiv{
    background-color: #121619;
    border-radius: 15px;
    padding: 20px;
    }

</style>