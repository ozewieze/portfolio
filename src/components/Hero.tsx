import ArrowRight from "./icons/ArrowRight";
export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__container">
        <p className="hero__eyebrow">
          junior software developer<span aria-hidden="true">&middot;</span>
          beschikbaar voor stage
        </p>
        <h1 className="hero__title">Stef Ballyn</h1>
        <p className="hero__intro">
          Ik leer web- en mobiele applicaties bouwen vanuit mijn eigen ideeën.
        </p>
        <p className="hero__description">
          Ik werk als hulpverlener en volg daarnaast een opleiding
          webdevelopment. De voorbije twee jaar bouwde ik ervaring op met onder
          meer HTML, CSS, JavaScript, React, Node.js, databases en Craft CMS.
          Mijn interesse ligt vooral bij het zelfstandig ontwikkelen van web- en
          mobiele applicaties. Ik wil me daarom verder verdiepen in React,
          Next.js en React Native. Met projecten zoals ThaiNook en een geplande
          grappling-logapp probeer ik die kennis stap voor stap om te zetten in
          echte producten.
        </p>
        <div className="hero__buttons">
          <a href="#projects" className="button button--primary">
            Bekijk projecten
            <ArrowRight />
          </a>
          <a href="#contact" className="button button--secondary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
