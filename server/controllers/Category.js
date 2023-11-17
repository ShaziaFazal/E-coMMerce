const Category = require("../models/Category");

const getAllCategories =async(req,res)=>{
    try {
        const response = await Category.find();
        res.status(200).send(response);
    } catch (error) {
        res.status(404).send({error: error});
    }
}

const postCategory = async(req,res)=>{
    const {category} = req.query;
    try {
        const addedCat = new Category({category: category});
        await addedCat.save();
        res.status(200).send(addedCat);
    } catch (error) {
        
        res.status(500).send({error: error});
    }
}

module.exports ={getAllCategories,postCategory}