import Menu from "./icons/Menu.tsx";
import CloseIcon from "./icons/CloseIcon.tsx";
import { useEffect, useRef } from "react";
type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Projecten", href: "#projects" },
  { label: "Over mij", href: "#about" },
  { label: "Vaardigheden", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openMenu() {
    dialogRef.current?.showModal();
  }
  function closeMenu() {
    dialogRef.current?.close();
  }

  // A click on the backdrop targets the dialog itself; anything inside the
  // panel targets a descendant.
  function closeOnBackdropClick(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) closeMenu();
  }

  // The hamburger is hidden above the breakpoint, so a drawer left open while
  // the viewport grows would be unreachable — and keep the page inert.
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 48rem)");
    function handleChange(event: MediaQueryListEvent) {
      if (!event.matches) closeMenu();
    }
    mobile.addEventListener("change", handleChange);
    return () => mobile.removeEventListener("change", handleChange); //cleanup
  }, []);

  return (
    <header className="header" id="header">
      <div className="container header__container">
        <a className="header__name" href="#header">
          Stef Ballyn
        </a>
        <button
          className="header__menu"
          onClick={openMenu}
          aria-label="Open menu"
          aria-haspopup="dialog"
        >
          <Menu />
        </button>
        <dialog
          className="mobile-menu"
          ref={dialogRef}
          onClick={closeOnBackdropClick}
          aria-labelledby="mobile-menu__title"
        >
          <div className="mobile-menu__panel">
            <div className="mobile-menu__header">
              <h2 className="mobile-menu__title" id="mobile-menu__title">
                Menu
              </h2>
              <button
                className="mobile-menu__close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>
            <ul className="mobile-menu__nav-list">
              {navItems.map((item) => {
                return (
                  <li key={item.label}>
                    <a
                      className="mobile-menu__nav-link"
                      href={item.href}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </dialog>

        <nav className="header__nav">
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
