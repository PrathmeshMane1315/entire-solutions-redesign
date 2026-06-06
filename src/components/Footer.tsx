import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Entire Solutions" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Delivering high-precision manufacturing solutions for industrial, infrastructure, renewable energy, and engineering sectors globally.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#facilities" className="hover:text-primary transition-colors">Manufacturing Facilities</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Featured Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><span className="text-slate-400">Laser Cutting</span></li>
              <li><span className="text-slate-400">CNC Bending</span></li>
              <li><span className="text-slate-400">Profile Cutting</span></li>
              <li><span className="text-slate-400">Heavy Fabrication</span></li>
              <li><span className="text-slate-400">Electrical Panel Boxes</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Details</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <span className="text-slate-500 text-xs uppercase tracking-widest block mb-1">Full Identity</span>
                Entire Solutions
              </li>
              <li>
                <span className="text-slate-500 text-xs uppercase tracking-widest block mb-1">Direct Line</span>
                +91 7020493239
              </li>
              <li>
                <span className="text-slate-500 text-xs uppercase tracking-widest block mb-1">Initialize Request</span>
                entiresolutions20@gmail.com
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://wa.me/917020493239"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 ENTIRE SOLUTIONS. ALL RIGHTS RESERVED.</p>
          <p>Developed by Qiro Tech Innovation Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
}
