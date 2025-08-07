import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Search,
  Youtube,
} from "lucide-react";
import "../../styles/components/HeaderHome.css";
const HeaderHome = () => {
  return (
    <header className="epic-header">
      <div className="header-top">
        <div className="header-container">
          {/* Redes sociales */}
          <div className="social-links">
            <a href="·" className="social-link">
              <Facebook size={18} />
            </a>
            <a href="·" className="social-link">
              <Instagram size={18} />
            </a>
            <a href="·" className="social-link">
              <Linkedin size={18} />
            </a>
            <a href="·" className="social-link">
              <Youtube size={18} />
            </a>
            <a href="·" className="social-link">
              <Github size={18} />
            </a>
          </div>
          {/* Logo */}
          <div className="logo">
            <a href="/" className="logo-link">
              mazr
            </a>
          </div>

          {/* SEARCH */}
          <div className="search-section">
            <div className="search-container">
              <Search size={18} />
              <span className="search-text">SEARCH</span>
            </div>
          </div>
          
        </div>
      </div>

      <div className="header-bottom">
        <div className="header-container">
          {/* menu */}
          <nav className="main-nav">
            <a href="" className="nav-link active">
              Home
            </a>
            <a href="" className="nav-link">
              Blog
            </a>
            <a href="" className="nav-link">
              Project
            </a>
            <a href="" className="nav-link">
              About
            </a>
            <a href="" className="nav-link">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
