
import profile from "./assets/profile.png";

function Home() {
  return (
    <section id="home" className="home">

      <div className="home-content">

        <p className="intro">
          HELLO, I'M
          <span></span>
        </p>

        <h1 className="name">
          Payal
          <br />
          <span>Dhokiya.</span>
        </h1>

        <h2>Frontend Web Developer</h2>

        <p className="description">
          I build modern and responsive websites using
          HTML, CSS, JavaScript and React.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="primary-btn">
            View Projects →
          </a>

          <a href="#contact" className="secondary-btn">
            Let's Connect ✉
          </a>
        </div>


      </div>

      <div className="home-image">
        <div className="orbit"></div>
        <img src={profile} alt="Payal Dhokiya" />
      </div>

      <div className="floating-shape shape-one"></div>
      <div className="floating-shape shape-two"></div>

    </section>
  );
}

export default Home;
