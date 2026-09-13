import { useEffect, useMemo } from "react";
import { navigation, profile } from "../../data";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useMobileNav } from "../../hooks/useMobileNav";
import { useScrollHeader } from "../../hooks/useScrollHeader";
import Icon from "../ui/Icon";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  const isScrolled = useScrollHeader();
  const { isOpen, toggle, close } = useMobileNav();
  const sectionIds = useMemo(() => navigation.map((item) => item.href.slice(1)), []);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);
    return () => document.body.classList.remove("nav-open");
  }, [isOpen]);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label={`${profile.name} home`}>
        <span className="brand-mark">{profile.initials}</span>
        <span>{profile.name}</span>
      </a>

      <nav className={`site-nav${isOpen ? " is-open" : ""}`} aria-label="Primary">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeId === item.href.slice(1) ? "is-active" : undefined}
            onClick={close}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <ThemeToggle />
        <a className="header-cta" href={profile.resumeUrl} target="_blank" rel="noreferrer">
          <Icon name="Download" />
          <span>Resume</span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={toggle}
        >
          <Icon name={isOpen ? "X" : "Menu"} />
        </button>
      </div>
    </header>
  );
}
