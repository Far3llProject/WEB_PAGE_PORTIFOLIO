const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  date: String,
  approves: Boolean,
    //relacionamento
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  },
  spot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Spot'
}
  
});


module.exports = mongoose.model('Booking', BookingSchema);