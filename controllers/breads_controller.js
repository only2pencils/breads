const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread.js");

// // INDEX RK
breads.get("/", (req, res) => {
  res.render("index", {
    breads: Bread,
    title: "Index Page",
  });
  //   res.send(Bread);
});

// SHOW
breads.get("/:arrayIndex", (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render("Show", {
      bread: Bread[req.params.arrayIndex],
    });
  } else {
    res.send("404");
  }
});

//   Bread.find().then((foundBreads) => {
//     res.render("Index", {
//       breads: foundBreads,
//       title: "Index Page",
//     });
//   });
//   // res.send(Bread);
// });

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

// breads.get("/data/seed", (req, res) => {
//   Bread.insertMany([
//     {
//       name: "Rye",
//       hasGluten: true,
//       image:
//         "https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
//     },
//     {
//       name: "French",
//       hasGluten: true,
//       image:
//         "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
//     },
//     {
//       name: "Gluten Free",
//       hasGluten: false,
//       image:
//         "https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
//     },
//     {
//       name: "Pumpernickel",
//       hasGluten: true,
//       image:
//         "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
//     },
//   ]).then((createdBreads) => {
//     res.redirect("/breads");
//   });
// });

// // NEW RK
// breads.get("/new", (req, res) => {
//   res.render("new");
// });

// // EDIT
// breads.get("/:indexArray/edit", (req, res) => {
//   Bread.findById(req.params.id).then((foundBread) => {
//     res.render("edit", {
//       bread: foundBread,
//     });
//   });
// });

// // SHOW RK
// breads.get("/:id", (req, res) => {
//   Bread.findById(req.params.id)
//     .then((foundBread) => {
//       const bakedBy = foundBread.getBakedBy();
//       console.log(bakedBy);
//       res.render("show", {
//         bread: foundBread,
//       });
//     })
//     // BONUS '404'
//     .catch((err) => {
//       res.send("404");
//     });
// });

// // UPDATE
// breads.put("/:arrayIndex", (req, res) => {
//   if (req.body.hasGluten === "on") {
//     req.body.hasGluten = true;
//   } else {
//     req.body.hasGluten = false;
//   }
//   Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
//     (updatedBread) => {
//       console.log(updatedBread);
//       res.redirect(`/breads/${req.params.id}`);
//     }
//   );
// });

// // DELETE //WHAT ROUTES SHOULD I ADD THIS TO?
// breads.delete("/:indexArray", (req, res) => {
//   Bread.findOneAndDelete(req.params.id).then((deletedBread) => {
//     res.status(303).redirect("/breads");
//   });
// });

// module.exports = breads;

// SHOW RK old
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

// Bread.splice(req.params.indexArray, 1);
// res.status(303).redirect("/breads");

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

module.exports = breads;
