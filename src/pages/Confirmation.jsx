import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Confirmation() {
  const [searchParams] = useSearchParams();
  const service = searchParams.get("service");
  const ref = searchParams.get("ref");
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    async function verify() {
      try {
        const res = await fetch("/api/verifyPayment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reference: ref }),
        });
        const data = await res.json();
        setVerified(data.success);
      } catch {
        setVerified(false);
      }
    }
    verify();
  }, [ref]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-slate-950 text-white p-8">
      <h1 className="text-3xl md:text-5xl font-black mb-4">
        {verified ? "Payment Successful 🎉" : "Verifying Payment..."}
      </h1>
      {verified && (
        <p className="text-lg md:text-xl text-slate-300">
          Thank you for purchasing the <span className="text-purple-400">{service}</span> package.<br />
          A confirmation email will be sent to you shortly.
        </p>
      )}
    </section>
  );
}
