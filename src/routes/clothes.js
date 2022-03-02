"use strict";

const express = require("express");
const { clothes } = require("../models/index.js");

const router = express.Router();

router.post("/clothes", createClothes);
router.get("/clothes", getAllClothes);
router.get("/clothes/:id", getOneClothe);
router.put("/clothes/:id", updateClothe);
router.delete("/clothes/:id", deleteClothe);

async function createClothes(req, res) {
  let newclothes = req.body;
  console.log(req.body);
  let newclothesinDB = await clothes.createRecord(newclothes); // model.create({ ClotheName: "", MinutesToPrepare: "" })
  res.status(201).json(newclothesinDB);
}

async function getAllClothes(req, res) {
  let allclothes = await clothes.readAllRecords()
  res.json(allclothes);
}

async function getOneClothe(req, res) {
  let fid = parseInt(req.params.id);
  let Clothe = await clothes.readRecord();
  res.json(Clothe);
}

async function updateClothe(req, res) {
  let cid = parseInt(req.params.id);
  let updatedClothe = await clothes.updateRecord();
  let retrievedClothe = await clothes.findOne({ where: { id: cid } });
  res.status(201).json(retrievedClothe);
}

async function deleteClothe(req, res) {
  let cid = parseInt(req.params.id);
  let deleted = await clothes.deleteRecord();
  deleted
    ? res.status(201).send("deleted successfully")
    : res.status(500).send("something went wrong");

  // let deleteditem = clothes.findOne({ where: { id: cid } });

}
//status 204 will not work

module.exports = router;
