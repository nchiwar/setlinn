import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@images/logo.png";

const Footer = () => {
  return (
    <footer className=" bg-muted/50 border-t border-border mt-20 bg-gradient-to-b from-[#071211] to-[#207681] text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2  font-bold text-xl">
              <img src={logo} alt="Setlinn" className="w-10 h-10 bg-white" />
              <span>Setlinn</span>
            </div>
            <p className=" text-sm">
              Your global community for navigating life abroad with confidence.
            </p>

            <div className="flex gap-4">
              <a href="#" className=" hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className=" hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className=" hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <div className="space-y-2">
              <Link
                to="/tours"
                className="block  hover:text-primary transition-colors"
              >
                Find Members
              </Link>
              <Link
                to="/about"
                className="block  hover:text-primary transition-colors"
              >
                Discussion Forums
              </Link>
              <Link
                to="/contact"
                className="block  hover:text-primary transition-colors"
              >
                Events & Meetups
              </Link>

              <Link
                to="/contact"
                className="block hover:text-primary transition-colors"
              >
                Success Stories
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block  hover:text-primary transition-colors"
              >
                Permit Guides
              </a>
              <a
                href="#"
                className="block  hover:text-primary transition-colors"
              >
                Housing Search
              </a>
              <a
                href="#"
                className="block  hover:text-primary transition-colors"
              >
                Job Board
              </a>

              <a
                href="#"
                className="block hover:text-primary transition-colors"
              >
                Language Exchange
              </a>

              <a
                href="#"
                className="block  hover:text-primary transition-colors"
              >
                Campus Tours
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link
                to="/about"
                className="block  hover:text-primary transition-colors"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="block  hover:text-primary transition-colors"
              >
                Contact
              </Link>

              <Link
                to="/contact"
                className="block  hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                to="/contact"
                className="block hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Setlinn. All rights reserved.
            Making your journey abroad easier, one connection at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
