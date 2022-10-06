import { defineStore } from "pinia";
import { buyFactorySlot, createFactory, deleteFactory, getAllFactories, getFactoryById, getFactoryLimit, upgradeFactory } from "../functions/api";

export const useFactoriesStore = defineStore('factories', {
    state: () => ({
        factoriesList: {},
        factorySlot: {},
        factoryLimit: {}
    }),
    actions:  {
        async createFactory(data){
            await createFactory(data).then((res) => {
                this.factoriesList.push(res.data)
            })
        },
        async getAllFactoriesList(){
            await getAllFactories().then((res) => {
                this.factoriesList = res.data;
            })
        },
        async getFactoryById(id){
            await getFactoryById(id).then((res) => {
                this.factoriesList = res.data;
            })
        },
        async deleteFactory(id){
            await deleteFactory(id).then((res) => {
                this.factoriesList.splice(id, 1);
            })
        },
        async upgradeFactory(id, data){
            await upgradeFactory(id, data).then((res) => {
                this.factoriesList[id] = res.data;
            })
        },
        async buyFactorySlot(data){
            await buyFactorySlot(data).then((res) => {
                this.factorySlot = res.data;
            })
        },
        async getFactoryLimit(){
            await getFactoryLimit().then((res) => {
                this.factoryLimit = res.data;
            })
        }
    } 
})