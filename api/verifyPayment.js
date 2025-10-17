// api/verifyPayment.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { reference } = await req.json();

  if (!reference) {
    return res.status(400).json({ error: "Missing transaction reference" });
  }

  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );
    const data = await response.json();

    if (data.status && data.data.status === "success") {
      return res.status(200).json({
        success: true,
        message: "Payment verified successfully",
        data: data.data,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Payment not verified",
        data: data.data,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
}
