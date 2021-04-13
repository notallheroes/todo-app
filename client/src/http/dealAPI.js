import {$authHost, $host } from "./index"
import jwt_decode from "jwt-decode"

export const createDeal = async (title, description, deadline,  priority, status, responsible) => {
    const {data} = await $authHost.post("api/deal/", {title, description, deadline, status, priority, responsible})
    
    return data
}
export const updateDeal = async (id, title, description, deadline, priority, status, responsible) => {
    const {data} = await $authHost.put(`api/deal/${id}`, {id, title, description, deadline, priority, status, responsible})
    return data
}
export const deleteDeal = async (id) => {
    const { data } = await $authHost.delete(`api/deal/${id}`, {id})
    return data
}


export const getDeal = async () => {
    const {data} = await $authHost.get("api/deal/")
    
    return data
}