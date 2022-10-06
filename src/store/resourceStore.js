import { defineStore } from "pinia";
import { createResource, getInventory, getResources, getResourcesById } from "../functions/api";

export const useResourceStore = defineStore('resources', {
    state: () => ({
        resourceList: {},
        inventory: {}
    }),
    actions: {
        async getResources(){
            await getResources().then((res) => {
                this.resourceList = res.data;
            })
        },
        async createResource(data){
            await createResource(data).then((res) => {
                this.resourceList.push(res.data);
            })
        },
        async getResourcesById(){
            await getResourcesById().then((res) => {
                this.resourceList = res.data;
            })
        },
        async getInventory(){
            await getInventory().then((res) => {
                this.inventory = res.data;
            })
        }
    }
})