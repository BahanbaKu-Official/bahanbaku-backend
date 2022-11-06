const { MIDTRANS_SANDBOX_SERVER_KEY: AUTH_TOKEN } = process.env;

module.exports = {
  recipientName: 'BAHANBAKU.CO',
  sandboxApiUrl: 'https://api.sandbox.midtrans.com/',
  requestHeader: {
    Authorization: "Basic " + AUTH_TOKEN,
    "Content-Type":"application/json",
    "Accept":"application/json"
  }
}