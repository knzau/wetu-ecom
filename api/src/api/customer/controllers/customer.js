"use strict";

/**
 * customer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::customer.customer", () => ({
  async create(ctx) {
    const { customerId, customerName, customerEmail, customerProducts } =
      ctx.request.body;

    try {
      const customer = await strapi.service("api::customer.customer").create({
        data: {
          customerId,
          customerName,
          customerEmail,
          customerProducts: JSON.stringify(customerProducts),
          purchased_at: new Date(),
        },
      });
      return { customer: customer };
    } catch (error) {
      console.error(error);
    }
  },
}));
