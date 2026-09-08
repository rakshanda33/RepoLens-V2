function Logo({ size = "default" }) {
  return (
    <span className={`rl-logo rl-logo--${size}`}>
      <span className="rl-logo__mark" aria-hidden="true">
        <svg viewBox="0 0 20 20" width="20" height="20">
          <rect x="2" y="2" width="7" height="7" fill="currentColor" />
          <rect x="11" y="2" width="7" height="7" fill="currentColor" opacity="0.35" />
          <rect x="2" y="11" width="7" height="7" fill="currentColor" opacity="0.35" />
          <rect x="11" y="11" width="7" height="7" fill="currentColor" />
        </svg>
      </span>
      <span className="rl-logo__text">
        Repo<strong>Lens</strong>
      </span>
    </span>
  );
}

export default Logo;
