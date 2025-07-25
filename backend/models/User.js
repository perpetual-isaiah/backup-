const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  location: {
    latitude: { type: Number, default: null },
    longitude: { type: Number, default: null },
  },
  city: { type: String, default: '' },

  // NEW fields for profile info
  phone: { type: String, default: '' },
  gender: { type: String, enum: ['Male', 'Female', 'Other', ''], default: '' },
  dateOfBirth: { type: Date, default: null },
  profilePhotoUrl: { type: String, default: '' },

  totalRecycled: { type: Number, default: 0 },
  challengesCompleted: { type: Number, default: 0 },
  challengesJoined: [{ type: Schema.Types.ObjectId, ref: 'Challenge' }],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
