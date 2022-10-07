import { defineStore } from "pinia";
import { buyFactorySlot, createFactory, createFactoryModel, deleteFactory, getAllFactories, getFactoriesModels, getFactoryById, getFactoryLimit, upgradeFactory } from "../functions/api";

export const useFactoriesStore = defineStore('factories', {
    state: () => ({
        factoriesList: {},
        factorySlot: {},
        factoryLimit: {},
        factoryModelsList: {}
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
        async upgradeFactory(id){
            await upgradeFactory(id).then((res) => {
                this.factoriesList[id] = res.data;
            })
        },
        async buyFactorySlot(){
            await buyFactorySlot().then((res) => {
                this.factorySlot = res.data;
            })
        },
        async getFactoryLimit(){
            await getFactoryLimit().then((res) => {
                this.factoryLimit = res.data;
            })
        },
        async getAllFactoriesModels(){
            await getFactoriesModels().then((res) => {
                this.factoryModelsList = res.data;
            })
        },
        async createFactoriesModel(model){
            await createFactoryModel(model).then((res) => {
                this.factoryModelsList.push(res.data);
            })
        },
        async deleteFactoryModel(id){
            await deleteFactoryModel(id).then((res)=>{
                this.factoryModelsList.splice(id, 1);
            })
        }
    } 
})