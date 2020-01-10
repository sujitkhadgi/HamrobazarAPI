var dbConfig= require('../DatabaseConfig');
var Sequelize = dbConfig.Sequelize;
var sequelize = dbConfig.sequelize;

//defining schema
var items = sequelize.define('item',
{
  id:{type: Sequelize.INTEGER,
  primaryKey: true,
autoIncrement: true,

},
name:{
  type: Sequelize.TEXT,
  allowNull: false
},
imgId:{
  type: Sequelize.INTEGER,
  allowNull: false
},
price:{
  type: Sequelize.INTEGER,
  allowNull: false
},
condition:{
  type: Sequelize.TEXT,
  allowNull: false
},
type:{
  type: Sequelize.TEXT,
  allowNull: false
}

},{timestamps:false, freezeTableName:true, tableName: 'itemsTable'});

//creating table
items.sync({force: false})
.then(function (result)
{console.log("items Table created successfully");
})
 .catch(function (err)
 {console.log(err);
})
module.exports=items;