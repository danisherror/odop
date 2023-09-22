const express=require('express')
const router=express.Router()
const {signup,signIn,profile,edit,imageadd }=require('../controllers/admincontroller')


router.route("/adminsignup").post(signup)

router.route("/adminsignIn").post(signIn)

router.route("/adminprofile/:token").get(profile)
router.route("/adminedit/:token").patch(edit)
router.route("/adminimageadd/:token").patch(imageadd)



router.route("/").get((req,res)=>{
    res.send("Hello Home Route")
})


module.exports=router