<template>
    <h1>Inventaire</h1> 

    <div>
        <div> argent : {{this.inventory.money}}</div>
        <div v-for="ressource in this.inventory.inventory_resources">
            id : {{ressource.id + " quantité : " + ressource.quantity}} 
        </div>
        <!-- <div v-for="(item,index) in this.inventory.owner"
        :key="index">
            {{item}}
        </div> -->
        <!-- <div>{{sizeOf(item.factories)}}</div> -->
        <!-- <div v-for="factory in item.owner">
            <div>Factory</div>
         {{ factory.model.resource.name}} 
        </div> -->
    </div>

    <div v-for="(resource,index) in resourceList"
    :key="index">
        <div>{{resource.name + " : " + resource.quantity}}</div>
    </div>

    <div>
        <form @submit.prevent = "onSubmit">
            <input type="text" v-model="name" placeholder="nom de la ressource">
            <input type="text" v-model="img" placeholder="url d'image">
            <input type="text" v-model="baseVal" placeholder="valeur de base">
            <button type="submit">Créer Ressource</button>
        </form>
    </div>
</template>

<script>
    import { mapActions,mapState } from 'pinia';
    import { useResourceStore } from '../store/resourceStore'

    export default {
        data() {
            return {
                name: "",
                img:"",
                baseVal:"",

            }
        },
        methods: {
            ...mapActions(useResourceStore,["getResources","createResources","getInventory","getResourcesById"]),
            onSubmit(){
                let data ={
                    "name": this.name,
                    "image_url": this.img,
                    "base_value": this.baseVal
                }
                this.createResource(data)
                this.getResources()
            }
        },
        computed: {
            ...mapState(useResourceStore,["inventory","resourceList"])
        },
        mounted () {
            this.getResources();
            this.getInventory();
        },
    }
</script>