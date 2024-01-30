const distance = require("./Distance.js");

exports.result = (req,res) =>{
    let unit=req.query.unit;
    let value=req.query.value;
    console.log(`Unit entered: ${unit}`,`Value entered: ${value}`);
    res.status(200).send(distance.calculate(unit,value).toString());
}
