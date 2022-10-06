<template>
    <h1>Inventory</h1>

    <div class="profilMe">
        {{profil}}
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useProfilStore } from '../store/profilStore';
import { useResourceStore } from '../store/resourceStore';

    export default{
        methods: {
            ...mapActions(useProfilStore,["me"]),
            ...mapActions(useResourceStore,["createResource","getInventory","getResources","getResourcesById"])
        },
        computed: {
            ...mapState(useProfilStore,['profil']) 
        },
        mounted(){
            this.me();
        }
    }
</script>