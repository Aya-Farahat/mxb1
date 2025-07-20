import { FiGlobe, FiMenu, FiX } from "react-icons/fi";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: "#b2aaaa52" }}>
      <nav className="navbar navbar-expand-lg shadow-sm py-3">
        <div className="container text-start">
          <a
            className="navbar-brand d-flex align-items-center text-white"
            href="/home"
          >
            <img
              src="/images/logo-removebg-preview.png"
              alt="Logo"
              height="40"
              loading="lazy"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FiMenu size={24} color="white" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link text-white" href="/Investments">
                  Investments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/RealEstate">
                  Real Estate
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/Careers">
                  Careers
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="/About"
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                  <li>
                    <a className="dropdown-item" href="About Us">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Vision">
                      Vision
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item ms-3"></li>
            </ul>

            <button className="btn d-flex align-items-center text-light">
              <FiGlobe className="me-2 fs-5" />
              <span className="fs-5">AR</span>
            </button>
          </div>
        </div>
      </nav>

      <style>{`
        @media (max-width: 991px) {
          .navbar {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 1040 !important;
            transition: background-color 0.3s ease !important;
          }
          .navbar.scrolled {
            background-color: #b8babdff !important;
          }
          .navbar-collapse {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/hero-bg.jpg') !important;
            background-size: cover !important;
            background-position: center !important;
            backdrop-filter: blur(5px) !important;
            z-index: 1050 !important;
            display: none !important;
            padding: 20px !important;
          }
          .navbar-collapse.show {
            display: flex !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
            align-items: flex-start !important;
          }
          .navbar-nav {
            text-align: left !important;
            margin: 60px 0 0 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }
          .nav-item {
            margin: 15px 0 !important;
            list-style: none !important;
          }
          .nav-link {
            font-size: 18px !important;
            color: white !important;
            text-decoration: none !important;
            font-weight: 400 !important;
          }
          .dropdown-menu {
            background-color: transparent !important;
            border: none !important;
            text-align: left !important;
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .dropdown-item {
            color: white !important;
            font-size: 16px !important;
            padding: 8px 0 !important;
          }
          .btn {
            position: absolute !important;
            bottom: 250px !important;
            left: 20px !important;
            font-size: 18px !important;
            color: white !important;
            background: none !important;
            border: none !important;
            padding: 0 !important;
           border-bottom: 1px solid rgba(255, 255, 255, 1) !important; width: 100% !important;
            padding-bottom: 10px !important;
          }
          .navbar-toggler {
            position: relative !important;
            z-index: 1060 !important;
          }
          .navbar-collapse.show + .navbar-toggler {
            position: fixed !important;
            top: 20px !important;
            right: 20px !important;
            z-index: 1060 !important;
          }
          .navbar-collapse.show .navbar-toggler {
            position: fixed !important;
            top: 20px !important;
            right: 20px !important;
            z-index: 1060 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Navbar;
