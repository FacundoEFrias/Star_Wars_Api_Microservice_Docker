const planets = require("./planets.json")


const axios = require("axios")
const url_conn = "http://database:8004/Planet";

module.exports = {
    list: async () => {
        const { data } = await axios.get(url_conn)
        return data
    },
    create: async (createCharacter) => {
        const  {data}  = await axios.post(url_conn, createCharacter)
        return data
        
    },
    planet : async (id) => {
        const { data } = await axios.get(`${url_conn}/${id}`)
        return data
    },
    deletePlanet: async (id) => {
        const { data } = await axios.delete(`${url_conn}/${id}`)
        return data
    },
    putPlanet: async(id) =>{
        const { data } = await axios.put(`${url_conn}/${id}`)
        return data
    }
}