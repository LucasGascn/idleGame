import { defineStore } from "pinia";
import { createOffer, deleteTrade, getMyTrades, getTradeById } from "../functions/api";

export const useMarketStore = defineStore('market', {
    state: () => ({
        marketList: {},
        myOffers: {}
    }),
    actions: {
        async createOffer(data){
            await createOffer(data).then((res) => {
                this.marketList.push(res);
            })
        },
        async getMyTrades(){
            await getMyTrades().then((res) => {
                this.myOffers = res.data;
            })
        },
        async getTradeById(id){
            await getTradeById(id).then((res) => {
                this.marketList = res.data;
            })
        },
        async deleteTrade(id){
            await deleteTrade(id).then((res) => {
                this.marketList[id] = res.data;
            })
        }
    }
})