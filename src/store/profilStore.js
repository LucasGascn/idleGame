import { defineStore } from "pinia";
import { http, login, me, setAxiosToken, signUp } from "../functions/api";

export const useProfilStore = defineStore('profil', {
    state: () => ({
        profil: {
        }
    }),
    actions: {
        async signUp(data){
            await signUp(data).then((res) => {

            })
        },
        async login(data){
            await login(data).then((res) => {
                setAxiosToken(res.data);
            })
        },
        async me(){
            await me().then((res) => {
                this.profil = res.data;
            })
        }
    }
})