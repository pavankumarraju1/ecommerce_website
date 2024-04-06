const modelFile = require('../model/modelFile.js');
const model = modelFile.model;

//create
exports.createModel = (req, res) => { 
    const doc = new model(req.body) 
    doc.save().then(()=>{
        res.status(201).send("<h1>created..</h1>")
    }).catch((err)=>{
        res.status(400).json(err);
    })
    //for creating data try catch is not prefarable since the error msg is not working properly
    // try {
    //     doc.save(req.body)
    //     res.status(201).send("<h1>created..</h1>")
    // }
    // catch (err) {
    //     res.json(err);
    // }

};


//getAllproducts
exports.getAllModels = async (req, res) => {
    const result = await model.find();
    res.json(result);
}

//getProductById
exports.getModelById = async (req, res) => {
    const id = req.params.id;
    const result = await model.findById(id);
    res.json(result);
}

//update the whole document
exports.updateModel = async (req, res) => {
    const id = req.params.id;
    // const result = model.findOneAndReplace(id,req.body,{returnDocument:'after'}).then(()=>{
    //     res.json(result)
    // }).catch((err)=>res.json(err));
    try {
        const result = await model.findOneAndReplace({ _id: id }, req.body, { returnDocument: "after" });
        res.json(result)
    }
    catch (err) {
        res.json(err);
    }
}

//patch the document
exports.updateSpecificModel = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await model.findOneAndUpdate({ _id: id }, req.body, { returnDocument: "after" });
        res.json(result)
    }
    catch (err) {
        res.json(err);
    }
}


//delete an document
exports.deleteModel = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await model.findByIdAndDelete({ _id: id });
        res.json(result)
    }
    catch (err) {
        res.json(err);
    }
}