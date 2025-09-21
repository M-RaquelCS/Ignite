"use server";

import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";

export const getProduct = async (productId: string) => {
	const product = await stripe.products.retrieve(productId, {
		expand: ["default_price"],
	});
	const price = product.default_price as Stripe.Price;
	const response = {
		id: product.id,
		name: product.name,
		imageUrl: product.images[0],
		price: new Intl.NumberFormat("pt-BR", {
			style: "currency",
			currency: "BRL",
		}).format((price.unit_amount ?? 0) / 100),
		description: product.description,
		defaultPriceId: price.id,
	};

	return response;
};
