const express=require('express')
const router=express.Router()
const {signup,signIn,profile,edit,imageadd }=require('../controllers/usercontroller')


router.route("/usersignup").post(signup)

router.route("/usersignIn").post(signIn)

router.route("/userprofile/:token").get(profile)
router.route("/useredit/:token").patch(edit)
router.route("/userimageadd/:token").patch(imageadd)



router.route("/").get((req,res)=>{
    res.send("Hello Home Route")
})


module.exports=router