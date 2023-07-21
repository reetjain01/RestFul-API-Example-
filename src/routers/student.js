const express = require('express');
const router = new express.Router();
const Student = require('../models/students');

module.exports = router;

router.post("/students", async (req, res) => {

    try{
      const user = new Student(req.body);
      const createUser = await user.save();
      res.status(201).send(createUser);
    }
    catch(err) {
      res.status(400).send(err);
    }
  })
  
  
  
  // You do not need express.json() and express.urlencoded() for GET requests or DELETE requests. We only need it for POST and PUT req.
  
  // express.json() is a method inbuilt in express to recognize the incoming Request object as a JSON object. This method is called a middleware in your application using the code : app.use(express.json());
  
  // get the api url using GET method
  
  router.get("/students", async (req , res) => {
    try{
      const studentsData = await Student.find();
      res.status(200).send(studentsData);
    }
    catch(err) {
        res.status(400).send(err);
      }
  })
  
  // get the individual students data using id
  
  router.get("/students/:id", async (req , res) => {
    try{
      const _id = req.params.id;
      const studentData = await Student.findById({_id});
  
      if(!studentData){
        return res.status(404).send("Student not found");
      }
      else{
        res.send(studentData);
      }
  
    }
    catch(err) {
          res.status(500).send(err);
        }
  });
  
  // get the individual students data using name
  
  router.get("/students/:name", async (req , res) =>{
    try{
      const name = req.params.name;
      const studentDataName = await Student.find({name});
      if(!studentDataName){
        return res.status(404).send(err);
      }
      else{
        res.send(studentDataName);
      }
    }
    catch(err) {
            res.status(500).send(err);
          }
  });
  
  
  // update the individual students data using id
  
  router.patch("/students/:id", async (req , res) =>{
    try{
      const _id = req.params.id;
     const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
      new: true
     }); 
     res.send(updateStudents);
    }
    catch(err) {
          res.status(500).send(err);
        }
  });
  
  
  // Delete the individual students data using id
  
  router.delete("/students/:id", async (req, res) => {
    try{
      const deleteStudent = await Student.findByIdAndDelete(req.params.id);
      if(!req.params.id){
        return res.status(404).send("Student not found");
      }
      else{
        res.send(deleteStudent);
      }
    }
    catch(err) {
            res.status(500).send(err);
          }
  });
  