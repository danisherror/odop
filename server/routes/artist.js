const express=require('express')
const router=express.Router()
const {signup,signIn,profile,artistimage,artistedit }=require('../controllers/artistController')


router.route("/signup").post(signup)

router.route("/signIn").post(signIn)
router.route("/profile/:token").get(profile)
router.route("/artistimage/:token").patch(artistimage)
router.route("/artistedit/:token").patch(artistedit)

router.route("/").get((req,res)=>{
    res.send("Hello Home Route")
})


module.exports=router