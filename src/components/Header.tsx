type NavItems = { label: string; href: string }[];

export default function Header({ navItems }: { navItems: NavItems }) {
  return (
    <header className="header">
      <div>Stef Ballyn</div>
      <nav>
        <ol className="header-navList">
          {navItems.map((item) => {
            return (
              <li key={item.label}>
                <a className="header-navLink" href={item.href}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </header>
  );
}
