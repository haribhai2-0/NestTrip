 const express=require("express");
 const router=express.Router({mergeParams:true});
 const wrapAsync=require("../utils/wrapAsync.js");
 const ExpressError=require("../utils/ExpressError.js");
 const Listing=require('../models/listing.js')
 const Review=require('../models/review.js')
 const {isLoggedIn,validateReview,isReviewAuthor}=require("../middleware.js")
 const reviewcontrollers=require("../controllers/reviews.js")






 // ================= CREATE REVIEW =================
router.post("/",
  isLoggedIn,
  validateReview,
   wrapAsync(reviewcontrollers.createReview));

// ================= DELETE REVIEW =================
router.delete("/:reviewId"
  ,isLoggedIn
  ,isReviewAuthor
 ,wrapAsync(reviewcontrollers.destroyReview));
module.exports=router;
