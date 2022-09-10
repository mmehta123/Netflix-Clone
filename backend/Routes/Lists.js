const router = require("express").Router();
const List = require("../Models/List");
const verify = require("../Middlewares/verifyToken.js");


// create
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
        //     const list = new List(req.body);
        //     const newList = await list.save();
        // return res.status(201).json(newList);
        const list =await List.create(req.body);
        return res.status(201).json(list);
        } catch (error) {
            return res.status(500).json("something went wrong unexpectedly"+error);
        }
    } else {
        return res.status(403).json("You are not allowed");
    }
});
// Delete
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(201).json("The list has been delete...");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});
// GET
router.get("/", verify, async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } },
                ]);
            } else {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery } },
                ]);
            }
        } else {
            list = await List.aggregate([{ $sample: { size: 10 } }]);
        }
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;