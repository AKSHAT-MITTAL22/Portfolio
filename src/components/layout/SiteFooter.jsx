import { profile } from "../../data";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.title}
        </p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
    </footer>
  );
}
