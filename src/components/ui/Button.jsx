import Icon from "./Icon";

export default function Button({
  href,
  variant = "primary",
  icon,
  children,
  external = false,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  ...props
}) {
  const classes = `button button-${variant} ${className}`.trim();

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        {...props}
      >
        {icon && <Icon name={icon} />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled} {...props}>
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </button>
  );
}
