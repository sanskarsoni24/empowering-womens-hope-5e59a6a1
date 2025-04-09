
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGetSupport = () => {
    window.location.href = "tel:7627093032";
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="font-medium text-gray-700 hover:text-pink-dark transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-pink-dark transition-colors">
              About Us
            </Link>
            <Link to="/programs" className="font-medium text-gray-700 hover:text-pink-dark transition-colors">
              Programs
            </Link>
            <LanguageToggle />
            <Button 
              variant="default" 
              className="bg-pink-dark hover:bg-pink text-white flex items-center gap-2"
              onClick={handleGetSupport}
            >
              <Phone size={16} />
              <span>Get Support</span>
            </Button>
          </div>

          {/* Mobile Menu Button and Language Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium text-gray-700 hover:text-pink-dark transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-gray-700 hover:text-pink-dark transition-colors"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                to="/programs" 
                className="font-medium text-gray-700 hover:text-pink-dark transition-colors"
                onClick={toggleMenu}
              >
                Programs
              </Link>
              <Button 
                variant="default" 
                className="bg-pink-dark hover:bg-pink text-white w-full flex items-center justify-center gap-2"
                onClick={handleGetSupport}
              >
                <Phone size={16} />
                <span>Get Support</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
