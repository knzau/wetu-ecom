("use strict");
const stripe = require("stripe")(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products, userId } = ctx.request.body;
    console.log(ctx.request.body);
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title.toUpperCase(),
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.qty,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["US", "CA"] },
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.CLIENT_URL + "?success=true",
        cancel_url: process.env.CLIENT_URL + "?success=false",
        line_items: lineItems,
      });

      await strapi.service("api::order.order").create({
        data: {
          products: JSON.stringify(products),
          stripeId: session.id,
          buyer: { userId: userId },
        },
      });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
  async findProductsByUser(ctx) {
    try {
      // Get the user ID from the request parameters or authentication
      const { userId } = ctx.params;
      console.log({ userId });
      // Fetch orders and populate products
      const orders = await strapi.services.order.find({
        userId: userId,
      });
      console.log({ orders });
      // Extract and flatten product data from orders
      const products = orders.flatMap((order) => order.products);

      ctx.send(products);
    } catch (error) {
      console.error(error);
      ctx.response.status = 500;
      ctx.send({ error: "Internal Server Error" });
    }
  },
}));
