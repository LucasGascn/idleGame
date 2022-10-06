
<template>
    <h1>MarketBoard</h1>
    <div v-for="(offer, index) in marketList"
    :key = "index" 
    class="marketBoard">
    <div>{{offer}}</div>
    <button @click="buyOffer(index)"></button>
    </div>
<!--     
    <div v-for="(marketOffer,index) in marketList"
    :key="index">
        {{marketOffer}}
    </div> -->
    <form @submit.prevent="onSubmit">
        <div class="seller">
            <input type="int" v-model="id" placeholder="id">
            <input type="int" v-model="quantity" placeholder="quantité">
            <input type="int" v-model="price" placeholder="prix">
        </div>
        <button type="submit">Créer une offre</button>
    </form>
</template>


<script>
import { mapActions, mapState } from 'pinia';
import { useMarketStore } from '../store/marketStore';

export default {
    data() {
        return {
            id:"",
            quantity:"",
            price:""
        }
    },
    methods: {
        ...mapActions(useMarketStore,['createOffer',"buyOffer","deleteTrade","getAllTrades","getTradeById","getMyTrades"]),
        onSubmit(){
            data ={
                "resourceId": this.id,
                "quantity" : this.quantity,
                "price": this.price
            }
            this.createOffer(data);
        }
    },
    computed: {
        ...mapState(useMarketStore,['marketList','myOffers']) 
    },
    mounted () {
        this.getAllTrades;
    },
}
</script>
