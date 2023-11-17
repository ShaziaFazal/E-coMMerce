const mongoose = require("mongoose");

const categories = new mongoose.Schema({
    category: {
        type: String,
        required:true
    }
})
const Category = mongoose.model("Category", categories);
module.exports = Category;