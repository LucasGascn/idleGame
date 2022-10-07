<script>
  import { mapActions, mapState } from 'pinia'
import { signUp } from '../functions/api';
import { useProfilStore } from "../store/profilStore";
  export default{
    components:{
      mapActions,
      mapState,
      useProfilStore
    },
    data() {
      return {
        user: {'username': '', 'password': ''},
        userS: {'username': '', 'password': ''}

      }
    },
    methods: {
      setData(){
        let data = {'username': this.user.username, 'password': this.user.password}
        this.user.username = ''
        this.user.password = ''
        this.$router.push('/factory');
        return data
      },
      setDataS(){
        let data = {'username': this.userS.username, 'password': this.userS.password}
        return data
      },
      ...mapActions(useProfilStore, ['login']),
    },
    computed: {
      ...mapState(useProfilStore, ['profil']),
    },
    mounted(){
      /* his.login(this.user) */
    }

  }
</script>

<template>
  <div class="homePage">

      <div v-if="profil.id>0" class="profilMe">
        <h3>Profil</h3>
        <div>
          Username : {{profil.username}} <br/>
          Income : {{profil.income}} <br/>
          Number of factories owned : {{profil.factories.length}}
        </div>
    </div>

  <form class="loginForm" v-if="profil.id ==null" @submit.prevent="login(setData())">
    <h3>Connexion</h3>
    <input type="text" placeholder="Username" name="username" id="username" v-model="user.username">
    <input type="text" placeholder="Password" name="password" id="password" v-model="user.password">
    <button type="submit">Login</button>
  </form>
  <form class="loginForm" v-if="profil.id == null " @submit.prevent="signUp(setDataS())" style="margin-left: 10px;">
    <h3>Sign Up</h3>
    <input type="text" placeholder="Username" name="username" id="username" v-model="userS.username">
    <input type="text" placeholder="Password" name="password" id="password" v-model="userS.password">
    <button type="submit">Login</button>
  </form>
</div>

</template>

<style>
  .loginForm, .profilMe{
    align-items: center;
    display: flex;
    flex-direction: column;

    background-color: #748695;
    border-radius: 15px;
    padding: 0 20px 20px 20px;
  }
  
.homePage{
  display: flex;
  justify-content: center;
}
  input, button, label{
    margin:7px 0;
  }

</style>

