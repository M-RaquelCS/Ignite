"use server";

import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";

export const getAllDataSuccessCheckout = async (
	session_id: string | string[] | undefined,
) => {
	if (typeof session_id !== "string") {
		throw new Error("Invalid session_id: must be a string");
	}

	const session = await stripe.checkout.sessions.retrieve(session_id, {
		expand: ["line_items", "line_items.data.price.product"],
	});

	const costumerName = session.customer_details?.name ?? "Unknown Customer";
	const product = session.line_items?.data?.[0]?.price?.product as
		| Stripe.Product
		| undefined;

	if (!product) {
		throw new Error("Product information is missing or invalid");
	}

	const response = {
		costumerName,
		product: {
			name: product.name,
			imageUrl: product.images[0],
		},
	};

	return response;
};
