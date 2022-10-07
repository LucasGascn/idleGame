<template>

    <div v-for="(offer, index) in marketList"
    :key = "index"
    class="containerOffer" >
        <div>
            <div>
                <div>Vendeur : {{offer.owner.username}}</div>
                <div> Vends : {{offer.quantity + offer.resource.name}}</div>
                <div>Pour : {{offer.unitPrice}} </div>
                <!-- <div>{{offer}}</div> -->
                <button @click="buyOffer(index)">acheter</button>
            </div>
        </div>
    </div>

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
.containerOffer{
    width: 22%;
    display: flex;
    flex-direction: column;
    text-align: center;
    background: lightgray;margin:5px
}

</style>