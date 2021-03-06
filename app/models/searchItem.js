'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shortid = require('shortid');

var SearchItem = new Schema({
		_id: {
		    type: String,
		    'default': shortid.generate
		},
		keyword: String
		},
		{
		    timestamps: true
		});

module.exports = mongoose.model('', SearchItem);
