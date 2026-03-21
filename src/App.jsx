import { useState, useEffect, useRef } from "react";

const COPY = {
  nav: {
    brand: "SA247",
    links: ["Packages", "How It Works", "Our Record", "Testimonials", "FAQ"],
    cta: "Get Picks Now",
  },
  hero: {
    eyebrow: "10 Years. Every Sport. Every Day.",
    headline: "Stop Guessing.\nStart Winning.",
    subheadline: "Analytics-driven picks across every major sport. 365 days a year. Bet on numbers, not teams.",
    cta: "See All Packages",
    secondary: "Get a Free Pick →",
    social: { quote: "Have made me over $3,000 this month!", name: "Freddy Leon", tag: "SA247 Member" },
  },
  stats: [
    { number: "10+", label: "Years Picking" },
    { number: "365", label: "Days a Year" },
    { number: "15", label: "Plays Per Day" },
    { number: "$3K+", label: "Member Wins" },
  ],
  values: [
    { icon: "📊", title: "Analytics. Not Instinct.", body: "We build power rankings and generate our own lines for every game. We only play when the numbers show undeniable value." },
    { icon: "🏆", title: "10 Years of Picks.", body: "Most services disappear in a season. We've been making profitable plays for over a decade across every major sport." },
    { icon: "🎯", title: "Every Sport. Every Day.", body: "NFL, NBA, MLB, NCAA, March Madness — 2 to 15 value plays per day, 365 days a year. Never a slow season." },
    { icon: "💵", title: "Start for $5.", body: "Try our Hot Streak Tips for $5 and see what our system produces before you commit to anything bigger." },
  ],
  packages: [
    { name: "Hot Streak Tips", price: "From $5", tag: "Best for new members", highlight: false, description: "The lowest risk entry into the SA247 system. See our picks before you commit to anything bigger.", cta: "Try for $5" },
    { name: "Parlay Package", price: "From $99.99", tag: "", highlight: false, description: "Carefully constructed parlays built from our power rankings. Big risk, bigger reward.", cta: "Get Parlays" },
    { name: "Premium Plays", price: "From $129.99", tag: "Most popular", highlight: true, description: "Our core daily pick package. Straight plays, spreads, and money line value across multiple sports every day.", cta: "Get Premium" },
    { name: "VIP Package", price: "From $129.99", tag: "", highlight: false, description: "Everything in Premium plus priority access and direct line to our analysts. The full SA247 experience.", cta: "Go VIP" },
    { name: "VIP Weekend", price: "$149.99", tag: "This weekend", highlight: false, description: "Friday through Sunday. Our highest volume play window across NFL, NBA, and college sports.", cta: "Get Weekend" },
    { name: "March Madness 2026", price: "$199.99", tag: "Limited spots", highlight: false, description: "Full bracket analytics, daily picks through every round, and power rankings for every team in the field.", cta: "Get Package" },
  ],
  testimonials: [
    { quote: "Have made me over $3,000 this month!", name: "Freddy Leon", sport: "Multi-sport" },
    { quote: "They are the real deal. I cash daily with these guys.", name: "Jose Lopez", sport: "Daily bettor" },
    { quote: "Consistency goes, these guys consistently win. MLB has been unbelievable this month!", name: "Steve Simonian", sport: "MLB" },
    { quote: "I was skeptical before I bought anything, but when the picks started hitting I was so happy. The accuracy and quality is amazing.", name: "ES", sport: "Verified member" },
    { quote: "Sports Analytics has the fire picks everyday!", name: "Chris Henderson", sport: "Daily bettor" },
  ],
  process: [
    { step: "01", title: "Power Rankings", body: "We build our own power rankings for every sport based on statistical performance across every relevant category." },
    { step: "02", title: "Generate Lines", body: "Based on our rankings we generate what the line on every game should be. Not what Vegas says — what our numbers say." },
    { step: "03", title: "Find the Value", body: "When our line and Vegas's line diverge significantly, that's a value play. That gap is where profit lives." },
    { step: "04", title: "You Get the Play", body: "Clear, actionable picks sent directly to you. Which team, which line, how much edge we see. Simple." },
  ],
  cta: {
    headline: "Ready to Start Winning?",
    body: "Join thousands of bettors who stopped guessing and started profiting.",
    button: "See All Packages",
    free: "Get a Free Pick First",
  },
  footer: {
    tagline: "Bet on numbers, not teams.",
    links: ["Packages", "How It Works", "FAQ", "Sports Betting 101", "Press", "Contact Us", "Terms & Conditions"],
    legal: "© 2026 Sports Analytics 24/7. All Rights Reserved. Must be 21+ and in a legal betting jurisdiction.",
  },
};

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,255,136,0.1)" : "none",
      transition: "all 0.4s ease",
      padding: "1.1rem 2.5rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "#00FF88", letterSpacing: "0.06em" }}>
        {COPY.nav.brand}
      </div>
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }} className="nav-desktop">
        {COPY.nav.links.map(l => (
          <li key={l}>
            <a href="#" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.8rem", letterSpacing: "0.08em", fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#00FF88"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.7)"}
            >{l}</a>
          </li>
        ))}
      </ul>
      <button style={{
        fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", letterSpacing: "0.1em",
        background: "#00FF88", color: "#0a0a0a", border: "none",
        padding: "0.6rem 1.5rem", cursor: "pointer", borderRadius: "2px",
        transition: "all 0.2s",
      }} className="nav-desktop"
        onMouseEnter={e => { e.target.style.background = "#00e07a"; e.target.style.transform = "translateY(-1px)"; }}
        onMouseLeave={e => { e.target.style.background = "#00FF88"; e.target.style.transform = "translateY(0)"; }}
      >{COPY.nav.cta}</button>
      <button onClick={() => setOpen(!open)} className="nav-mobile-btn" style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 0, flexDirection: "column" }}>
        {[0,1,2].map(i => <div key={i} style={{ width: 22, height: 2, background: "#00FF88", marginBottom: i < 2 ? 5 : 0 }} />)}
      </button>
      {open && (
        <div style={{ position: "fixed", inset: 0, background: "#0a0a0a", zIndex: 200, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem" }}>
          <button onClick={() => setOpen(false)} style={{ position: "absolute", top: "1.5rem", right: "2rem", background: "none", border: "none", color: "#00FF88", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
          {COPY.nav.links.map(l => (
            <a key={l} href="#" onClick={() => setOpen(false)} style={{ color: "#fff", textDecoration: "none", fontSize: "2rem", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}>{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  return (
    <section style={{
      minHeight: "100vh", background: "#0a0a0a", position: "relative",
      overflow: "hidden", display: "flex", alignItems: "center",
    }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "20%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)" }} />
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{
            position: "absolute", right: `${10 + i * 15}%`, top: "50%", transform: "translateY(-50%)",
            width: `${200 + i * 150}px`, height: `${200 + i * 150}px`,
            border: "1px solid rgba(0,255,136,0.04)", borderRadius: "50%",
          }} />
        ))}
      </div>
      <div style={{ maxWidth: 900, padding: "8rem 2.5rem 6rem", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.75rem",
          background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.2)",
          padding: "0.4rem 1rem", borderRadius: "2px", marginBottom: "2rem",
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00FF88" }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#00FF88", letterSpacing: "0.1em", textTransform: "uppercase" }}>{COPY.hero.eyebrow}</span>
        </div>
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(4rem, 10vw, 8rem)",
          fontWeight: 400, color: "#fff", lineHeight: 0.95,
          letterSpacing: "0.02em", marginBottom: "1.5rem",
          whiteSpace: "pre-line",
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s ease 0.1s",
        }}>
          {COPY.hero.headline.split("\n")[0]}
          <br />
          <span style={{ color: "#00FF88" }}>{COPY.hero.headline.split("\n")[1]}</span>
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem",
          color: "rgba(255,255,255,0.6)", lineHeight: 1.7,
          maxWidth: 520, marginBottom: "2.5rem",
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s ease 0.2s",
        }}>{COPY.hero.subheadline}</p>
        <div style={{
          display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "10rem",
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s ease 0.3s",
        }}>
          <button style={{
            fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", letterSpacing: "0.1em",
            background: "#00FF88", color: "#0a0a0a", border: "none",
            padding: "0.85rem 2.5rem", cursor: "pointer", borderRadius: "2px",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.target.style.background = "#00e07a"; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.target.style.background = "#00FF88"; e.target.style.transform = "translateY(0)"; }}
          >{COPY.hero.cta}</button>
          <button style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem",
            background: "transparent", color: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(255,255,255,0.15)", padding: "0.85rem 2rem",
            cursor: "pointer", borderRadius: "2px", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.target.style.borderColor = "#00FF88"; e.target.style.color = "#00FF88"; }}
            onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.15)"; e.target.style.color = "rgba(255,255,255,0.7)"; }}
          >{COPY.hero.secondary}</button>
        </div>
        <div style={{
          display: "inline-block", background: "rgba(0,255,136,0.06)", marginBottom: "5rem",
          border: "1px solid rgba(0,255,136,0.15)", padding: "1.25rem 1.5rem",
          borderRadius: "4px", borderLeft: "3px solid #00FF88",
          opacity: visible ? 1 : 0, transition: "all 0.9s ease 0.4s",
        }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#fff", fontStyle: "italic", margin: "0 0 0.5rem", lineHeight: 1.5 }}>"{COPY.hero.social.quote}"</p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#00FF88", margin: 0 }}>— {COPY.hero.social.name} · {COPY.hero.social.tag}</p>
        </div>
      </div>
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        background: "rgba(0,255,136,0.04)",
        borderTop: "1px solid rgba(0,255,136,0.1)",
      }} className="stats-bar">
        {COPY.stats.map((s, i) => (
          <div key={i} style={{
            padding: "1.5rem", textAlign: "center",
            borderRight: i < 3 ? "1px solid rgba(0,255,136,0.08)" : "none",
          }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", color: "#00FF88", lineHeight: 1 }}>{s.number}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.35rem" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Values() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ background: "#0f0f0f", padding: "6rem 2.5rem", borderTop: "1px solid rgba(0,255,136,0.08)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00FF88", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.75rem" }}>Why SA247</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#fff", lineHeight: 1 }}>What Makes Us Different</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: "rgba(0,255,136,0.06)" }}>
          {COPY.values.map((v, i) => (
            <div key={i} style={{
              background: "#0f0f0f", padding: "2.5rem 2rem",
              opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: `all 0.7s ease ${i * 0.1}s`,
            }}
              onMouseEnter={e => e.currentTarget.style.background = "#141414"}
              onMouseLeave={e => e.currentTarget.style.background = "#0f0f0f"}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>{v.icon}</div>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", color: "#fff", letterSpacing: "0.04em", marginBottom: "0.75rem", lineHeight: 1.1 }}>{v.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.87rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ background: "#0a0a0a", padding: "7rem 2.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00FF88", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.75rem" }}>Choose Your Edge</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#fff", lineHeight: 1 }}>Pick Your Package</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {COPY.packages.map((p, i) => (
            <div key={i} style={{
              border: p.highlight ? "1px solid #00FF88" : "1px solid rgba(255,255,255,0.08)",
              padding: "2rem", position: "relative", background: p.highlight ? "rgba(0,255,136,0.03)" : "#0a0a0a",
              opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: `all 0.7s ease ${i * 0.1}s`, borderRadius: "2px",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#00FF88"; e.currentTarget.style.background = "rgba(0,255,136,0.03)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = p.highlight ? "#00FF88" : "rgba(255,255,255,0.08)"; e.currentTarget.style.background = p.highlight ? "rgba(0,255,136,0.03)" : "#0a0a0a"; }}
            >
              {p.tag && (
                <div style={{
                  position: "absolute", top: "-1px", right: "1.5rem",
                  background: "#00FF88", color: "#0a0a0a",
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem",
                  fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                  padding: "0.3rem 0.75rem",
                }}>{p.tag}</div>
              )}
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", color: "#fff", letterSpacing: "0.04em", marginBottom: "0.5rem", lineHeight: 1 }}>{p.name}</h3>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#00FF88", marginBottom: "1rem", lineHeight: 1 }}>{p.price}</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "1.5rem" }}>{p.description}</p>
              <button style={{
                width: "100%", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem",
                letterSpacing: "0.1em", background: p.highlight ? "#00FF88" : "transparent",
                color: p.highlight ? "#0a0a0a" : "#00FF88",
                border: "1px solid #00FF88", padding: "0.75rem",
                cursor: "pointer", borderRadius: "2px", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.target.style.background = "#00FF88"; e.target.style.color = "#0a0a0a"; }}
                onMouseLeave={e => { e.target.style.background = p.highlight ? "#00FF88" : "transparent"; e.target.style.color = p.highlight ? "#0a0a0a" : "#00FF88"; }}
              >{p.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ background: "#0f0f0f", padding: "7rem 2.5rem", borderTop: "1px solid rgba(0,255,136,0.08)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00FF88", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.75rem" }}>How It Works</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#fff", lineHeight: 1 }}>The SA247 System</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
          {COPY.process.map((p, i) => (
            <div key={i} style={{
              opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: `all 0.7s ease ${i * 0.12}s`,
            }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "4rem", color: "rgba(0,255,136,0.1)", lineHeight: 1, marginBottom: "0.5rem" }}>{p.step}</div>
              <div style={{ width: 24, height: 2, background: "#00FF88", marginBottom: "1rem" }} />
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", color: "#fff", letterSpacing: "0.04em", marginBottom: "0.75rem" }}>{p.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ background: "#0a0a0a", padding: "7rem 2.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem", opacity: inView ? 1 : 0, transition: "all 0.7s ease" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00FF88", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.75rem" }}>Member Wins</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#fff", lineHeight: 1 }}>Real Members. Real Wins.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {COPY.testimonials.map((t, i) => (
            <div key={i} style={{
              border: "1px solid rgba(0,255,136,0.1)", padding: "2rem",
              borderLeft: "3px solid #00FF88", background: "rgba(0,255,136,0.02)",
              opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: `all 0.7s ease ${i * 0.1}s`,
            }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", color: "#00FF88", lineHeight: 0.8, marginBottom: "1rem", opacity: 0.3 }}>"</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "1.5rem", fontStyle: "italic" }}>{t.quote}</p>
              <div style={{ borderTop: "1px solid rgba(0,255,136,0.1)", paddingTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#fff", fontWeight: 600, margin: 0 }}>{t.name}</p>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "#00FF88", letterSpacing: "0.08em", textTransform: "uppercase" }}>{t.sport}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmailCapture() {
  const [ref, inView] = useInView();
  const [email, setEmail] = useState("");
  return (
    <section ref={ref} style={{ background: "#0f0f0f", padding: "6rem 2.5rem", borderTop: "1px solid rgba(0,255,136,0.08)" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.8s ease" }}>
        <div style={{ display: "inline-block", background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.2)", padding: "0.4rem 1rem", borderRadius: "2px", marginBottom: "1.5rem" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#00FF88", letterSpacing: "0.1em", textTransform: "uppercase" }}>Free Pick</span>
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#fff", lineHeight: 1, marginBottom: "1rem" }}>Get a Free Pick Today.</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "2rem" }}>Subscribe and we'll send you one of our value plays on the house. See the system before you spend a dollar.</p>
        <div style={{ display: "flex", gap: "0", maxWidth: 440, margin: "0 auto" }}>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              flex: 1, fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem",
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,255,136,0.2)",
              borderRight: "none", color: "#fff", padding: "0.85rem 1.25rem",
              outline: "none", borderRadius: "2px 0 0 2px",
            }}
          />
          <button style={{
            fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", letterSpacing: "0.1em",
            background: "#00FF88", color: "#0a0a0a", border: "none",
            padding: "0.85rem 1.5rem", cursor: "pointer", whiteSpace: "nowrap",
            borderRadius: "0 2px 2px 0", transition: "all 0.2s",
          }}
            onMouseEnter={e => e.target.style.background = "#00e07a"}
            onMouseLeave={e => e.target.style.background = "#00FF88"}
          >Get My Pick</button>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{
      background: "#00FF88", padding: "6rem 2.5rem", textAlign: "center",
      opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: "all 0.8s ease",
    }}>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#0a0a0a", lineHeight: 0.95, marginBottom: "1rem" }}>{COPY.cta.headline}</h2>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(10,10,10,0.65)", marginBottom: "2.5rem", maxWidth: 440, margin: "0 auto 2.5rem" }}>{COPY.cta.body}</p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <button style={{
          fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", letterSpacing: "0.1em",
          background: "#0a0a0a", color: "#00FF88", border: "none",
          padding: "0.9rem 2.5rem", cursor: "pointer", borderRadius: "2px",
          transition: "all 0.2s",
        }}
          onMouseEnter={e => { e.target.style.background = "#1a1a1a"; e.target.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.target.style.background = "#0a0a0a"; e.target.style.transform = "translateY(0)"; }}
        >{COPY.cta.button}</button>
        <button style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem",
          background: "transparent", color: "rgba(10,10,10,0.7)",
          border: "1px solid rgba(10,10,10,0.3)", padding: "0.9rem 2rem",
          cursor: "pointer", borderRadius: "2px", transition: "all 0.2s",
        }}
          onMouseEnter={e => { e.target.style.borderColor = "#0a0a0a"; e.target.style.color = "#0a0a0a"; }}
          onMouseLeave={e => { e.target.style.borderColor = "rgba(10,10,10,0.3)"; e.target.style.color = "rgba(10,10,10,0.7)"; }}
        >{COPY.cta.free}</button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#060606", padding: "3rem 2.5rem 2rem", borderTop: "1px solid rgba(0,255,136,0.06)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2rem", marginBottom: "2.5rem" }}>
          <div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#00FF88", letterSpacing: "0.06em", marginBottom: "0.5rem" }}>SA247</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", maxWidth: 200 }}>{COPY.footer.tagline}</p>
          </div>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {COPY.footer.links.map(l => (
              <a key={l} href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#00FF88"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.35)"}
              >{l}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "1.5rem" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.2)", margin: 0 }}>{COPY.footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
          .stats-bar { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          section { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
        }
      `}</style>
      <Nav />
      <Hero />
      <Values />
      <Packages />
      <Process />
      <Testimonials />
      <EmailCapture />
      <CTA />
      <Footer />
    </>
  );
}