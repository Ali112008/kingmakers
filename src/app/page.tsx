import Image from "next/image";

const navLinks = [
  { label: "Network", href: "#network" },
  { label: "Process", href: "#process" },
  { label: "Standards", href: "#standards" },
  { label: "Contact", href: "#contact" },
];

const networkItems = [
  {
    title: "CEOs & Business Leaders",
    description:
      "Connecting qualified executives and business leaders where direct communication can create meaningful commercial opportunities.",
  },
  {
    title: "Family Offices",
    description:
      "Introducing qualified parties to selected private commercial opportunities through trusted relationships and established networks.",
  },
  {
    title: "Institutional Investors",
    description:
      "Connecting qualified institutional representatives with relevant commercial counterparties and opportunities requiring direct engagement.",
  },
  {
    title: "Principals & Owners",
    description:
      "Introducing qualified parties to the individuals behind significant businesses, commercial mandates and opportunities.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Assess",
    description:
      "Understand the opportunity, requirements and relevant counterparties.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Create the right introduction with clarity and purpose.",
  },
  {
    number: "03",
    title: "Engage",
    description:
      "Enable direct communication between qualified parties.",
  },
  {
    number: "04",
    title: "Advance",
    description:
      "Move the opportunity toward a defined commercial outcome.",
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
    description:
      "Every introduction has a clear commercial purpose.",
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0F0F18] via-[#0A0A12] to-[#08080D]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F18]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="KINGMAKERS Commercial Brokers"
            width={160}
            height={60}
            className="object-contain h-10 w-auto"
          />
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-gold transition-colors tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-gold text-dark px-5 py-2 text-sm font-semibold tracking-wide uppercase hover:bg-gold-light transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6">
            Strategic Introductions &middot; Private Commercial Opportunities &middot; Institutional Connections
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gradient-gold">
            WE MAKE MARKETS
            <br />
            MOVE.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            KINGMAKERS operates within private commercial networks where
            relationships, timing and decision-making shape outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gold text-dark px-8 py-3 font-semibold tracking-wide uppercase hover:bg-gold-light transition-colors"
            >
              Start the Conversation
            </a>
            <a
              href="#network"
              className="border border-gold/40 text-gold px-8 py-3 font-semibold tracking-wide uppercase hover:bg-gold/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-white/5" />
      </div>

      {/* Tagline */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl md:text-4xl font-light text-foreground leading-relaxed">
            Where <span className="text-gradient-gold font-semibold">Access</span>{" "}
            Becomes{" "}
            <span className="text-gradient-gold font-semibold">Opportunity</span>.
          </p>
        </div>
      </section>

      {/* Network Section */}
      <section id="network" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              The Network
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Built Around Decision-Makers
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              The strength of a network is not measured by its size. It is
              measured by relevance, trust and access to the people who can
              make decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {networkItems.map((item) => (
              <div
                key={item.title}
                className="bg-[#0E0E17] border border-white/5 p-8 hover:border-gold/30 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Opportunities */}
      <section className="py-20 px-6 bg-[#0E0E17]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Private Commercial Opportunities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Everything of Value Reaches the Open Market
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Some opportunities move through trust, relationships, timing and
            direct dialogue rather than conventional public channels.
            KINGMAKERS works within private commercial networks to identify
            relevant opportunities and bring qualified parties together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
            <span className="text-gold font-medium tracking-wide">
              Private by Nature
            </span>
            <span className="text-dark-border">|</span>
            <span className="text-gold font-medium tracking-wide">
              Selective by Design
            </span>
            <span className="text-dark-border">|</span>
            <span className="text-gold font-medium tracking-wide">
              Discreet by Standard
            </span>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              From Connection to Outcome
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              A valuable introduction is not measured by the meeting itself.
              <br className="hidden md:block" />
              <span className="text-gold">It is measured by what happens after.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="relative bg-[#0E0E17] border border-white/5 p-8 text-center"
              >
                <span className="text-4xl font-bold text-gold/20">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-gold mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 space-y-1">
            <p className="text-muted-foreground text-sm tracking-wide">
              Right People. Right Opportunity. Right Timing. Right Outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section id="standards" className="py-20 px-6 bg-[#0E0E17]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Our Standard
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Precision Over Volume
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((item) => (
              <div key={item.title} className="text-center px-4">
                <div className="w-12 h-px bg-gold mx-auto mb-6" />
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Founder & CEO
          </p>
          <h2 className="text-3xl font-bold mb-6">Ouahid Kachkachi</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Leads KINGMAKERS with a focus on commercial introductions, private
            opportunities and strategic relationships. Building relationships
            that create access, alignment and momentum.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#0E0E17]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Private Enquiries
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Right Connection.
            <br />
            <span className="text-gold">The Right Opportunity.</span>
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            For CEOs, Family Offices, Institutional Investors, Principals,
            Business Leaders and Strategic Partners seeking a qualified
            commercial introduction.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="https://wa.me/971585930397"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gold text-dark px-8 py-3 font-semibold tracking-wide uppercase hover:bg-gold-light transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:contact@kingmakerscb.com"
              className="flex items-center justify-center gap-3 border border-gold/40 text-gold px-8 py-3 font-semibold tracking-wide uppercase hover:bg-gold/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 bg-[#08080D]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 KINGMAKERS. All rights reserved.</p>
          <p>
            KINGMAKERS Commercial Brokers &middot; Dubai, UAE &middot; License
            No. 1641211
          </p>
        </div>
      </footer>
    </div>
  );
}
