
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
  <body>
    
  <header>
    
    <div>
      <nav>
        <NavBar/>
      </nav>
    </div>
  </header>

  <RouterView />
</body>

</template>

<style >
body{
  background-color: #232d37;
  margin: 0;
}
</style>
