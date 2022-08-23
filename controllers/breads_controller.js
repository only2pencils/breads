const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread.js");

// INDEX
breads.get("/", (req, res) => {
  res.send(Bread);
});

// SHOW
breads.get("/:arrayIndex", (req, res) => {
  res.send(Bread[req.params.arrayIndex]);
});

module.exports = breads;

// const express = require("express");
// const breads = express.Router();
// const Bread = require("../models/bread.js");

// //INDEX
// breads.get("/", (req, res) => {
//   Bread.find().then((foundBread) => {
//     res.render("Index", {
//       bread: foundBread,
//       title: "Index Page",
//     });
//   });
//   // res.send(Bread);
// });

// // NEW
// breads.get("/new", (req, res) => {
//   res.render("new");
// });

// // EDIT
// breads.get("/:indexArray/edit", (req, res) => {
//   res.render("edit", {
//     bread: Bread[req.params.indexArray],
//     index: req.params.indexArray,
//   });
// });

// //SHOW
// breads.get("/:arrayIndex", (req, res) => {
//   if (Bread[req.params.arrayIndex]) {
//     res.render("Show", {
//       bread: Bread[req.params.arrayIndex],
//       index: req.params.arrayIndex,
//     });
//   } else {
//     res.render("404");
//   }
// });

// // CREATE
// // breads.post("/", (req, res) => {
// //   console.log(req.body);
// //   if (req.body.hasGluten === "on") {
// //     req.body.hasGluten = "true";
// //   } else {
// //     req.body.hasGluten = "false";
// //   }
// //   Bread.push(req.body);
// //   res.redirect("/breads");
// // });

// // CREATE
// breads.post("/", (req, res) => {
//   if (!req.body.image) {
//     req.body.image = undefined;
//   }
//   if (req.body.hasGluten === "on") {
//     req.body.hasGluten = true;
//   } else {
//     req.body.hasGluten = false;
//   }
//   Bread.create(req.body);
//   res.redirect("/breads");
// });

// // DELETE
// breads.delete("/:indexArray", (req, res) => {
//   Bread.splice(req.params.indexArray, 1);
//   res.status(303).redirect("/breads");
// });

// module.exports = breads;
