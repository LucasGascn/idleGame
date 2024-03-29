import axios from "axios";

export const http = axios.create({
   baseURL: 'https://apigame.co',
/*    baseURL: 'http://localhost:3000',*/
});

export function setAxiosToken(token){
    http.defaults.headers.common['Authorization'] = "Bearer " + token;
}

//-------factory-limit----
export function buyFactorySlot(data){
    return http.post('/users/buy-factory-limit', data);
}

export function getFactoryLimit(){
    return http.get('/users/factory-limit');
}
//------------------------

//------factories---------

export function createFactory(data){
    return http.post('/factories', data);
}

export function getAllFactories(){
    return http.get('/factories');
}

export function getFactoryById(id){
    return http.get('/factories/' + id);
}

export function deleteFactory(id){
    return http.delete('/factories/' + id);
}

export function upgradeFactory(id){
    return http.post('/factories/' + id + '/levelup');
}
//------------------------

//-------models-----------
export function getFactoriesModels(){
    return http.get('/factories/models');
}

export function createFactoryModel(data){
    return http.post('/factories/models', data);
}

export function deleteFactoryModel(id){
    return http.delete('/factories/models/' + id);
}
//------------------------

export function getInventory(){
    return http.get('/inventory/my');
}

//-----auth--------------
export function signUp(data){
    return http.post('/auth/signup', data);
}

export function login(data){
    return http.post('/auth/login', data);
}

export function me(){
    return http.get('/auth/me');
}
//------------------------

//-------resources--------
export function getResources(){
    return http.get('/resources');
}

export function createResource(data){
    return http.post('/resources', data);
}

export function getResourcesById(id){
    return http.get('/resources/' + id);
}
//------------------------

//-----------trades-------
export function createOffer(data){
    return http.post('/trades', data);
}

export function getTradeById(id){
    return http.get('/trades/' + id);
}

export function deleteTrade(id){
    return http.delete('/trades/' + id);
}

export function getAllTrades(){
    return http.get('/trades/all');
}

export function buyOffer(){
    return http.post('/trades/buy')
}
export function getMyTrades(){
    return http.get('/trades/my')
}
//------------------------


