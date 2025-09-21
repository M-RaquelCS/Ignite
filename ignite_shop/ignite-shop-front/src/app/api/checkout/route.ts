"use server";

import { NextResponse } from "next/server";
import { stripe } from "@/_lib/stripe";
import { env } from "@/utils/env";

export async function POST(request: Request) {
	try {
		const priceId = "price_1S9IuAELiwmpmgL1FGZBXQIb";
		const successUrl = `${env.NEXT_URL}/success`;
		const cancelUrl = `${env.NEXT_URL}/`;

		const checkoutSession = await stripe.checkout.sessions.create({
			success_url: successUrl,
			cancel_url: cancelUrl,
			mode: "payment",
			line_items: [{ price: priceId, quantity: 1 }],
		});

		return NextResponse.json(
			{ checkoutUrl: checkoutSession.url },
			{ status: 201 },
		);
	} catch (error) {
		console.error("Stripe checkout error:", error);
		return NextResponse.json(
			{ error: "Erro interno ao criar sessão de checkout" },
			{ status: 500 },
		);
	}
}
