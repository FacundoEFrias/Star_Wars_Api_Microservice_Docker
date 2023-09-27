const films = require("./films.json")
const axios = require("axios")
const url_conn = "http://database:8004/Film";

module.exports = {
    list: async () => {
        const { data } = await axios.get(url_conn)
        return data
    },
    create: async (createCharacter) => {
        const { data } = await axios.post(url_conn, createCharacter)
        return data.response
        
    },
    film : async (id) => {
        const { data } = await axios.get(`${url_conn}/${id}`)
        return data
    },
    deleteFilm: async (id) => {
        const { data } = await axios.delete(`${url_conn}/${id}`)
        return data
    },
    putFilm: async(id) =>{
        const { data } = await axios.put(`${url_conn}/${id}`)
        return data
    }
}