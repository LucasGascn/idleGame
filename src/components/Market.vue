
<template>
    <h1>MarketBoard</h1>
    <div v-for="(offer, index) in marketList">
    
    </div>
</template>


<script>
import { mapActions, mapState } from 'pinia';
import { useMarketStore } from '../store/marketStore';

export default {
    methods: {
        ...mapActions(useMarketStore,['createOffer',"buyOffer","deleteTrade","getAllTrades","getMyTrades","getTradeById"])
    },
    computed: {
        ...mapState(useMarketStore,['marketList','myOffers']) 
    },
    mounted () {
        this.getAllTrades;
    },
}
</script>