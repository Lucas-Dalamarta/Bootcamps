import axios from "axios"

const url = 'https://localhost:3000/api'

export const api = axios.create({ 
  baseURL: url 
})