import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

export default function RevealOnScroll({ children, className = "", as: Tag = "div", ...props }) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <Tag
      ref={ref}
      className={`${className}${isVisible ? " is-visible" : ""}`.trim()}
      data-reveal
      {...props}
    >
      {children}
    </Tag>
  );
}
