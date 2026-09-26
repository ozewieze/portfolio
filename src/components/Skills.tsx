import { categories } from "../data/skills.ts";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Vaardigheden</h2>
        <div className="skills__grid">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="skills__subtitle">{category.title}</h3>
              <ul className="skills__items">
                {category.skills.map((skill) => (
                  <li key={skill} className="skills__item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
