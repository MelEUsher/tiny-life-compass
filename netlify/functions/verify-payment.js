const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const session_id = event.queryStringParameters?.session_id;

  if (!session_id) {
    return {
      statusCode: 200,
      body: JSON.stringify({ verified: false }),
    };
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    return {
      statusCode: 200,
      body: JSON.stringify({ verified: session.payment_status === 'paid' }),
    };
  } catch {
    return {
      statusCode: 200,
      body: JSON.stringify({ verified: false }),
    };
  }
};
