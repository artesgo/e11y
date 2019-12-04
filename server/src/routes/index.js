'use strict';

const Path = require('path');
const Mongoose = require('mongoose');
const Joi = require('@hapi/joi');

Mongoose.connect('mongodb://mongo:27017/growcery');

const GrowceryModel = Mongoose.model('grocery', {
  name: String,
  brand: String,
  sale: Number,
  bulk: Number,
  error: Boolean,
  regular: Number,
  grocer: String,
  city: String,
  weight: Number,
  unit: String,
  upc: Number,
  vegan: Boolean,
  packaged: Boolean,
  expiry: Number,
});

module.exports.register = async server => {
  /**
   * serves all files from public
   */
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: { path: '.' },
    },
  });

  server.route({
    method: 'GET',
    path: '/grocery',
    handler: async (request, h) => {
      try {
        var item = await GrowceryModel.find().exec();
        return h.response(item);
      } catch (error) {
        return h.response(error).code(500);
      }
    },
  });

  server.route({
    method: 'GET',
    path: '/grocery/{id}',
    handler: async (request, h) => {
      try {
        var item = await GrowceryModel.findById(request.params.id).exec();
        return h.response(item);
      } catch (error) {
        return h.response(error).code(500);
      }
    },
  });

  server.route({
    method: 'PUT',
    path: '/grocery/{id}',
    options: {
      // validate: {
      //   payload: {
      //     name: Joi.string().required(),
      //     price: Joi.number().required()
      //   },
      //   failAction: (request, h, error) => {
      //     return error.isJoi
      //       ? h.response(error.details[0]).takeover()
      //       : h.response(error).takeover();
      //   }
      // }
    },
    handler: async (request, h) => {
      try {
        var result = await GrowceryModel.findByIdAndUpdate(
          request.params.id,
          request.payload,
          { new: true }
        );
        return h.response(result);
      } catch (error) {
        return h.response(error).code(500);
      }
    },
  });

  /**
   * only for Admin
   */
  server.route({
    method: 'DELETE',
    path: '/grocery/{id}',
    handler: async (request, h) => {
      try {
        var result = await GrowceryModel.findByIdAndDelete(request.params.id);
        return h.response(result);
      } catch (error) {
        return h.response(error).code(500);
      }
    },
  });

  server.route({
    method: 'POST',
    path: '/grocery',
    options: {
      // validate: {
      //   payload: {
      //     name: Joi.string().required(),
      //     price: Joi.number().required()
      //   },
      //   failAction: (request, h, error) => {
      //     return error.isJoi
      //       ? h.response(error.details[0]).takeover()
      //       : h.response(error).takeover();
      //   }
      // }
    },
    handler: async (request, h) => {
      try {
        var item = new GrowceryModel(request.payload);
        var result = await item.save();
        return h.response(result);
      } catch (error) {
        return h.response(error).code(500);
      }
    },
  });
};
