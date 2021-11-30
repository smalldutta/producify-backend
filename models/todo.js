var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var todoSchema = new Schema({
    description: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Todo', todoSchema);