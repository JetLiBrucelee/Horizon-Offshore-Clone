import { Link } from "wouter";
import { Linkedin, Twitter, Youtube, Instagram, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "News & Media", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Drilling Operations", href: "/services" },
    { label: "FPSO Solutions", href: "/services" },
    { label: "Subsea Engineering", href: "/services" },
    { label: "Marine Operations", href: "/services" },
    { label: "Digital Solutions", href: "/services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/contact" },
    { label: "Terms of Service", href: "/contact" },
    { label: "Cookie Policy", href: "/contact" },
    { label: "Compliance", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#060810] overflow-hidden">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent" />
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A96E]/40 to-transparent mt-0.5" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 border-2 border-[#00B4D8] rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-condensed font-black text-sm text-[#00B4D8] tracking-widest">HD</span>
                </div>
              </div>
              <div>
                <p className="font-condensed font-black text-base tracking-[0.12em] text-white uppercase leading-none">Horizon Drilling</p>
                <p className="font-mono-custom text-[9px] text-[#00B4D8] tracking-[0.3em] mt-0.5">& CO</p>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Leading offshore drilling and energy solutions provider, operating across 38 nations with a commitment to safety, innovation, and sustainability.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#00B4D8] hover:text-[#00B4D8] transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-condensed font-bold text-sm tracking-[0.2em] uppercase text-[#00B4D8] mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-white/50 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1 group cursor-pointer">
                      <span>{link.label}</span>
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-condensed font-bold text-sm tracking-[0.2em] uppercase text-[#00B4D8] mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-white/50 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1 group cursor-pointer">
                      <span>{link.label}</span>
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-condensed font-bold text-sm tracking-[0.2em] uppercase text-[#00B4D8] mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={15} className="text-[#00B4D8] mt-0.5 flex-shrink-0" />
                <span>1500 Louisiana St, Suite 3100<br />Houston, TX 77002, USA</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Phone size={15} className="text-[#00B4D8] flex-shrink-0" />
                <span>+1 (713) 555-0192</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail size={15} className="text-[#00B4D8] flex-shrink-0" />
                <span>info@horizondrilling.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-mono-custom tracking-wider">
            &copy; 2026 HORIZON DRILLING & CO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.label} href={link.href}>
                <span className="text-white/30 text-xs hover:text-white/60 transition-colors cursor-pointer">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
