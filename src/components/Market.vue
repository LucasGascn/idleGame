
<template>
    <h1>MarketBoard</h1>
    <div v-for="(offer, index) in marketList"
    :key = "index" 
    class="marketBoard">
    <div>{{offer}}</div>
    <button @click="buyOffer(index)">acheter</button>
    </div>

    <div class="marketBoard">
        <div class="containerOffer">
            <form action="">

                <div>
                    <h3>NOM DE L'OFFRE</h3>
                </div>

                <div>
                    <p>QUANTITE</p>
                    <p>PRIX</p>
                    <p>SELLER</p>
                </div>
            </form>

            <button>BUY</button>
        </div>
    </div>

<!--     
    <div v-for="(marketOffer,index) in marketList"
    :key="index">
        {{marketOffer}}
    </div> -->
    <form @submit.prevent="onSubmit">
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

export default {
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
h1{
    text-align: center;
}
.marketBoard{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.containerOffer{
    width: 22%;
    display: flex;
    flex-direction: column;
    text-align: center;
    background: lightgray;
}
.seller{
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 10px;
}
</style>