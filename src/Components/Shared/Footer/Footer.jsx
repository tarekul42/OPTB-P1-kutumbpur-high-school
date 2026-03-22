import { Link } from "react-router-dom";
import logo from "../../../assets/school_logo_modern.png";

const Footer = () => {
    return (
        <footer className="bg-primary-900 text-white pt-20 pb-10 border-t border-accent-gold/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* School Info */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center space-x-3 mb-6 group">
                            <img src={logo} className="h-14 w-auto drop-shadow-md" alt="Logo" />
                            <span className="text-3xl font-serif font-bold text-white">
                                Kutumbpur <span className="text-accent-gold">High School</span>
                            </span>
                        </Link>
                        <p className="text-slate-300 text-lg mb-8 max-w-md leading-relaxed">
                            Empowering students in Chandina, Cumilla with quality education since 1996. We focus on academic excellence, moral values, and global citizenship.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Links Placeholder */}
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-gold/20 transition-colors cursor-pointer border border-white/5">
                                    <div className="w-5 h-5 bg-white/40 rounded-sm"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-serif font-bold text-accent-gold mb-6 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-[1px] bg-accent-gold transition-all mr-0 group-hover:mr-2"></span>About Our School</Link></li>
                            <li><Link to="/academics" className="text-slate-300 hover:text-white transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-[1px] bg-accent-gold transition-all mr-0 group-hover:mr-2"></span>Academic Programs</Link></li>
                            <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-[1px] bg-accent-gold transition-all mr-0 group-hover:mr-2"></span>Contact Us</Link></li>
                            <li><Link to="/faq" className="text-slate-300 hover:text-white transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-[1px] bg-accent-gold transition-all mr-0 group-hover:mr-2"></span>FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Portals */}
                    <div>
                        <h4 className="text-xl font-serif font-bold text-accent-gold mb-6 uppercase tracking-wider">Portals</h4>
                        <ul className="space-y-4">
                            <li><Link to="/student-portal" className="text-slate-300 hover:text-white transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-[1px] bg-accent-gold transition-all mr-0 group-hover:mr-2"></span>Student Portal</Link></li>
                            <li><Link to="/parent-portal" className="text-slate-300 hover:text-white transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-[1px] bg-accent-gold transition-all mr-0 group-hover:mr-2"></span>Parent Portal</Link></li>
                            <li><Link to="/faculty-portal" className="text-slate-300 hover:text-white transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-[1px] bg-accent-gold transition-all mr-0 group-hover:mr-2"></span>Faculty Portal</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
                    <p>© 2026 Kutumbpur High School. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
