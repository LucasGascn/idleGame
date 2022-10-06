
<template>    
    <h1>Factories</h1>

    <div v-for="(factory,index) in factoriesList"
    :key = "index"
    class="factory">
        <div>{{factory.model.resource.name}}</div>
        <div><img src={{factory.model.image_url}}></div>
        <div>niveau : {{factory.level}}</div>
        <div>prod : {{factory.model.generate_per_minute}} / min </div>
        <div> cout upgrade : {{factory.next_upgrade_cost + " " + factory.model.upgrade_resource.name}}</div>
        <button @click="upgradeFactory(factory.id)">Upgrade</button>
        <button @click="deleteFactory(factoryList[index])">Delete</button>
    </div>

    <div>
        Maximum de Factory: {{this.factoryLimit.factory_limit }}
        <button @click="buyFactorySlot">Augmenter la limite</button>
    </div>


    <form @submit.prevent="onSubmit">
        <div class="facOptions">
            Sélectionner le type de factory
            <div v-for="(model, index) in factoryModelsList"
                    :key = "index"
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
        <button type="submit">Créer Factory</button>
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
    