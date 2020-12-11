const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema=mongoose.Schema;

let usuarioSchema = new Schema({
    nombre:{
        type:String,
        // required:true
        require:[true,'El nombre es obligatorio']
    },
    email:{
        type:String,
        require:[true,'El correo es obligatorio']
    },
    password:{
        type:String,
        require:[true,'La contraseña es obligatoria']
    },
    google:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        default:'USER_ROLE'
    },
    img:{
        type:String
    },
    estado:{
        type:Boolean,
        default:true
    }

})

usuarioSchema.plugin(uniqueValidator,{
    message:'{PATH} debe ser unico'
})

module.exports=mongoose.model('Usuario',usuarioSchema);