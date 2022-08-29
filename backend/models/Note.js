const mongoose = require('mongoose');
const { Schema } = mongoose;

// Making Schema
const NotesSchema = new Schema({
    user:{   //to find which user notes is this
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: "General" 
    },
    date:{
        type: Date,
        default: Date.now 
    },
  });

  //exported the schema
  module.exports = mongoose.model('notes', NotesSchema);