import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/jason-elevaterpm/30min";

export default function Footer() {
  return (
    <footer className="bg-text py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <Link href="/" className="font-serif text-xl text-white">
            elevate<span className="text-blue-light">RPM</span>
          </Link>
          <p className="text-[13px] text-white/35">
            &copy; {new Date().getFullYear()} ElevateRPM. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:info@elevaterpm.com"
              className="text-[13px] text-white/45 hover:text-white/80 transition-colors"
            >
              info@elevaterpm.com
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-white/45 hover:text-white/80 transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
