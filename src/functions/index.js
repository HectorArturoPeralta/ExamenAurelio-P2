// functions/index.js
const functions = require('firebase-functions');
const paypal = require('@paypal/checkout-server-sdk');

const clientId = functions.config().paypal.client_id;
const secretKey = functions.config().paypal.secret_key;

const env = new paypal.core.SandboxEnvironment(clientId, secretKey);
const client = new paypal.core.PayPalHttpClient(env);

exports.paypalCreateOrder = functions.https.onCall(async (data, context) => {
  let request = new paypal.orders.OrdersCreateRequest();
  request.requestBody({
    "intent": "CAPTURE",
    "purchase_units": [
      {
        "amount": {
          "currency_code": "MXN",
          "value": data.amount,  // Asegúrate de enviar la cantidad desde el cliente
        },
      },
    ],
  });

  const response = await client.execute(request);
  return response.result;
});

exports.paypalHandleOrder = functions.https.onCall(async (data, context) => {
  const orderId = data.orderId;
  let request = new paypal.orders.OrdersCaptureRequest(orderId);
  request.requestBody({});
  const response = await client.execute(request);
  return response.result;
});
