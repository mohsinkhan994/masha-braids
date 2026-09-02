export function Logo() {
  return (
    <a className="logo" href="#home" aria-label="Маша и Косы — на главную">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" role="img">
          <circle cx="24" cy="24" r="23" fill="currentColor" />
          <path className="logo-strand logo-strand-left" d="M17 8c8 5 8 11 0 16s-8 11 0 16" />
          <path className="logo-strand logo-strand-center" d="M24 8c-8 5-8 11 0 16s8 11 0 16" />
          <path className="logo-strand logo-strand-right" d="M31 8c8 5 8 11 0 16s-8 11 0 16" />
          <path className="logo-spark" d="M38 7v6M35 10h6" />
        </svg>
      </span>
      <span className="logo-copy">
        <strong className="logo-wordmark">Маша и <span>Косы</span></strong>
        <small>студия плетения</small>
      </span>
    </a>
  )
}
