import Link from "next/link";
import FAQ from "@/components/FAQ";

const CALENDLY_URL = "https://calendly.com/jason-elevaterpm/30min";

const problems = [
  {
    number: "01",
    question: "\"Do you know if your RPM program is profitable?\"",
    body: "Most practices have no visibility into their actual RPM revenue. No tracking, no monthly reporting, no one whose job it is to know the answer. If you can't measure it, you can't optimize it.",
  },
  {
    number: "02",
    question: "\"What's your patient retention rate after 90 days?\"",
    body: "Without dedicated outreach, 40-60% of enrolled patients stop participating within three months. Every patient who drops off is direct revenue loss - and most practices don't even realize it's happening.",
  },
  {
    number: "03",
    question: "\"Who owns the patient relationship between visits?\"",
    body: "The \"set it and forget it\" model fails. Patients need 16+ device readings per month to trigger billing. Without proactive clinical outreach, adherence drops - and your CPT codes disappear with it.",
  },
];

const steps = [
  {
    title: "We Assess Your Program",
    body: "We start with a free review of your current RPM enrollment, identify CPT billing gaps, and benchmark your retention metrics against industry standards. You'll immediately understand exactly what you're leaving on the table.",
    tag: "Free - no commitment required",
  },
  {
    title: "We Build Personalized Care Plans",
    body: "Our licensed Respiratory Therapist creates an individualized care plan for every enrolled patient - setting goals, defining escalation protocols, and establishing the rhythm of regular clinical contact. This is what makes patients stay.",
    tag: "Licensed RT, not a call center agent",
  },
  {
    title: "We Drive Device Adherence",
    body: "Proactive patient outreach ensures every enrolled patient hits 16+ readings per month - the Medicare threshold for CPT 99454 billing. We track adherence daily, intervene when readings drop, and educate patients on why consistency matters for their health.",
    tag: "80-90%+ adherence rates achieved",
  },
  {
    title: "We Handle Full Clinical Documentation",
    body: "Every patient interaction is documented to support billing for CPT 99454, 99457, and 99458 - including the add-on codes most practices miss entirely. Our documentation is compliant, thorough, and ready for your billing team.",
    tag: "Capture every billable minute",
  },
  {
    title: "You Receive a Monthly Revenue Report",
    body: "Each month, we send you a full activity report: patients managed, care time logged, CPT codes supported, and program health metrics. You bill your payers. We invoice only for the billable care time we actually used. That's it.",
    tag: "Pay only for what we use",
  },
];

const features = [
  {
    icon: "👩‍⚕️",
    title: "Licensed Clinical Staff",
    body: "A credentialed Respiratory Therapist manages your program - not a call center agent, not a medical assistant. Real clinical relationships drive real retention.",
  },
  {
    icon: "💰",
    title: "Zero Cost to Start",
    body: "No setup fees. No monthly retainer. No long-term contracts. You pay only for billable care time used - which means you only pay when your patients are generating revenue.",
  },
  {
    icon: "📋",
    title: "Care Plan Management",
    body: "Every patient gets a personalized care plan. Every touchpoint is documented. Every clinical update goes back to your practice - keeping your care team informed.",
  },
  {
    icon: "📈",
    title: "CPT Code Optimization",
    body: "We track every billable minute and ensure you're capturing the full set of eligible CPT codes every month - especially the 99458 add-on codes most practices miss entirely.",
  },
  {
    icon: "🤝",
    title: "Extension of Your Practice",
    body: "We operate under your brand, your protocols, your clinical standards. Patients experience us as part of your care team - because for them, we are.",
  },
  {
    icon: "📊",
    title: "Monthly Revenue Reports",
    body: "No more guessing. Every month you receive a clear report: patients managed, care time logged, CPT codes supported, and program health at a glance.",
  },
];

const comparisonData = [
  { metric: "Device Adherence Rate", without: "40-55%", with: "80-90%+" },
  { metric: "Patient Retention at 90 Days", without: "~45%", with: "80%+" },
  { metric: "Dedicated Clinical Staff", without: "No", with: "Yes - Licensed RT" },
  { metric: "CPT Code Capture", without: "Partial (often missing 99458)", with: "Comprehensive" },
  { metric: "Monthly Revenue Visibility", without: "None / estimated", with: "Full monthly reports" },
  { metric: "Upfront Cost to Get Started", without: "Varies / setup fees common", with: "$0 - zero cost to start" },
  { metric: "Contracts / Long-term Commitment", without: "Often required", with: "None - pay as you go" },
];

const faqItems = [
  {
    question: "How is ElevateRPM different from the clinical support my device vendor offers?",
    answer: "Most device vendors provide monitoring software and sometimes a dashboard with alert notifications. That's technology, not clinical care. ElevateRPM provides a licensed Respiratory Therapist who proactively calls your patients, builds real relationships, creates individualized care plans, and manages adherence on an ongoing basis. We're the human layer that makes the technology actually work - and that's what drives retention and revenue.",
  },
  {
    question: "What does \"usage-based\" pricing actually mean? What will we pay?",
    answer: "You only pay for the prorated hourly cost of care time our clinician spends managing your billable patients. If a patient isn't generating a billable CPT code, we're not charging you for them. There are no setup fees, no monthly platform fees, no minimum commitments. The model is designed so that our cost is always a fraction of the revenue we help you generate - we only make money when you make money.",
  },
  {
    question: "What specialties do you work with?",
    answer: "We work with medical groups across Primary Care, Cardiology, Pulmonology, Endocrinology, Nephrology, and multi-specialty practices. If your patients have chronic conditions being managed with RPM or RTM devices, ElevateRPM can support your program. We've worked with solo practices and groups with 15+ providers.",
  },
  {
    question: "How quickly can we get started?",
    answer: "Most practices are fully onboarded within two weeks of our initial call. We begin with a program assessment, review your existing enrollment, set up our documentation protocols with your workflows, and introduce our clinician to your team. There's no technology integration required on your end - we work within your existing systems.",
  },
  {
    question: "We already have staff managing our RPM program. Do we still need ElevateRPM?",
    answer: "It depends on what they're doing. If your existing staff is proactively calling every RPM patient at least monthly, tracking 16-day adherence per patient, building individualized care plans, documenting all clinical time for CPT billing, and generating a monthly revenue report - then you may be in good shape. If any of those aren't happening consistently, there's likely meaningful revenue being missed. Book a call and we'll show you exactly where the gaps are, for free, with no obligation.",
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
                Your RPM Program Should Be Generating Revenue.<br/>
                <em className="text-blue-light">Is It?</em>
              </h1>
              <p className="text-lg text-white/[0.78] leading-[1.65] mb-9 max-w-[520px]">
                ElevateRPM provides a dedicated licensed clinician who manages your remote monitoring program, drives patient adherence, and turns your existing enrollment into consistent monthly revenue - at zero upfront cost.
              </p>
              <div className="flex flex-wrap items-center gap-3.5 mb-12">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white btn-lg"
                >
                  📅 Book a Free 20-Minute Call
                </a>
                <a
                  href="#how-it-works"
                  className="btn btn-outline border-white/30 text-white/85 hover:border-white/60 hover:text-white"
                >
                  See How It Works ↓
                </a>
              </div>
              <div className="flex items-center gap-3.5 text-[13px] text-white/55">
                <span className="text-green">✓</span> Zero upfront cost
                <span className="text-green">✓</span> No contracts
                <span className="text-green">✓</span> Pay only for billable care time
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white/[0.06] border border-white/[0.14] rounded-[20px] p-9 backdrop-blur-[12px]">
              <div className="text-xs font-semibold tracking-[2px] uppercase text-white/50 mb-7">
                ElevateRPM Program Results
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-5 bg-white/[0.08] border border-white/10 rounded-[12px] text-center">
                  <div className="font-serif text-4xl text-green leading-none mb-1.5">$198</div>
                  <div className="text-xs text-white/55 leading-[1.4]">Net profit per patient / month</div>
                </div>
                <div className="p-5 bg-white/[0.08] border border-white/10 rounded-[12px] text-center">
                  <div className="font-serif text-4xl text-white leading-none mb-1.5">180%</div>
                  <div className="text-xs text-white/55 leading-[1.4]">ROI on 60 min of care time/month</div>
                </div>
                <div className="p-5 bg-white/[0.08] border border-white/10 rounded-[12px] text-center">
                  <div className="font-serif text-4xl text-green leading-none mb-1.5">2.7x</div>
                  <div className="text-xs text-white/55 leading-[1.4]">Revenue expansion at scale</div>
                </div>
                <div className="p-5 bg-white/[0.08] border border-white/10 rounded-[12px] text-center">
                  <div className="font-serif text-4xl text-white leading-none mb-1.5">$238k</div>
                  <div className="text-xs text-white/55 leading-[1.4]">Annual net profit / 100 patients</div>
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
              { icon: "📋", text: "Medicare-Compliant CPT Billing" },
              { icon: "👩‍⚕️", text: "Licensed Respiratory Therapists" },
              { icon: "💰", text: "$0 Upfront · No Contracts" },
              { icon: "📈", text: "RPM & RTM Programs" },
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
            <span className="section-label">The Reality Check</span>
            <h2 className="section-title">Most RPM Programs Are Leaving Money on the Table</h2>
            <p className="section-sub mx-auto">We ask every new client three questions. Most can't answer any of them.</p>
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
            <h2 className="section-title">ElevateRPM Runs Your Program.<br/>You Collect the Revenue.</h2>
            <p className="section-sub">Five straightforward steps - we handle all the clinical work, you focus on patient care.</p>
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
              See If ElevateRPM Is Right for Your Practice →
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
            <p className="section-sub mx-auto">We're not a software platform. We're not a device vendor. We're the clinical team that makes your existing program actually work.</p>
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

      {/* Results Section */}
      <section className="section-padding bg-blue-dark" id="results">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label bg-blue-light/20 text-blue-light">Program Results</span>
            <h2 className="section-title text-white">What Optimized RPM Actually Looks Like</h2>
            <p className="section-sub text-white/65 mx-auto">When a dedicated licensed clinician owns the patient relationship, the numbers speak for themselves.</p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[
              { num: "$198", label: "Net profit per patient per month", green: true },
              { num: "180%", label: "ROI on 60 minutes of care time per month", green: false },
              { num: "2.7x", label: "Revenue expansion opportunity at scale", green: true },
              { num: "$238k", label: "Annual net profit for every 100 patients", green: false },
            ].map((stat, index) => (
              <div key={index} className="bg-white/[0.06] border border-white/[0.12] rounded-[20px] p-7 text-center hover:bg-white/10 transition-colors">
                <div className={`font-serif text-[44px] leading-none mb-2 ${stat.green ? "text-green" : "text-white"}`}>
                  {stat.num}
                </div>
                <div className="text-[13px] text-white/55 leading-[1.4]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-[20px]">
            <table className="w-full border-collapse bg-white/[0.04] rounded-[20px] overflow-hidden">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-5 text-left text-[13px] font-semibold tracking-[0.5px] text-white/50">Program Metric</th>
                  <th className="py-4 px-5 text-left text-[13px] font-normal text-white/45">Without ElevateRPM</th>
                  <th className="py-4 px-5 text-left text-[13px] font-semibold text-green">✓ With ElevateRPM</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-white/[0.06] last:border-b-0">
                    <td className="py-3.5 px-5 text-sm text-white/70 font-medium">{row.metric}</td>
                    <td className="py-3.5 px-5 text-sm text-white/35">{row.without}</td>
                    <td className="py-3.5 px-5 text-sm text-green font-medium">{row.with}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white" id="faq">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">Common Questions</span>
            <h2 className="section-title">Straight Answers to Your Real Questions</h2>
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
            Ready to Find Out What Your<br/>RPM Program Is Really Worth?
          </h2>
          <p className="text-lg text-white/[0.72] max-w-[560px] mx-auto leading-[1.65] mb-10">
            Book a free 20-minute strategy call. We'll review your current program, show you the revenue gap, and explain exactly how ElevateRPM works - no pressure, no commitment.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5 mb-7">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white btn-lg"
            >
              📅 Book My Free Strategy Call
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
