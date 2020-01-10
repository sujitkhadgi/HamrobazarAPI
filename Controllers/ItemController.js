
var items = require('../Models/ItemModel');






//select All
function GetAllRecent(req,res,next)
{
    items.findAll({
        where:{type:"recent"},
        
    }).then(function (result)
    {
        res.json(result);
        console.log("done");
    })
    .catch(function(err)
    {
        res.json({status: 505, message:'something wrong'});
        console.log("failed");
    })
}

function GetAllTrending(req,res,next)
{
    items.findAll({
        where:{type:"trend"},
        
    }).then(function (result)
    {
        res.json(result);
        console.log("done");
    })
    .catch(function(err)
    {
        res.json({status: 505, message:'something wrong'});
        console.log("failed");
    })
}







//exporting functions
module.exports={  GetAllRecent,GetAllTrending};