<template>
    <h1>Inventory</h1>
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
    }
</script>