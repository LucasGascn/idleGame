<template>
    <h1>Home</h1>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useProfilStore } from '../store/profilStore';
import { useResourceStore } from '../store/resourceStore';

    export default{
        data() {
            return {
                user: {},
            }
        },
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
