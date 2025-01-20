import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  content:{
    type: String
  }
},{
  timestamps: true
})

const Note = mongoose.model("Note", noteSchema);

export default Note;