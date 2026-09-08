function Logo({ size = "default" }) {
  return (
    <span className={`rl-logo rl-logo--${size}`}>
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        aria-hidden="true"
        className="rl-logo__mark"
      >
        <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 20L15.2 15.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 10.5H13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M10.5 8V13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0" />
        <path d="M8.5 8L13 13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
      </svg>
      <span className="rl-logo__text">
        Repo<strong>Lens</strong>
      </span>
    </span>
  );
}

export default Logo;
