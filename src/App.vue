
<script>
  import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
export default {
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
  background-color: #aebecb;
  margin: 0;
}
</style>
