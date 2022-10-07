
<template>
    
    <h1>Factories</h1>

    <div class="factoryContainer">
        <div v-for="(factory,index) in factoriesList"
        :key = "index"
        class="factory">
            <div>{{factory.model.resource.name}}</div>
            <div><img src={{factory.model.image_url}}></div>
            <div>niveau : {{factory.level}}</div>
            <div>prod : {{factory.model.generate_per_minute*factory.level}} / min </div>
            <div> cout upgrade : {{factory.next_upgrade_cost + " " + factory.model.upgrade_resource.name}}</div>
            <button @click="factoryUpgrade(factory.id)">Upgrade pour {{ factory.level ** factory.model.upgrade_coef}}</button>
            <!-- <div>{{factory.id}}</div> -->
            <button @click="deleteFactory(factory.id)">Delete</button>
        </div>
    </div>

    <div>
        Maximum de Factory: {{this.factoryLimit.factory_limit }}
        <button @click="buyNewFactorySlot">Augmenter la limite</button>
    </div>


    <form @submit.prevent="onSubmit">
        <div class="facOptions">
            Sélectionner le type de factory
            <div v-for="(model, index) in factoryModelsList"
                    :key = "index"
                    class="facListing"
                    >
                    {{model.id + " " + model.resource.name}}
            </div>
            <select name="" id="" v-model.number="factoryModel" >
                <option v-for="(model, index) in factoryModelsList"
                    :key = "index"
                    type="int"
                    >{{model.id}}
                </option>
            </select>
        </div> 
        <button type="submit">Créer Factory pour {{Math.pow(8, this.factoriesList.length + 1)}}</button>
    </form>


</template>

<script>
    import { mapActions, mapState } from 'pinia'
    import { useFactoriesStore } from '../store/factoriesStore'
    
    
    
    export default{
        data() {
            return {
            factoryModel: null,
            }
        },
        methods: {
            ...mapActions(useFactoriesStore, ['createFactory','deleteFactory','getFactoryById','getAllFactoriesList','getFactoryLimit','upgradeFactory','buyFactorySlot','getAllFactoriesModels','deleteFactoryModel','createFactoriesModel']),
            onSubmit(){
            let rec = {
                "factory_model": this.factoryModel
            }
            console.log(rec)
            this.createFactory(rec);
            this.getAllFactoriesList();
        },
        factoryUpgrade(id){
            this.getAllFactoriesModels()
            this.upgradeFactory(id);
            // this.factoriesList = this.getAllFactoriesList();
        },
        buyNewFactorySlot(){
            this.buyFactorySlot();
            this.factoryLimit = this.getFactoryLimit();
        }
    },
    computed: {
        ...mapState(useFactoriesStore, ['factoriesList','factoryLimit','factorySlot','factoryModelsList']) 
    },
    mounted () {
        this.getAllFactoriesList();
        this.getAllFactoriesModels();
        this.getFactoryLimit();
        },
    }
    
    </script>
    
    <style>
        .factoryContainer{
            display: flex;
            flex-direction: row;
        }
        .factory{
            display: flex;
            flex-direction: column;
            background: burlywood;
            width:30%;
            margin: 1%;
        }
        .facListing{
            display: flex;
            flex-wrap: wrap;
        }
        .facListing div{
            width: 30%;
        }
    </style>