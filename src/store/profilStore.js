import { defineStore } from "pinia";
import { http, login, me, signUp } from "../functions/api";

export const useProfilStore = defineStore('profil', {
    state: () => ({
        profil: {
            username: "",
            password: ""
        }
    }),
    actions: {
        async signUp(data){
            await signUp(data).then((res) => {

            })
        },
        async login(data){
            await login(data).then((res) => {
                http.defaults.headers.common['Authorization'] = res.data
            })
        },
        async me(){
            await me().then((res) => {
                this.profil = res.data;
            })
        }
    }
})