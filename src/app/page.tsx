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
    body: "Our licensed clinical staff creates an individualized care plan for every enrolled patient - setting health goals, defining escalation protocols, and establishing a rhythm of regular clinical contact.",
    tag: "Licensed clinicians, not call center agents",
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Licensed Clinical Staff",
    body: "Credentialed clinicians manage your program - building real relationships with your patients through consistent, personalized care.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Patient-Centered Approach",
    body: "We focus on keeping patients engaged and healthy. When patients feel supported, they stay in the program and see better outcomes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Care Plan Management",
    body: "Every patient gets a personalized care plan. Every touchpoint is documented. Every clinical update goes back to your practice.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Device & Disease Agnostic",
    body: "We work with any RPM or RTM program - regardless of device type or patient population. Our approach adapts to your existing setup.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Program Visibility",
    body: "No more guessing. Monthly reports show patient engagement, retention metrics, and clinical activity at a glance.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Extension of Your Practice",
    body: "We operate under your brand, your protocols, your clinical standards. Patients experience us as part of your care team.",
  },
];

const outcomes = [
  { label: "Patient Retention", without: "45-55%", with: "95%" },
  { label: "Patient Engagement", without: "Inconsistent", with: "Regular clinical touchpoints" },
  { label: "Dedicated Clinical Staff", without: "No", with: "Yes - Licensed Clinical Staff" },
  { label: "Care Plan Documentation", without: "Partial or missing", with: "Comprehensive" },
  { label: "Program Visibility", without: "Limited", with: "Full monthly reports" },
  { label: "Upfront Cost", without: "Varies", with: "$0 to start" },
  { label: "Long-term Contracts", without: "Often required", with: "None - flexible terms" },
];

const faqItems = [
  {
    question: "How is ElevateRPM different from the support my device vendor offers?",
    answer: "Most device vendors provide monitoring software and dashboards with alert notifications. That's technology, not clinical care. ElevateRPM provides licensed clinicians who proactively call your patients, build real relationships, create individualized care plans, and manage engagement on an ongoing basis. We're the human layer that makes the technology actually work for your patients.",
  },
  {
    question: "What devices and conditions do you support?",
    answer: "We're device and disease agnostic. Whether you're running an RPM program for blood pressure, weight, glucose, pulse oximetry, or any other remote monitoring - we can support it. Our clinical team adapts to your existing devices, workflows, and patient populations.",
  },
  {
    question: "What does your pricing look like?",
    answer: "You pay only for the care time our clinicians spend with your patients. There are no setup fees, no monthly platform fees, and no long-term commitments. The model is designed so that our cost is always a fraction of the value we help create - when your patients are engaged and your program is thriving, everyone wins.",
  },
  {
    question: "What specialties do you work with?",
    answer: "We work with medical groups across Primary Care, Cardiology, Pulmonology, Endocrinology, Nephrology, and multi-specialty practices. If your patients have chronic conditions being managed with RPM or RTM devices, ElevateRPM can support your program.",
  },
  {
    question: "How quickly can we get started?",
    answer: "Most practices are fully onboarded within two weeks of our initial call. We begin with a program assessment, review your existing enrollment, set up our documentation protocols with your workflows, and introduce our clinicians to your team. There's no technology integration required on your end - we work within your existing systems.",
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
              <h1 className="font-serif text-[clamp(36px,5vw,58px)] leading-[1.08] text-white mb-5">
                Your RPM Program Should Be Working.<br/>
                <em className="text-blue-light">Is It?</em>
              </h1>
              <p className="text-lg text-white/[0.78] leading-[1.65] mb-9 max-w-[520px]">
                ElevateRPM provides dedicated licensed clinicians who build relationships with your patients, keep them engaged in their care, and ensure your RPM program delivers real health outcomes.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white btn-lg"
              >
                Book a Free Call
              </a>
            </div>

            {/* Value Prop Card */}
            <div className="bg-white/[0.06] border border-white/[0.14] rounded-[16px] p-6 backdrop-blur-[12px]">
              <div className="text-lg font-bold tracking-[1.5px] uppercase text-white mb-5">
                The ElevateRPM Difference
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-white/[0.08] border border-white/10 rounded-[10px]">
                  <div className="font-serif text-xl text-white leading-tight mb-1">Patient-First Approach</div>
                  <div className="text-sm text-white/60 leading-relaxed">Engagement and retention through genuine clinical relationships.</div>
                </div>
                <div className="p-4 bg-white/[0.08] border border-white/10 rounded-[10px]">
                  <div className="font-serif text-xl text-white leading-tight mb-1">Better Outcomes</div>
                  <div className="text-sm text-white/60 leading-relaxed">Engaged patients see real health benefits - and your practice sees better results.</div>
                </div>
                <div className="p-4 bg-white/[0.08] border border-white/10 rounded-[10px]">
                  <div className="font-serif text-xl text-white leading-tight mb-1">No Extra Work for Your Staff</div>
                  <div className="text-sm text-white/60 leading-relaxed">We handle outreach, care plans, and documentation - your team stays focused.</div>
                </div>
                <div className="p-4 bg-white/[0.08] border border-white/10 rounded-[10px]">
                  <div className="font-serif text-xl text-green leading-tight mb-1">True Win-Win</div>
                  <div className="text-sm text-white/60 leading-relaxed">Healthier patients, satisfied providers, and sustainable revenue.</div>
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
              { text: "Designed for Medical Groups" },
              { text: "Licensed Clinical Staff" },
              { text: "Device & Disease Agnostic" },
              { text: "Full Program Visibility" },
              { text: "Flexible Partnership" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2.5 text-sm font-medium text-muted">
                <svg className="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
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
                    <svg className="w-3 h-3 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {step.tag}
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
              Let's Talk About Your Program
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
                <div className="w-[52px] h-[52px] rounded-[14px] bg-blue-pale flex items-center justify-center text-blue mb-4">
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
            <p className="section-sub text-white mx-auto">When patients are engaged and supported, everything improves - outcomes, satisfaction, and yes, revenue too.</p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-[20px] border-2 border-white/20">
            <table className="w-full border-collapse bg-white/[0.08] overflow-hidden">
              <thead>
                <tr className="border-b-2 border-white/25 bg-white/[0.06]">
                  <th className="py-5 px-6 text-left text-[14px] font-bold tracking-[0.5px] text-white border-r border-white/15">Program Metric</th>
                  <th className="py-5 px-6 text-left text-[14px] font-medium text-white/80 border-r border-white/15">Typical Program</th>
                  <th className="py-5 px-6 text-left text-[14px] font-bold text-green">With ElevateRPM</th>
                </tr>
              </thead>
              <tbody>
                {outcomes.map((row, index) => (
                  <tr key={index} className="border-b border-white/15 last:border-b-0 hover:bg-white/[0.04] transition-colors">
                    <td className="py-4 px-6 text-[15px] text-white font-semibold border-r border-white/15">{row.label}</td>
                    <td className="py-4 px-6 text-[15px] text-white/70 border-r border-white/15">{row.without}</td>
                    <td className="py-4 px-6 text-[15px] text-green font-semibold">{row.with}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white text-lg max-w-2xl mx-auto">
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
            Book a free call. We'll review your current program, discuss your goals, and explore whether ElevateRPM is the right fit - no pressure, no obligation.
          </p>
          <div className="mb-7">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white btn-lg"
            >
              Book a Free Call
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
