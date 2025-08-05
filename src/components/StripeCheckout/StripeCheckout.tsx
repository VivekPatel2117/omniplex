"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutButton = () => {
 const handleClick = async () => {
  const res = await fetch("/api/stripe", { method: "POST" });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Stripe API error:", errorText);
    return;
  }

  const data = await res.json();
  console.log("Checkout session data:", data); // 🔍 Debug

  const stripe = await stripePromise;
  await stripe?.redirectToCheckout({ sessionId: data.id });
};

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: "#ffffff",
        color: "#111827",
        padding: "6px 24px",
        border: "1px solid #e5e7eb",
        borderRadius: "25px",
        fontSize: "16px",
        fontWeight: 600,
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor = "#f9fafb";
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor = "#ffffff";
      }}
    >
      Buy Pro Plan -10 INR
    </button>
  );
};

export default CheckoutButton;
