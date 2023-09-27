const {Schema} = require("mongoose")
const { ClientError } = require("../../utils/catchError");
const characterSchema = new Schema({
    _id: String,
    name: {
        type: String,
        required: true,
        trim: true, // Elimina espacios en blanco al principio y al final
        maxLength: 100  // Define una longitud máxima para el nombre
    },
    height: {
        type: String,
        validate: (value) => { !isNaN(value) },
        message: "Height must be a number"
    },
    mass: {
        type: String,
        validate: (value) => { !isNaN(value) },
        message: "Mass must be a number"
    },
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: {
        type: String,
        validate: {
            validator: function (value) {
              return /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[0-1])\/\d{4}$/.test(value);
            },
            message: 'El formato de fecha de cumpleaños no es válido.',
          },
    },
    gender: {
        type: String,
        enum: {
        values: ['male', 'female', "unknown"],
      }},
    homeworld: {type: String, ref: "Planet"},
    films: [{type: String, ref: "Film"}]
},
{ timestamps: true })

characterSchema.statics.list= async function(){
   return await this.find()
   .populate("homeworld",["_id","name"])
   .populate("films",["_id","title"])
}

characterSchema.statics.get= async function(id){
    return await this.findById(id)
    .populate("homeworld",["_id","name"])
    .populate("films",["_id","title"])

}

characterSchema.statics.insert = async function(data){
     return await this.create(data)
}

characterSchema.statics.update = async function(_id, update){
    const character = await this.findByIdAndUpdate(_id, update,{
         new: true, // Devuelve el documento modificado
    })
    return character

}

characterSchema.statics.removee = async function (_id) {
    // return await this.deleteOne({ _id });
    const response = await this.findByIdAndDelete(_id);
    
    return response;
  };

module.exports = characterSchema;