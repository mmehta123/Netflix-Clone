const router = require("express").Router();
const Movie = require("../Models/Movie");
const verify = require("../Middlewares/verifyToken.js");


// create
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const movie = new Movie(req.body);
            const savedMovie = await movie.save();
            return res.status(201).json(savedMovie);
        } catch (error) {
            return res.status(500).json("something went wrong");
        }
    } else {
        return res.status(403).json("You are not allowed");
    }
});
// Update
router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            return res.status(201).json(updatedMovie);
        } catch (error) {
            return res.status(500).json("something went wrong");
        }
    } else {
        return res.status(403).json("You are not allowed");
    }
});
//DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id);
            return res.status(200).json("movie deleted successfully");
        } catch (error) {
            return res.status(500).json("something went wrong");
        }
    } else {
        return res.status(403).json("You are not allowed to delete");
    }
});
// Get One
router.get("/find/:id", verify, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(500).json("something went wrong");
    }
});
// get all
router.get("/", verify, async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(500).json("something went wrong");
    }
});
// Get Random
router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } }, { $sample: { size: 1 } }
            ]);
        }else{
            {
                movie = await Movie.aggregate([
                    { $match: { isSeries: false } }, { $sample: { size: 1 } }
                ]);
            }
        }
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(500).json("something went wrong");
    }
});

module.exports = router;