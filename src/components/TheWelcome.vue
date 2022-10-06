<script>
  import { mapActions, mapState } from 'pinia'
import { useProfilStore } from "../store/profilStore";
  export default{
    components:{
      mapActions,
      mapState,
      useProfilStore
    },
    data() {
      return {
        user: {username: '', password: ''}
      }
    },
    methods: {
      setData(){
        let data = {'username': this.user.username, 'password': this.user.password}
        this.user.username = ''
        this.user.password = ''
        return data
      },
      ...mapActions(useProfilStore, ['login']),
    },
    computed: {
      ...mapState(useProfilStore, ['profil']),
    }

  }
</script>

<template>
  <form @submit.prevent="login(setData())">
    <input type="text" name="username" id="username" v-model="user.username">
    <input type="text" name="password" id="password" v-model="user.password">
    <button type="submit">ff</button>
  </form>
</template>

