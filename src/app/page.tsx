import Link from "next/link";
import FAQ from "@/components/FAQ";

const CALENDLY_URL = "https://calendly.com/jason-elevaterpm/30min";

const problems = [
  {
    number: "01",
    question: "\"Are your RPM patients actually engaged?\"",
    body: "Enrollment is just the first step. Without consistent clinical touchpoints, patients disengage, stop using their devices, and miss the health benefits RPM was designed to deliver.",
  },
  {
    number: "02",
    question: "\"What happens between office visits?\"",
    body: "The real value of RPM is catching problems early and keeping patients on track. But that only works when someone is actively monitoring, reaching out, and building relationships with your patients.",
  },
  {
    number: "03",
    question: "\"Is your team stretched too thin?\"",
    body: "Your clinical staff is already busy with in-office care. RPM requires dedicated attention - personalized outreach, care plan management, and consistent follow-up that's hard to maintain alongside everything else.",
  },
];

const steps = [
  {
    title: "We Assess Your Current Program",
    body: "We start with a free review of your RPM enrollment - looking at patient engagement, retention patterns, and care gaps. You'll get a clear picture of what's working and where there's room to improve.",
    tag: "Free - no commitment required",
  },
  {
    title: "We Build Personalized Care Plans",
    body: "Our licensed Respiratory Therapist creates an individualized care plan for every enrolled patient - setting health goals, defining escalation protocols, and establishing a rhythm of regular clinical contact.",
    tag: "Licensed RT, not a call center agent",
  },
  {
    title: "We Keep Patients Engaged",
    body: "Proactive outreach ensures your patients stay connected to their care. We check in regularly, answer questions, reinforce healthy habits, and escalate concerns to your team when needed.",
    tag: "80-90%+ patient retention rates",
  },
  {
    title: "We Handle Clinical Documentation",
    body: "Every patient interaction is thoroughly documented - care notes, clinical updates, and time tracking. Your team stays informed, and your billing department has what they need.",
    tag: "Complete, compliant documentation",
  },
  {
    title: "You Get Monthly Program Reports",
    body: "Each month, we send you a full report: patients managed, engagement metrics, clinical outcomes, and program health. You'll always know exactly how your RPM program is performing.",
    tag: "Full visibility into your program",
  },
];

const features = [
  {
    icon: "👩‍⚕️",
    title: "Licensed Clinical Staff",
    body: "A credentialed Respiratory Therapist manages your program - building real relationships with your patients through consistent, personalized care.",
  },
  {
    icon: "❤️",
    title: "Patient-Centered Approach",
    body: "We focus on keeping patients engaged and healthy. When patients feel supported, they stay in the program and see better outcomes.",
  },
  {
    icon: "📋",
    title: "Care Plan Management",
    body: "Every patient gets a personalized care plan. Every touchpoint is documented. Every clinical update goes back to your practice.",
  },
  {
    icon: "🤝",
    title: "Extension of Your Practice",
    body: "We operate under your brand, your protocols, your clinical standards. Patients experience us as part of your care team - because we are.",
  },
  {
    icon: "📊",
    title: "Program Visibility",
    body: "No more guessing. Monthly reports show patient engagement, retention metrics, and clinical activity at a glance.",
  },
  {
    icon: "💰",
    title: "Aligned Incentives",
    body: "No setup fees or long-term contracts. You pay only for the care time we deliver - our success is tied to your program's success.",
  },
];

const outcomes = [
  { label: "Patient Retention", without: "45-55%", with: "80-90%+" },
  { label: "Patient Engagement", without: "Inconsistent", with: "Regular clinical touchpoints" },
  { label: "Dedicated Clinical Staff", without: "No", with: "Yes - Licensed RT" },
  { label: "Care Plan Documentation", without: "Partial or missing", with: "Comprehensive" },
  { label: "Program Visibility", without: "Limited", with: "Full monthly reports" },
  { label: "Upfront Cost", without: "Varies", with: "$0 to start" },
  { label: "Long-term Contracts", without: "Often required", with: "None - flexible terms" },
];

const faqItems = [
  {
    question: "How is ElevateRPM different from the support my device vendor offers?",
    answer: "Most device vendors provide monitoring software and dashboards with alert notifications. That's technology, not clinical care. ElevateRPM provides a licensed Respiratory Therapist who proactively calls your patients, builds real relationships, creates individualized care plans, and manages engagement on an ongoing basis. We're the human layer that makes the technology actually work for your patients.",
  },
  {
    question: "What does your pricing look like?",
    answer: "You pay only for the care time our clinician spends with your patients. There are no setup fees, no monthly platform fees, and no long-term commitments. The model is designed so that our cost is always a fraction of the value we help create - when your patients are engaged and your program is thriving, everyone wins.",
  },
  {
    question: "What specialties do you work with?",
    answer: "We work with medical groups across Primary Care, Cardiology, Pulmonology, Endocrinology, Nephrology, and multi-specialty practices. If your patients have chronic conditions being managed with RPM or RTM devices, ElevateRPM can support your program.",
  },
  {
    question: "How quickly can we get started?",
    answer: "Most practices are fully onboarded within two weeks of our initial call. We begin with a program assessment, review your existing enrollment, set up our documentation protocols with your workflows, and introduce our clinician to your team. There's no technology integration required on your end - we work within your existing systems.",
  },
  {
    question: "We already have staff managing our RPM program. Do we still need ElevateRPM?",
    answer: "It depends on what they're able to do. If your existing staff is proactively reaching out to every RPM patient regularly, building individualized care plans, documenting all clinical interactions, and generating program reports - you may be in good shape. If any of those aren't happening consistently, there's likely room to improve patient engagement and retention. Book a call and we'll review your program together, for free.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-dark via-[#1456a0] to-blue pt-40 pb-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(77,163,232,0.15),transparent_70%)] pointer-events-none"></div>
        <div className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,196,140,0.1),transparent_70%)] pointer-events-none"></div>

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-[13px] font-medium text-white/90 mb-6">
                <span className="w-[7px] h-[7px] bg-green rounded-full animate-pulse-dot"></span>
                Licensed Clinical RPM Management
              </div>
              <h1 className="font-serif text-[clamp(36px,5vw,58px)] leading-[1.08] text-white mb-5">
                Keep Your RPM Patients<br/>
                <em className="text-blue-light">Engaged & Healthy</em>
              </h1>
              <p className="text-lg text-white/[0.78] leading-[1.65] mb-9 max-w-[520px]">
                ElevateRPM provides a dedicated licensed clinician who builds relationships with your patients, keeps them engaged in their care, and ensures your RPM program delivers real health outcomes.
              </p>
              <div className="flex flex-wrap items-center gap-3.5 mb-12">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white btn-lg"
                >
                  Book a Free Consultation
                </a>
                <a
                  href="#how-it-works"
                  className="btn btn-outline border-white/30 text-white/85 hover:border-white/60 hover:text-white"
                >
                  See How It Works ↓
                </a>
              </div>
              <div className="flex items-center gap-3.5 text-[13px] text-white/55">
                <span className="text-green">✓</span> Licensed Respiratory Therapists
                <span className="text-green">✓</span> No long-term contracts
                <span className="text-green">✓</span> Patient-centered care
              </div>
            </div>

            {/* Value Prop Card */}
            <div className="bg-white/[0.06] border border-white/[0.14] rounded-[20px] p-9 backdrop-blur-[12px]">
              <div className="text-xs font-semibold tracking-[2px] uppercase text-white/50 mb-7">
                The ElevateRPM Difference
              </div>
              <div className="space-y-6">
                <div className="p-5 bg-white/[0.08] border border-white/10 rounded-[12px]">
                  <div className="font-serif text-2xl text-white leading-tight mb-2">Patient-First Approach</div>
                  <div className="text-sm text-white/60 leading-relaxed">Engagement and retention through genuine clinical relationships - not just alerts and reminders.</div>
                </div>
                <div className="p-5 bg-white/[0.08] border border-white/10 rounded-[12px]">
                  <div className="font-serif text-2xl text-white leading-tight mb-2">Better Outcomes</div>
                  <div className="text-sm text-white/60 leading-relaxed">When patients are engaged, they see real health benefits - and your practice sees better results across the board.</div>
                </div>
                <div className="p-5 bg-white/[0.08] border border-white/10 rounded-[12px]">
                  <div className="font-serif text-2xl text-green leading-tight mb-2">True Win-Win</div>
                  <div className="text-sm text-white/60 leading-relaxed">Healthier patients, satisfied providers, and sustainable revenue - everything aligned in the right direction.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-border py-6">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: "🏥", text: "Designed for Medical Groups" },
              { icon: "👩‍⚕️", text: "Licensed Respiratory Therapists" },
              { icon: "❤️", text: "Patient-Centered Care" },
              { icon: "📊", text: "Full Program Visibility" },
              { icon: "🤝", text: "Flexible Partnership" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2.5 text-sm font-medium text-muted">
                <span className="text-lg">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-bg" id="problem">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">The Challenge</span>
            <h2 className="section-title">RPM Works Best When Patients Stay Engaged</h2>
            <p className="section-sub mx-auto">The technology is only part of the equation. Sustained engagement is what drives real outcomes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="card relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue to-blue-light"></div>
                <div className="font-serif text-[52px] text-blue-pale leading-none mb-3 select-none">
                  {problem.number}
                </div>
                <div className="font-serif text-xl text-blue-dark mb-3 leading-[1.3]">
                  {problem.question}
                </div>
                <p className="text-[15px] text-muted leading-[1.65]">{problem.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white" id="how-it-works">
        <div className="container-custom">
          <div className="mb-12">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">We Manage Patient Engagement.<br/>You Focus on Care.</h2>
            <p className="section-sub">A straightforward partnership - we handle the ongoing patient relationships, you stay focused on clinical care.</p>
          </div>

          <div className="max-w-[780px] mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="grid grid-cols-[64px_1fr] gap-7 py-9 border-b border-border last:border-b-0">
                <div className="flex flex-col items-center gap-0">
                  <div className="w-[52px] h-[52px] rounded-full bg-blue-pale border-2 border-border flex items-center justify-center font-serif text-[22px] text-blue flex-shrink-0 hover:bg-blue hover:text-white hover:border-blue transition-colors">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2 min-h-[32px]"></div>
                  )}
                </div>
                <div className="pt-2.5">
                  <h3 className="font-serif text-[22px] text-blue-dark mb-2">{step.title}</h3>
                  <p className="text-[15px] text-muted leading-[1.7] mb-3">{step.body}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-green-pale text-[#065F46] text-xs font-semibold">
                    ✓ {step.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Let's Talk About Your Program →
            </a>
          </div>
        </div>
      </section>

      {/* Why ElevateRPM Section */}
      <section className="section-padding bg-bg" id="why-elevate">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">Why ElevateRPM</span>
            <h2 className="section-title">The Partner Your Program Has Been Missing</h2>
            <p className="section-sub mx-auto">We're not a software platform or device vendor. We're the clinical team that keeps your patients engaged and your program running smoothly.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <div className="w-[52px] h-[52px] rounded-[14px] bg-blue-pale flex items-center justify-center text-2xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-[17px] font-semibold text-blue-dark mb-2">{feature.title}</h3>
                <p className="text-sm text-muted leading-[1.65]">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="section-padding bg-blue-dark" id="results">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label bg-blue-light/20 text-blue-light">Program Outcomes</span>
            <h2 className="section-title text-white">What an Optimized RPM Program Looks Like</h2>
            <p className="section-sub text-white/65 mx-auto">When patients are engaged and supported, everything improves - outcomes, satisfaction, and yes, revenue too.</p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-[20px]">
            <table className="w-full border-collapse bg-white/[0.04] rounded-[20px] overflow-hidden">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-5 text-left text-[13px] font-semibold tracking-[0.5px] text-white/50">Program Metric</th>
                  <th className="py-4 px-5 text-left text-[13px] font-normal text-white/45">Typical Program</th>
                  <th className="py-4 px-5 text-left text-[13px] font-semibold text-green">✓ With ElevateRPM</th>
                </tr>
              </thead>
              <tbody>
                {outcomes.map((row, index) => (
                  <tr key={index} className="border-b border-white/[0.06] last:border-b-0">
                    <td className="py-3.5 px-5 text-sm text-white/70 font-medium">{row.label}</td>
                    <td className="py-3.5 px-5 text-sm text-white/35">{row.without}</td>
                    <td className="py-3.5 px-5 text-sm text-green font-medium">{row.with}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Better patient engagement leads to better health outcomes, higher satisfaction, and sustainable program economics. It's a true win-win.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white" id="faq">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">Questions</span>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-blue-dark to-blue py-24 text-center relative overflow-hidden">
        <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_70%)]"></div>
        <div className="absolute bottom-[-60px] left-[10%] w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(0,196,140,0.12),transparent_70%)]"></div>

        <div className="container-custom relative z-10">
          <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] mb-4">
            Let's Talk About Your<br/>RPM Program
          </h2>
          <p className="text-lg text-white/[0.72] max-w-[560px] mx-auto leading-[1.65] mb-10">
            Book a free consultation. We'll review your current program, discuss your goals, and explore whether ElevateRPM is the right fit - no pressure, no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5 mb-7">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white btn-lg"
            >
              Book a Free Consultation
            </a>
          </div>
          <p className="text-sm text-white/45">
            Or reach us directly at{" "}
            <a href="mailto:jason@elevaterpm.com" className="text-white/70 underline underline-offset-[3px]">
              jason@elevaterpm.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
