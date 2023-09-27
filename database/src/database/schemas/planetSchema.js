const { Schema } = require("mongoose");
const { ClientError } = require("../../utils/catchError");
const planetSchema = new Schema({
    _id: String,
    name: String,
    rotation_period:{
        type: String,
        validate: (value) => { !isNaN(value) },
        message: "Rotation period must be a number"
    },
    orbital_period: {
        type: String,
        validate: (value) => { !isNaN(value) },
        message: "Orbital period must be a number"
    },
    diameter: {
        type: String,
        validate: (value) => { !isNaN(value) },
        message: "diameter period must be a number"
    },
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: {
        type: String,
        validate: (value) => { !isNaN(value) },
        message: "Surface water period must be a number"
    },
    residents: [{type: String, ref: "Character"}],
    films: [{type: String, ref: "Film"}]
},{ timestamps: true })

planetSchema.statics.list= async function(){
    return await this.find()
    .populate("residents",["_id","name"])
    .populate("films",["_id","title"])
 }
 
 planetSchema.statics.get= async function(id){
     return await this.findById(id)
     .populate("residents",["_id","name"])
     .populate("films",["_id","title"])
 
 }
 
 planetSchema.statics.insert = async function(data){
    const { _id} = data
    const planets = await this.findOne({_id})
   
    return await this.create(data)
 
 }

 planetSchema.statics.update = async function(_id, update){
    const character = await this.findByIdAndUpdate(_id, update,{
         new: true, // Devuelve el documento modificado

    })
    
    return character

}

planetSchema.statics.removee = async function (_id) {
    // return await this.deleteOne({ _id });
    const response = await this.findByIdAndDelete(_id);
    
    return response;
  };




module.exports = planetSchema