import Image from "next/image";
import Navbar from "@/components/navbar";

const networkItems = [
  {
    number: "01",
    title: "CEOs & Business Leaders",
    description:
      "Connecting qualified executives and business leaders where direct communication can create meaningful commercial opportunities.",
  },
  {
    number: "02",
    title: "Family Offices",
    description:
      "Introducing qualified parties to selected private commercial opportunities through trusted relationships and established networks.",
  },
  {
    number: "03",
    title: "Institutional Investors",
    description:
      "Connecting qualified institutional representatives with relevant commercial counterparties and opportunities requiring direct engagement.",
  },
  {
    number: "04",
    title: "Principals & Owners",
    description:
      "Introducing qualified parties to the individuals behind significant businesses, commercial mandates and opportunities.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Assess",
    description: "Understand the opportunity, requirements and relevant counterparties.",
  },
  {
    number: "02",
    title: "Connect",
    description: "Create the right introduction with clarity and purpose.",
  },
  {
    number: "03",
    title: "Engage",
    description: "Enable direct communication between qualified parties.",
  },
  {
    number: "04",
    title: "Advance",
    description: "Move the opportunity toward a defined commercial outcome.",
  },
];

const standards = [
  {
    title: "Discretion",
    description:
      "Sensitive commercial information and private communications are handled with a high degree of confidentiality.",
  },
  {
    title: "Relevance",
    description: "Every introduction has a clear commercial purpose.",
  },
  {
    title: "Access",
    description:
      "We prioritize meaningful relationships and qualified counterparties over mass-market exposure.",
  },
  {
    title: "Professionalism",
    description:
      "Clear communication, disciplined engagement and respect for the interests of every party.",
  },
];

function HeroGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Gold glow top-right */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/[0.07] blur-[120px]" />
      {/* Gold glow bottom-left */}
      <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/[0.03] blur-[100px]" />
    </div>
  );
}

function ProcessConnector() {
  return (
    <div className="hidden lg:flex items-center justify-center">
      <div className="w-full h-px bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ───── HERO ───── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-16">
        <HeroGrid />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#D4AF37] text-[11px] sm:text-[12px] tracking-[0.3em] uppercase mb-8 font-medium">
            Private Commercial Opportunities &middot; Strategic Introductions
          </p>
          <h1 className="text-[clamp(2.8rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.02em] mb-8">
            <span className="text-gradient-gold">WE MAKE</span>
            <br />
            <span className="text-[#F1F1F1]">MARKETS MOVE.</span>
          </h1>
          <p className="text-[#8B8B96] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-12 font-normal">
            KINGMAKERS operates within private commercial networks where
            relationships, timing and decision-making shape outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-[#D4AF37] text-[#0B0B12] px-8 py-3.5 text-[13px] font-semibold tracking-[0.1em] uppercase hover:bg-[#E2BE4D] transition-colors"
            >
              Start the Conversation
            </a>
            <a
              href="#network"
              className="border border-[#D4AF37]/25 text-[#D4AF37] px-8 py-3.5 text-[13px] font-semibold tracking-[0.1em] uppercase hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ───── STATEMENT ───── */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-px bg-[#D4AF37]/40 mx-auto mb-10" />
          <p className="text-2xl sm:text-3xl md:text-4xl font-light text-[#8B8B96] leading-relaxed tracking-wide">
            WHERE{" "}
            <span className="text-gradient-gold font-bold">ACCESS</span>{" "}
            BECOMES{" "}
            <span className="text-gradient-gold font-bold">OPPORTUNITY</span>.
          </p>
          <div className="w-12 h-px bg-[#D4AF37]/40 mx-auto mt-10" />
        </div>
      </section>

      {/* ───── NETWORK ───── */}
      <section id="network" className="py-16 sm:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-[11px] tracking-[0.3em] uppercase mb-3 font-medium">
              The Network
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Built Around Decision-Makers
            </h2>
            <p className="text-[#8B8B96] mt-4 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              The strength of a network is not measured by its size. It is
              measured by relevance, trust and access to the people who can
              make decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {networkItems.map((item) => (
              <div
                key={item.title}
                className="group bg-[#111119] border border-white/[0.04] p-7 sm:p-8 hover:border-[#D4AF37]/20 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#D4AF37]/25 text-2xl font-bold tabular-nums">
                    {item.number}
                  </span>
                  <div className="flex-1 h-px bg-[#D4AF37]/10" />
                </div>
                <h3 className="text-lg font-semibold text-[#F1F1F1] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-[#8B8B96] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PRIVATE OPPORTUNITIES ───── */}
      <section className="py-16 sm:py-20 px-6 relative overflow-hidden">
        {/* Subtle architectural visual */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#D4AF37]/[0.02] blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)",
              backgroundSize: "120px 120px",
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[#D4AF37] text-[11px] tracking-[0.3em] uppercase mb-4 font-medium">
            Private Commercial Opportunities
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
            Not Everything of Value
            <br />
            Reaches the Open Market
          </h2>
          <p className="text-[#8B8B96] text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Some opportunities move through trust, relationships, timing and
            direct dialogue rather than conventional public channels.
            KINGMAKERS works within private commercial networks to identify
            relevant opportunities and bring qualified parties together.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[13px] tracking-[0.08em]">
            <span className="text-[#D4AF37] font-medium">
              Private by Nature
            </span>
            <span className="text-[#D4AF37]/20">·</span>
            <span className="text-[#D4AF37] font-medium">
              Selective by Design
            </span>
            <span className="text-[#D4AF37]/20">·</span>
            <span className="text-[#D4AF37] font-medium">
              Discreet by Standard
            </span>
          </div>
        </div>
      </section>

      {/* ───── PROCESS ───── */}
      <section id="process" className="py-16 sm:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-[11px] tracking-[0.3em] uppercase mb-3 font-medium">
              From Connection to Outcome
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold tracking-tight leading-tight max-w-3xl mx-auto">
              A valuable introduction is not measured by the meeting itself.
              <br className="hidden sm:block" />
              {" "}
              <span className="text-[#D4AF37]">
                It is measured by what happens after.
              </span>
            </h2>
          </div>
          {/* Horizontal Process */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-y-10 lg:gap-y-0 items-start">
            {processSteps.map((step, i) => {
              const isLast = i === processSteps.length - 1;
              return (
                <>
                  <div className="text-center">
                    <span className="text-[#D4AF37]/20 text-3xl sm:text-4xl font-bold tabular-nums block mb-3">
                      {step.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#8B8B96] text-sm leading-relaxed max-w-[200px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                  {!isLast && <ProcessConnector />}
                </>
              );
            })}
          </div>
          <p className="text-center mt-12 text-[#8B8B96] text-[13px] tracking-[0.05em]">
            Right People. Right Opportunity. Right Timing. Right Outcome.
          </p>
        </div>
      </section>

      {/* ───── STANDARDS ───── */}
      <section id="standards" className="py-16 sm:py-20 px-6 bg-[#0E0E16]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-[11px] tracking-[0.3em] uppercase mb-3 font-medium">
              Our Standard
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Precision Over Volume
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {standards.map((item, i) => (
              <div
                key={item.title}
                className={`p-8 sm:p-10 ${
                  i < 2 && i % 2 === 0
                    ? "md:border-r border-white/[0.04]"
                    : ""
                } ${i < 2 ? "md:border-b border-white/[0.04]" : ""} ${
                  i === 1 ? "md:border-b border-white/[0.04]" : ""
                }`}
              >
                <div className="w-8 h-px bg-[#D4AF37]/40 mb-6" />
                <h3 className="text-xl font-bold text-[#F1F1F1] mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#8B8B96] text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FOUNDER ───── */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#D4AF37] text-[11px] tracking-[0.3em] uppercase mb-3 font-medium">
            Founder & CEO
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
            Ouahid Kachkachi
          </h2>
          <p className="text-[#8B8B96] text-base leading-relaxed">
            Leads KINGMAKERS with a focus on commercial introductions, private
            opportunities and strategic relationships. Building relationships
            that create access, alignment and momentum.
          </p>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <section id="contact" className="py-20 sm:py-24 px-6 bg-[#0E0E16] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#D4AF37]/[0.03] blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
            The Right Connection.
            <br />
            <span className="text-[#D4AF37]">
              The Right Opportunity.
            </span>
          </h2>
          <p className="text-[#8B8B96] text-base leading-relaxed mb-12 max-w-lg mx-auto">
            For CEOs, Family Offices, Institutional Investors, Principals,
            Business Leaders and Strategic Partners seeking a qualified
            commercial introduction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971585930397"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#D4AF37] text-[#0B0B12] px-8 py-3.5 text-[13px] font-semibold tracking-[0.1em] uppercase hover:bg-[#E2BE4D] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:contact@kingmakerscb.com"
              className="flex items-center justify-center gap-3 border border-[#D4AF37]/25 text-[#D4AF37] px-8 py-3.5 text-[13px] font-semibold tracking-[0.1em] uppercase hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="py-10 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          {/* Top row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
            <div>
              <Image
                src="/logo.png"
                alt="KINGMAKERS"
                width={140}
                height={50}
                className="object-contain h-9 w-auto mb-2 opacity-80"
              />
              <p className="text-[#8B8B96] text-sm">Commercial Brokers</p>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] text-[#8B8B96]/60 tracking-[0.15em] uppercase mb-1">Navigate</span>
                {[
                  { label: "Network", href: "#network" },
                  { label: "Process", href: "#process" },
                  { label: "Standards", href: "#standards" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[13px] text-[#8B8B96] hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[11px] text-[#8B8B96]/60 tracking-[0.15em] uppercase mb-1">Contact</span>
                <a href="https://wa.me/971585930397" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#8B8B96] hover:text-[#D4AF37] transition-colors">
                  WhatsApp
                </a>
                <a href="mailto:contact@kingmakerscb.com" className="text-[13px] text-[#8B8B96] hover:text-[#D4AF37] transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
          {/* Bottom row */}
          <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-[#8B8B96]/60">
            <p>&copy; 2026 KINGMAKERS. All rights reserved.</p>
            <p>
              Dubai, UAE &middot; License No. 1641211
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
