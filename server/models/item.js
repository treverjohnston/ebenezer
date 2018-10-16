var  models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	url: { type: String, required: true },
	cost: { type: String, required: true },
	img: { type: String, default: "https://res.cloudinary.com/treverscloud/image/upload/v1509471691/inspire/25.jpg" },


	// Relations

    creatorId: { type: ObjectId, ref: models.user.name, required: true }
});

module.exports = mongoose.model(models.item.name, schema);