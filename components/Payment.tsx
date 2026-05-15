import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pillBtn } from "@/lib/constants";

const paymentMethods = [
  { name: "Cash", sub: "Walk-in payments" },
  { name: "Visa", sub: "Credit & Debit" },
  { name: "MasterCard", sub: "Credit & Debit" },
  { name: "GCash", sub: "E-wallet" },
  { name: "Maya", sub: "E-wallet" },
  { name: "QR Ph", sub: "Instapay" },
];

export function Payment() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-ink to-ink/90 text-cream relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, #c9a84c 0px, transparent 40%), radial-gradient(circle at 20% 80%, #c9a84c 0px, transparent 40%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs font-semibold text-gold uppercase tracking-[0.25em] mb-4">
            Easy Payments
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            We accept your <span className="text-shine">favorite</span> way to pay.
          </h2>
          <p className="mt-5 text-cream/70 text-lg leading-relaxed">
            Cash, credit, debit, and all the major e-wallets. Whatever&apos;s easiest for you.
          </p>

          <Button
            asChild
            className={`${pillBtn} mt-10 gap-3 bg-gold text-ink shadow-lg shadow-gold/20 hover:bg-gold-light`}
          >
            <a href="tel:09106505388">
              <Phone className="w-5 h-5" />
              Call to book — 0910 650 5388
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {paymentMethods.map((p) => (
            <Card
              key={p.name}
              className="gap-0 rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 text-cream backdrop-blur-sm transition-all hover:bg-white/10 hover:ring-gold/40"
            >
              <div className="text-lg font-bold">{p.name}</div>
              <div className="text-xs text-cream/50 mt-1">{p.sub}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
