"use strict";

/**
 *  homepage controller
 */

// const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::homepage.homepage");

const schema = require(`../content-types/homepage/schema.json`);
const createPopulatedController = require("../../../helpers/populate");

module.exports = createPopulatedController("api::homepage.homepage", schema);
