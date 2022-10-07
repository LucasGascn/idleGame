
<template>
    
    <h1>Factories</h1>

    <div class="factoryPage">

        <div v-for="(factory,index) in factoriesList"
        :key = "index"
        class="factory">
            <h3>{{factory.model.resource.name}}</h3>
            <div class="divImg"><img :src=factory.model.resource.image_url></div>
            <div class="factoryContent">
                <div>niveau : {{factory.level}}</div>
                <div>prod : {{factory.model.generate_per_minute}} / min </div>
                <div>Factory id : {{factory.id}}</div>
                <div> Upgrade cost : {{factory.next_upgrade_cost + " " + factory.model.upgrade_resource.name}}</div>
                <button @click="factoryUpgrade(factory.id)">Upgrade pour {{ factory.level ** factory.model.upgrade_coef}}</button>
                <button @click="deleteFactory(factory.id)">Delete</button>
            </div>
        </div>
    </div>

    <div class="factoryPageBot">
        <div class="maxFactDiv">
            <h4>
                Maximum de Factory : {{this.factoryLimit.factory_limit }}
            </h4>
            <button @click="buyNewFactorySlot">Augmenter la limite</button>
        </div>


        <form @submit.prevent="onSubmit">
            <div class="facOptions">
                <h4>
                    Sélectionner le type de factory
                </h4>
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
            <button type="submit">Créer Factory</button>
        </form>
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

        .factoryPageBot{
            display: flex;
            margin-top: 60px;
        }

    .maxFactDiv, .factoryPageBot form{
        border: solid #748695 ;
        padding: 0 20px 20px 20px;
        margin: 20px;
        display: flex;
        flex-direction: column;
        align-items: stretch;

    }

    .factoryPage{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    }
    .factoryPage button, .factoryPageBot button{
        height: 30px;
    }

        .divImg{
            padding: 0 30px;
            display: flex;

        }

        .divImg img{
            max-width: 200px;
            align-self: center;
        }

        .factoryContent{
            display: flex;
            flex-direction: column;
            justify-content: center;

        }

        .factory{
            display: flex;
            background: #748695;
            border-radius: 15px;
            padding: 20px;
            margin: 20px;
            width: 40%;
            justify-content: center;
        }

        .factory h3{
            align-self: flex-start;
        }
        .facOptions{
        }
        .facListing{
            display: flex;
            flex-wrap: wrap;
        }
        .facListing div{
            width: 30%;
        }
    </style>