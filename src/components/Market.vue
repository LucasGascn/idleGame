
<template>
    <h1>MarketBoard</h1>
    <div v-for="(offer, index) in marketList"
    :key = "index" >
    {{offer}}
    <button @click="buyOffer(index)"></button>
    </div>
    

    <form @submit.prevent="onSubmit">
        <div class="seller">
            <!-- infos des trucs à vendre ( type ?, quantité ?, prix ?) -->
        </div>
    </form>
</template>


<script>
    export {
        
    }
</script>
