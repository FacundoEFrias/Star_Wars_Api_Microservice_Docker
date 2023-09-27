const {Schema} = require("mongoose")
const { ClientError } = require("../../utils/catchError");

const filmSchema = new Schema({
    _id: String,
    title: {
        type: String,
        trim: true, // Elimina espacios en blanco al principio y al final
        maxLength: 100  // Define una longitud máxima para el nombre
    },
    opening_crawl: String,
    director:{
        type: String,
        trim: true, // Elimina espacios en blanco al principio y al final
        maxLength: 100  // Define una longitud máxima para el nombre
    },
    producer: {
        type: String,
        trim: true, // Elimina espacios en blanco al principio y al final
        maxLength: 100  // Define una longitud máxima para el nombre
    },
    release_date: Date,
    characters: [{type: String, ref: "Character"}],
    planets: [{type: String, ref: "Planet"}]
},
{ timestamps: true })

filmSchema.statics.list= async function(){
    return await this.find()
    .populate("characters",["_id","name"])
    .populate("planets",["_id","name"])
 }
 
 filmSchema.statics.get= async function(id){
     return await this.findById(id)
     .populate("characters",["_id","name"])
     .populate("planets",["_id","name"])
 
 }
 
 filmSchema.statics.insert = async function(data){
    const { _id} = data
   const films = await this.findOne({_id})
   
   return await this.create(data)
 
 }

 filmSchema.statics.update = async function(_id, update){
    const character = await this.findByIdAndUpdate(_id, update,{
         new: true, // Devuelve el documento modificado

    })
    
    return character

}

filmSchema.statics.removee = async function (_id) {
    // return await this.deleteOne({ _id });
    const response = await this.findByIdAndDelete(_id);
    
    return response;
  };

module.exports = filmSchema