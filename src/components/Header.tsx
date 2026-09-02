type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="header" id="header">
      <div className="container header__container">
        <a className="header__name" href="#header">
          Stef Ballyn
        </a>
        <nav>
          <ul className="header__nav-list">
            {navItems.map((item) => {
              return (
                <li key={item.label}>
                  <a className="header__nav-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
