
function Navbar() {
  return (
    <nav className="navbar">
     
        <div className="social-links">
          <a href="https://wa.me/91YOURNUMBER" target="_blank">WhatsApp</a>
          <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
          <a href="https://github.com/" target="_blank">GitHub</a>
        </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#templates">Templates</a>
        <a href="#contact">Contact</a>
        
      </div>

      <a href="/resume.pdf" className="cv-button" download>
        Download CV ↓
      </a>
    </nav>
  );
}

export default Navbar;
