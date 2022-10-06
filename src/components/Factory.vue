
<template>
    <h1>Factories</h1>

    <div v-for="(factory,index) in factoriesList"
    :key = "index"
    class="factory">
        {{factory}}
        <button @click="upgradeFactory(index)">Upgrade pour : </button>
        <button @click="deleteFactory(index)">Delete</button>
    </div>

    <form @submit.prevent="onSubmit">
        <div class="facOptions">
            Sélectionner le type de factory
            <select name="" id="" v-model="factoryModel" v-for="(model, index) in factoryModelsList"
            :key = "index">
                <option>{{model.name}}</option>
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
            factoryModel: "",
        }
    },
    methods: {
        ...mapActions(useFactoriesStore, ['createFactory','deleteFactory','getFactoryById','getAllFactoriesList','getFactoryLimit','upgradeFactory','buyFactorySlot','getAllFactoriesModels','deleteFactoryModel','createFactoriesModel']),
        onSubmit(){
            this.factoryModel = data
            this.createFactory(this.factoryModel);
        }
    },
    computed: {
        ...mapState(useFactoriesStore, ['factoriesList','factoryLimit','factorySlot','factoryModelsList']) 
    },
    mounted () {
        this.getAllFactoriesList();
        this.getAllFactoriesModels();
    },
}

</script>
