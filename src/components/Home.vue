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
        data() {
            return {
                user: {"username":"3","password":"123456789"},
            }
        },
        methods: {
            ...mapActions(useProfilStore,["me","login"]),
            ...mapActions(useResourceStore,["createResource","getInventory","getResources","getResourcesById"])
        },
        computed: {
            ...mapState(useProfilStore,['profil']) 
        },
        mounted(){
            this.login(this.user)
            this.me();
        }
    }
</script>