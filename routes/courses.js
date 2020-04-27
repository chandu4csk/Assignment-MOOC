const express = require('express');
const router = express.Router();
const Course = require('../models/Courses');


// router.get('/', async(req,res)=>{

//     try {
//         const course = await Course.find();
//         console.log(course);
//         res.json(course);
//     } catch(err){
//         res.json({message:err});
//     }
// })



router.get('/',
 async (req, res) => {  
    console.log(req.body)
    Course.find((err, result) => {
        console.log(result);
        if (err) {
          res.status(500).json({ message: err.message });
        } else if (!result) {
          res.status(404).json({ message: "Course is not found" });
        } else {
          res.status(200).json({ courses: result,});
        }
      });
})

module.exports = router;




