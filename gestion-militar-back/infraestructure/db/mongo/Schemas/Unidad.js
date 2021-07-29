const mongoose = require('mongoose')

const UnidadSchema = mongoose.Schema({

  
    tipoUnidad:{
        type:String,
        lowercase: true,
        enum: {values:['terrestre', 'marítimo', 'aereo'], message: 'Tipo de Unidad no válido'},
        minLength: [2, 'La longitud minima de la unidad es 2'],
    },

    encargado:{
        type: Object,
        required: [true, "Es necesario un encargado para crear una unidad"]
    },

    asignada:{
        type:Boolean,
        lowercase: true,
        
    },

    militares:{
        type:[Object],
        lowercase: true,
          
    },
 
    vehiculos:{
        type:[Object],
        lowercase: true,
    },
    
})

module.exports= mongoose.model('Unidad', UnidadSchema)