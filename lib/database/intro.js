const mongoose = require('mongoose');
const IntroSchema = new mongoose.Schema({
id: { type: String,required: true },
reason: { type: String, default: "No Reason" },
date: { type:  String, default: Date.now},
intro: { type: String, default: "" }
})
const Intro =mongoose.model("intro", IntroSchema)
module.exports = { intro }
