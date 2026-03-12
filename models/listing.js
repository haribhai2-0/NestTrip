const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js")

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60";

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  description: String,

  image: {
      url:String,
      filename:String,
  },

  price: Number,
  location: String,
  country: String,
  reviews:[
    {
      type:Schema.Types.ObjectId,
      ref:"Review"
    }
  ],
  owner:{
     type:Schema.Types.ObjectId,
      ref:"User"
  },
 geometry: {
    type: {
      type: String, 
      enum: ['Point'], 
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});
listingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
     await this.deleteMany({_id:{$in:listing.reviews}});
  }
})

module.exports = mongoose.model("Listing", listingSchema);
