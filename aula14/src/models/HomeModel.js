const mongoose = require('mongoose');

const HomeSchema = mongoose.Schema({
    titulo : { type: String, require: true },
    descricao : String
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;

class Home {

}

module.exports = Home;