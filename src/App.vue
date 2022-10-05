
<script>
  import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
export default{
    components: {
    RouterLink,
    RouterView,
    NavBar
}
}

</script>

<template>
  
  <header>
    
    <div>
      <nav>
        <NavBar/>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style >

</style>
