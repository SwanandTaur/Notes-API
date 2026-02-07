
// note.route.js

const express = require("express");
const noteModel = require("../models/note.model")

const  noteRouter = express.Router();

noteRouter.post("/",async(req,res)=>{
    const {title, description} = req.body;

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message : "Note Created Successfully",
        note
    })
})

noteRouter.get("/", async(req,res)=>{
    const notes = await noteModel.find();

    res.status(200).json({
        message : "Notes Fetched Successfully",
        notes
    })
})

noteRouter.delete("/:id", async(req, res)=>{
    const id = req.params.id;

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message : "Note Deleted Successfully"
    })
})

noteRouter.patch("/:id", async(req, res)=>{
    const id = req.params.id;
    const {description} = req.body;

    await noteModel.findByIdAndUpdate(id, {description})

    res.status(200).json({
        message : "Note Description Updated Successfully"
    })
})

module.exports = noteRouter;