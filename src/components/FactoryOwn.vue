<script>

    export default{
  
        
        data(){
            return{

                woodFactory:[],
                stealFactory:[],
                goldFcatory:[],

                factoryNmb:null,
                FactoryPrice:45,
                coin:50,
                activeBuyButton:true
            }

        },
        computed:{
            addFactory(){
                
                if (this.factoryNmb === null){
                    return "vous n'avez pas encore acheté d'usine"
                }else{
                    return "vous avez " + this.factoryNmb + " usine"

                }

            }
        },
        methods:{
            buyFacto(){
                    this.factoryNmb++
                    this.coin-=this.FactoryPrice
                    console.log(this.coin);
                    if(this.coin<this.FactoryPrice){
                    this.activeBuyButton=false
                   return
                }
            },
            getMonney(){
               
                this.coin+=5
                console.log(this.coin);
                if(this.coin>=this.FactoryPrice){
                    this.activeBuyButton=true
                    return
                }
            }
        }
    }
</script>

<template>
    <div class="factory" >
        <button class="{disabledButton:!activeBuyButton}"
        :disabled="!this.activeBuyButton"
        v-on:click="buyFacto()">
        achetez une usine
        </button>
        <p>{{addFactory}}</p>

        <p>récupère de l'argent</p>
        <button v-on:click="getMonney()">pick up money</button>
      <i>
        <slot name="icon"></slot>
      </i>
      <div class="details">
        <h3>
          <slot name="heading"></slot>
        </h3>
        <slot></slot>
      </div>
    </div>
  </template>

  <style>
    .disabledButton{
    background-color: #d8d8d8;
    cursor: not-allowed;
}
  </style>