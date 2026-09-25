import profielfoto from "../assets/profielfoto.jpg";
import profielfotoAvif from "../assets/profielfoto.avif";
import profielfotoWebp from "../assets/profielfoto.webp";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="about__title">Over mij</h2>
        <div className="about__card">
          <picture className="about__media">
            <source srcSet={profielfotoAvif} type="image/avif" />
            <source srcSet={profielfotoWebp} type="image/webp" />
            <img
              className="about__image"
              src={profielfoto}
              alt="profielfoto van Stef Ballyn"
              width={1000}
              height={1242}
              loading="lazy"
            />
          </picture>

          <div className="about__content">
            <p className="about__first-paragraph">
              Mijn interesse in programmeren ontstond vanuit een persoonlijke
              behoefte. In mijn vrije tijd studeer ik Thai, eerst met boeken en
              later via online cursussen. Geleidelijk aan groeide het idee om
              zelf een leerplatform te ontwikkelen. Eind 2021 begon ik daarom
              via Udemy HTML, CSS en JavaScript te leren.
            </p>
            <p>
              Wat begon als een persoonlijk project, groeide uit tot een nieuwe
              ambitie. In 2024 startte ik met het Graduaat Programmeren aan de
              Arteveldehogeschool. Inmiddels volg ik mijn laatste opleidingsjaar
              aan HOGENT. Tijdens mijn opleiding verdiepte ik me onder meer in
              React, Next.js, TypeScript en databases. Met ThaiNook, mijn eigen
              platform om Thai te leren, breng ik mijn interesse in taal en
              softwareontwikkeling samen.
            </p>
            <p>
              Naast mijn studies werk ik als nachtbegeleider bij RKJ De Sleutel,
              waar ik jongeren met verslavingsproblematiek begeleid. Mijn
              jarenlange werkervaring heeft me geleerd om zelfstandig en
              zorgvuldig te werken, helder te communiceren en rustig te blijven
              in complexe situaties. Die ervaring neem ik mee in mijn
              ontwikkeling als programmeur.
            </p>
            <p>
              Ik zoek een stageplaats waar ik mijn technische kennis verder kan
              ontwikkelen, kan leren van ervaren ontwikkelaars en een concrete
              bijdrage kan leveren aan een team.
            </p>
            <dl className="about__details">
              <div className="about__detail">
                <dt className="about__label">Locatie:</dt>
                <dd>Gent</dd>
              </div>
              <div className="about__detail">
                <dt className="about__label">Talen:</dt>
                <dd>Nederlands, Frans, Engels</dd>
              </div>
              <div className="about__detail">
                <dt className="about__label">Stageduur:</dt>
                <dd>50 dagen</dd>
              </div>
              <div className="about__detail">
                <dt className="about__label">Stageperiode:</dt>
                <dd>8 februari 2027 t.e.m. 27 mei 2027</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
