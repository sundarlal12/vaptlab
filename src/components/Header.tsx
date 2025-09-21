
// src/components/Header.tsx
import React, { useState, useEffect, useRef } from "react";
import Loader from "./Loader";
import {
  ChevronDown,
  ArrowRight,
  Shield,
  Monitor,
  Smartphone,
  Network,
  Cloud,
  Cpu,
  Code,
  Heart,
  AlertTriangle,
  Search,
  UserCheck,
  Package,
  FileText,
  Lock,
  Users,
  Globe,
  CheckCircle,
  Menu,
  X,
  Settings,
} from "lucide-react";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  const handleMenuClick = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const handleNavigation = (path: string) => {
    setIsLoading(true);
    setOpenMenu(null);
    setIsMenuOpen(false);
    window.location.href = path.startsWith("/") ? path : `/${path}`;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) return;
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (!target.closest(".dropdown-container")) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const openOnHover = (menu: string) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (!isMenuOpen) setOpenMenu(menu);
  };

  const scheduleCloseHover = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setOpenMenu(null);
      closeTimerRef.current = null;
    }, 180);
  };

  // brand gradient used inline where needed
  const RED_GRADIENT = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";
  // light red color used for icons
  const BRAND_RED = "rgb(217,47,97)";

  return (
    <>
      {isLoading && <Loader text="Loading page..." />}

      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://vaptlabs.com/src/images/logo-light.png"
                alt="VAPTlabs"
                className="h-8 w-auto cursor-pointer"
                onClick={() => handleNavigation("/")}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div
                className="relative dropdown-container"
                onMouseEnter={() => openOnHover("services")}
                onMouseLeave={scheduleCloseHover}
              >
                <button
                  onClick={() => handleMenuClick("services")}
                  className="flex items-center text-gray-700 hover:text-black transition-colors"
                  type="button"
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {openMenu === "services" && (
                  <div className="absolute top-full left-0 mt-2 w-full sm:w-[28rem] md:w-[32rem] bg-white rounded-lg shadow-lg border z-50" >
                    <div className="p-4">
                      <div className="flex items-center mb-4">
                        {/* ICON COLOR CHANGED -> BRAND_RED */}
                        <Shield style={{ color: BRAND_RED }} className="h-5 w-5 mr-2" />
                        <span className="font-semibold text-gray-800">VAPT Services</span>
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-400" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => handleNavigation("/services/web-app-security")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          {/* ICON COLOR CHANGED -> BRAND_RED */}
                          <Monitor style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">Web Application Security Testing</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleNavigation("/services/mobile-app-security")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Smartphone style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">Mobile Application Security Testing</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleNavigation("/services/network-penetration-testing")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Network style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">Network Penetration Testing</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleNavigation("/services/api-penetration-testing")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Settings style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">API Penetration Testing</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleNavigation("/services/cloud-penetration-testing")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Cloud style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">Cloud Penetration Testing</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleNavigation("/services/iot-security-testing")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Cpu style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">IoT Security Testing</span>
                        </button>

                         <button
                          type="button"
                          onClick={() => handleNavigation("/services/dark-web-monitoring")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Cpu style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">Dark Web Assessment</span>
                        </button>

                        
                        
                        <button
                          type="button"
                          onClick={() => handleNavigation("/services/secure-code-review")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Code style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">Secure Code Review</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleNavigation("/services/medical-device-security-testing")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Heart style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">Medical Device Security Testing</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleNavigation("/services/threat-modeling")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <AlertTriangle style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">Threat Modeling</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleNavigation("/services/root-cause-analysis")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Search style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">Root Cause Analysis</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleNavigation("/services/red-teaming")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <UserCheck style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">Red Teaming</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleNavigation("/services/software-composition-analysis")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Package style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">Software Composition Analysis</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div
                className="relative dropdown-container"
                onMouseEnter={() => openOnHover("solutions")}
                onMouseLeave={scheduleCloseHover}
              >
                <button
                  onClick={() => handleMenuClick("solutions")}
                  className="flex items-center text-gray-700 hover:text-black transition-colors"
                  type="button"
                >
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {openMenu === "solutions" && (
                  <div className="absolute top-full left-0 mt-2 w-[32rem] bg-white rounded-lg shadow-lg border z-50">
                    <div className="p-4">
                      <div className="flex items-center mb-4">
                        <CheckCircle style={{ color: BRAND_RED }} className="h-5 w-5 mr-2" />
                        <span className="font-semibold text-gray-800">Compliance Solutions</span>
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        Achieve compliance through penetration testing—identify and address risks before they become threats.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => handleNavigation("/compliance/pci-dss")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Shield style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">PCI-DSS Pentesting</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleNavigation("/compliance/iso-27001")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Lock style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">ISO 27001 Pentesting</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleNavigation("/compliance/soc2")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Users style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">SOC2 Pentesting</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleNavigation("/compliance/gdpr")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Globe style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">GDPR Pentesting</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleNavigation("/compliance/hipaa")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Heart style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">HIPAA Pentesting</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About dropdown */}
              <div
                className="relative dropdown-container"
                onMouseEnter={() => openOnHover("about")}
                onMouseLeave={scheduleCloseHover}
              >
                <button
                  onClick={() => handleMenuClick("about")}
                  className="flex items-center text-gray-700 hover:text-black transition-colors"
                  type="button"
                >
                  About Us <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {openMenu === "about" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                    <div className="p-4">
                      <div className="flex items-center mb-4">
                        <Users style={{ color: BRAND_RED }} className="h-5 w-5 mr-2" />
                        <span className="font-semibold text-gray-800">About VAPTlabs</span>
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-400" />
                      </div>

                      <div className="space-y-2">
                        <button
                          type="button"
                          onClick={() => handleNavigation("/about/vaptlabs")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Shield style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">About VAPTlabs</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleNavigation("/about/clients")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Globe style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">Our Clients</span>
                        </button>

                        <button type="button"
  onClick={() =>
    window.open(
      "https://ik.imagekit.io/5biqvaptlabsnfbqw/Design%201.pdf?updatedAt=1758474539462",
      "_blank"
    )
  }
  className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
>
  <FileText style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
  <span className="text-gray-700">VAPT Services Brochure</span>
</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Product Dropdown */}
              <div
                className="relative dropdown-container"
                onMouseEnter={() => openOnHover("product")}
                onMouseLeave={scheduleCloseHover}
              >
                <button
                  onClick={() => handleMenuClick("product")}
                  className="flex items-center text-gray-700 hover:text-black transition-colors"
                  type="button"
                >
                  Product <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {openMenu === "product" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                    <div className="p-4">
                      <div className="flex items-center mb-4">
                        <FileText style={{ color: BRAND_RED }} className="h-5 w-5 mr-2" />
                        <span className="font-semibold text-gray-800">Products</span>
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-400" />
                      </div>

                      <div className="space-y-2">
                        <button
                          type="button"
                          onClick={() => (window.location.href = "https://www.vaptlab.com")}
                          className="flex items-center p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <Shield style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-700">RASP Shield SDK</span>
                        </button>

                        <div className="flex items-center p-2 rounded w-full text-left opacity-80" title="Coming soon">
                          <Cpu style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-500">AI Gen VAPT</span>
                        </div>

                        <div className="flex items-center p-2 rounded w-full text-left opacity-80" title="Coming soon">
                          <Package style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" />
                          <span className="text-gray-500">Secret Sniffer Extension</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Button (RED GRADIENT) */}
            <div className="hidden md:block">
              <button
                className="text-white px-6 py-2 rounded-full transition-all duration-300"
                style={{
                  background: RED_GRADIENT,
                }}
                onClick={() => handleNavigation("/contact")}
              >
                Contact Us
              </button>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" type="button">
              {isMenuOpen ? <X size={24} style={{ color: BRAND_RED }} /> : <Menu size={24} style={{ color: BRAND_RED }} />}
            </button>
          </div>

          {/* Mobile Navigation */}
        {/* Mobile Navigation */}
{isMenuOpen && (
  <div className="md:hidden bg-white border-t border-gray-200 py-4 transition-all duration-300">
    <div className="space-y-3 px-4">
      {/* helper to produce nav rows with icon + hover bg */}
      {/*
        NOTE: we use inline mouse handlers to apply a light red-gradient background on hover
        instead of changing the text color to white. This keeps readability intact on mobile.
      */}
      <div>
        <button
          type="button"
          onClick={() => handleMenuClick("about")}
          className="flex items-center justify-between w-full px-2 py-2 text-gray-700"
          aria-expanded={openMenu === "about"}
        >
          <span className="flex items-center gap-3">
            <Users style={{ color: BRAND_RED }} className="h-5 w-5" />
            About Us
          </span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${openMenu === "about" ? "rotate-180" : ""}`}
            style={{ color: BRAND_RED }}
          />
        </button>

        {openMenu === "about" && (
          <div className="ml-4 mt-2 space-y-2">
            <button
              type="button"
              onClick={() => { handleNavigation("/about/vaptlabs"); setIsMenuOpen(false); setOpenMenu(null); }}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600"
              onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(90deg, rgba(217,47,97,0.12), rgba(143,15,56,0.08))")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <Shield style={{ color: BRAND_RED }} className="h-4 w-4" />
              About VAPTlabs
            </button>

            <button
              type="button"
              onClick={() => { handleNavigation("/about/clients"); setIsMenuOpen(false); setOpenMenu(null); }}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600"
              onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(90deg, rgba(217,47,97,0.12), rgba(143,15,56,0.08))")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <Globe style={{ color: BRAND_RED }} className="h-4 w-4" />
              Our Clients
            </button>

            <button
  type="button"
  onClick={() => { 
    window.open(
      "https://ik.imagekit.io/5biqvaptlabsnfbqw/Design%201.pdf?updatedAt=1758474539462", 
      "_blank"
    ); 
    setIsMenuOpen(false); 
    setOpenMenu(null); 
  }}
  className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600"
  onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(90deg, rgba(217,47,97,0.12), rgba(143,15,56,0.08))")}
  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
>
  <FileText style={{ color: BRAND_RED }} className="h-4 w-4" />
              {/* <FileText style={{ color: BRAND_RED }} className="h-5 w-5 mr-3" /> */}
     VAPT Services Brochure
</button>

            
          </div>
        )}
      </div>

      {/* Services */}
      <div>
        <button
          type="button"
          onClick={() => handleMenuClick("services")}
          className="flex items-center justify-between w-full px-2 py-2 text-gray-700"
          aria-expanded={openMenu === "services"}
        >
          <span className="flex items-center gap-3">
            <Shield style={{ color: BRAND_RED }} className="h-5 w-5" />
            Services
          </span>
          <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === "services" ? "rotate-180" : ""}`} style={{ color: BRAND_RED }} />
        </button>

        {openMenu === "services" && (
          <div  className="ml-4 mt-2 grid grid-cols-1 gap-2 max-h-[60vh] overflow-y-auto pr-2"
    style={{ scrollbarWidth: "thin" }} >
            {[
              ["/services/web-app-security", "Web App Security", Monitor],
              ["/services/mobile-app-security", "Mobile App Security", Smartphone],
              ["/services/network-penetration-testing", "Network Testing", Network],
              ["/services/api-penetration-testing", "API Testing", Settings],
              ["/services/cloud-penetration-testing", "Cloud Testing", Cloud],
              ["/services/iot-security-testing", "IoT Testing", Cpu],
           ["/services/dark-web-monitoring", "Dark Web Assessment", Search],
              ["/services/secure-code-review", "Secure Code Review", Code],
              ["/services/medical-device-security-testing", "Medical Device Testing", Heart],
              ["/services/threat-modeling", "Threat Modeling", AlertTriangle],
              ["/services/root-cause-analysis", "Root Cause Analysis", Search],
              ["/services/red-teaming", "Red Teaming", UserCheck],
              ["/services/software-composition-analysis", "Software Composition", Package],
            ].map(([path, label, Icon]) => (
              <button
                key={String(path)}
                type="button"
                onClick={() => { handleNavigation(String(path)); setIsMenuOpen(false); setOpenMenu(null); }}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 justify-start"
                onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(90deg, rgba(217,47,97,0.12), rgba(143,15,56,0.08))")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {/* @ts-ignore */}
                <Icon style={{ color: BRAND_RED }} className="h-4 w-4" />
                <span>{String(label)}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Solutions */}
      <div>
        <button
          type="button"
          onClick={() => handleMenuClick("solutions")}
          className="flex items-center justify-between w-full px-2 py-2 text-gray-700"
        >
          <span className="flex items-center gap-3">
            <CheckCircle style={{ color: BRAND_RED }} className="h-5 w-5" />
            Solutions
          </span>
          <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === "solutions" ? "rotate-180" : ""}`} style={{ color: BRAND_RED }} />
        </button>

        {openMenu === "solutions" && (
          <div className="ml-4 mt-2 grid grid-cols-1 gap-2">
            {[
              ["/compliance/pci-dss", "PCI-DSS", Shield],
              ["/compliance/iso-27001", "ISO 27001", Lock],
              ["/compliance/soc2", "SOC2", Users],
              ["/compliance/gdpr", "GDPR", Globe],
              ["/compliance/hipaa", "HIPAA", Heart],
            ].map(([path, label, Icon]) => (
              <button
                key={String(path)}
                type="button"
                onClick={() => { handleNavigation(String(path)); setIsMenuOpen(false); setOpenMenu(null); }}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 justify-start"
                onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(90deg, rgba(217,47,97,0.12), rgba(143,15,56,0.08))")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {/* @ts-ignore */}
                <Icon style={{ color: BRAND_RED }} className="h-4 w-4" />
                <span>{String(label)}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product */}
      <div>
        <button
          type="button"
          onClick={() => handleMenuClick("product")}
          className="flex items-center justify-between w-full px-2 py-2 text-gray-700"
        >
          <span className="flex items-center gap-3">
            <FileText style={{ color: BRAND_RED }} className="h-5 w-5" />
            Product
          </span>
          <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === "product" ? "rotate-180" : ""}`} style={{ color: BRAND_RED }} />
        </button>

        {openMenu === "product" && (
          <div className="ml-4 mt-2 space-y-2">
            <button
              type="button"
              onClick={() => { window.location.href = "https://www.vaptlab.com"; setIsMenuOpen(false); setOpenMenu(null); }}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600"
              onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(90deg, rgba(217,47,97,0.12), rgba(143,15,56,0.08))")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <Shield style={{ color: BRAND_RED }} className="h-4 w-4" />
              RASP Shield SDK
            </button>
            <div className="block text-gray-400 opacity-70 px-3 py-2">AI Gen VAPT (Coming soon)</div>
            <div className="block text-gray-400 opacity-70 px-3 py-2">Secret Sniffer Extension (Coming soon)</div>
          </div>
        )}
      </div>

      {/* Contact */}
      <div className="pt-4">
        <button
          type="button"
          onClick={() => { handleNavigation("/contact"); setIsMenuOpen(false); setOpenMenu(null); }}
          className="w-full text-white px-6 py-2 rounded-full transition-all duration-300"
          style={{ background: RED_GRADIENT }}
        >
          Contact Us
        </button>
      </div>
    </div>
  </div>
)}

        </nav>
      </header>
    </>
  );
};

export default Header;
