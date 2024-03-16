const mongoose = require("mongoose");

const pesticidescoll=mongoose.Schema(
    {
        cropname:{
            type: String
        },
        pesticidename:{
            type: String
        },
        usedfor:{
            type: String
        },
        manual:{
            type: String
        },
        pesticidetype:{
            type: String
        }
    }
);


module.exports= mongoose.model('pesticidescoll',pesticidescoll)

