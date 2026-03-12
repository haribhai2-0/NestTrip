 const express=require("express");
 const router=express.Router();
 const Listing=require('../models/listing.js')
 const wrapAsync=require("../utils/wrapAsync.js");
 const listingcontrollers=require("../controllers/listing.js")
 const multer  = require('multer')
 const {storage}=require("../cloudconfig.js")
const upload = multer({ storage })
 
 const {isLoggedIn, isOwner,validateListing}=require("../middleware.js")



 router
 .route("/")
    .get( wrapAsync(listingcontrollers.index))
    .post(
   isLoggedIn,
   upload.single("listing[image]"),
    validateListing,
    
   
   
    wrapAsync(listingcontrollers.creasteListing,)
    
 );


 //New Route 
 router.get("/new",
    isLoggedIn,
    listingcontrollers.renderNewform)

 router
 .route("/:id")
 .get(
      wrapAsync(listingcontrollers.showListing))

 .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
      wrapAsync(listingcontrollers.updateListing))

 .delete(
    isLoggedIn
    ,isOwner
    ,wrapAsync(listingcontrollers.destroyListing))





 //edit route
 router.get("/:id/edit"
    ,isLoggedIn
    ,isOwner
    ,wrapAsync(listingcontrollers.renderEditform))



 module.exports=router;