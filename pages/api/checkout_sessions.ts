import {NextRequest, NextResponse} from "next/server";
import {loadStripe} from "@stripe/stripe-js";


const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: any, res:any) {

  if (req.method === 'POST') {
    try {
      const session = await stripe.redirectToCheckout({
        sessionId: req.body.session_id,
        mode: 'payment',
        success_url: `${req.headers.origin}/payment?success=true`,
        cancel_url: `${req.headers.origin}/payment?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err: any) {
      console.log('ERROR - ', err)
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}