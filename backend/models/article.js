const mongoose = require("mongoose");

const articlecoll = mongoose.Schema(
    {
        username:{
            type: String
        },
        blogtitle:{
            type: String
        },
        blogcontent:{
            type: String
        }
    }
);

module.exports= mongoose.model('articlecoll',articlecoll)