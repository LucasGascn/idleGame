
<template>
    <h1>MarketBoard</h1>
    <div class="marketBoard">
        <MarketOffers/>

<!--          <div v-for="(offer, index) in marketList"
        :key = "index"
        class="containerOffer" >
            <div>
                <div>
                    <div>Vendeur : {{offer.owner.username}}</div>
                    <div> Vends : {{offer.quantity + " " + offer.resource.name}}</div>
                    <div>Pour : {{offer.unitPrice}} </div>
                    <div>{{offer}}</div> 
                    <button @click="buy(offer.id, offer.quantity)">acheter</button>
                </div>
            </div>
        </div>  -->
    </div>


<!--     
    <div v-for="(marketOffer,index) in marketList"
    :key="index">
        {{marketOffer}}
    </div> -->
    <form class="marketForm" @submit.prevent="onSubmit">
        <h3>
            Créer une offre
        </h3>
        <div class="seller">
            <input type="int" v-model.number="id" placeholder="id">
            <input type="int" v-model.number="quantity" placeholder="quantité">
            <input type="int" v-model.number="price" placeholder="prix">
            <button type="submit">Créer une offre</button>
        </div>
    </form>
</template>


<script>
import { mapActions, mapState } from 'pinia';
import { useMarketStore } from '../store/marketStore';
import { useResourceStore } from '../store/resourceStore';
import MarketOffers from './MarketOffers.vue';

export default {
    components: {
    MarketOffers
},
    data() {
        return {
            id:"",
            quantity:"",
            price:""
        }
        offer:{
            id: 3
            name: 'example test'

        }
    },
    methods: {
        ...mapActions(useMarketStore,['createOffer',"buyOffer","deleteTrade","getAllTrades","getTradeById","getMyTrades"]),
        ...mapActions(useResourceStore,["getResources","getResourcesById"]),
        onSubmit(){
            let data = {
                "resourceId": this.id,
                "quantity" : this.quantity,
                "unitPrice": this.price
            }
            console.log(data);
            this.createOffer(data);
        },
        buy(id, quantity){
            let data ={
                "id":id,
                "quantity":quantity,
            }
            this.buyOffer(data);
            this.getAllTrades();
        }
    },
    computed: {
        ...mapState(useMarketStore,['marketList','myOffers']),
        ...mapState(useResourceStore,['resourceList'])
    },
    mounted () {
        this.getAllTrades();
    },
}
</script>

<style>

.marketForm{
    border: #748695 solid;
    text-align: center;
    margin: 30px 50px 100px 50px;
    padding-bottom: 10px;
}


.seller input{
    margin: 10px;
}
.seller{
    display: flex;
    flex-wrap: wrap;

}
h1{
    text-align: center;
}
.marketBoard{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

}
.containerOffer{
    width: 22%;
    display: flex;
    flex-direction: column;
    text-align: center;
    background: #748695;
    margin:10px;
    padding: 15px 0;
    border-radius: 15px;
}
.seller{
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 10px;
}
</style>