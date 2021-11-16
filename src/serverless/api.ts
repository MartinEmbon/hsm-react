import axios from "axios"

//https://webhook.site/2f78533c-8efd-42e6-ab51-7dd059b5df15
//https://sistemadeagendamento-san5v.ondigitalocean.app/
export const api = axios.create({
    baseURL:"https://sistemadeagendamento-san5v.ondigitalocean.app/"
})
/*
export const api = axios.create({
    baseURL:"https://webhook.site/2f78533c-8efd-42e6-ab51-7dd059b5df15"
})
*/