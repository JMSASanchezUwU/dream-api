import mongoose from 'mongoose';

const dreamSchema = new mongoose.Schema({
  person: {
    type: String,
    required: true,
    enum: ['Jose', 'Dalia']
  },
  title: {
    type: String,
    required: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export default mongoose.model('Dream', dreamSchema);