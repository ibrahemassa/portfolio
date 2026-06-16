import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Terminal
            size={14}
            style={{ display: 'inline', marginRight: '6px', color: 'var(--ctp-mauve)' }}
          />
          <strong>ibrahemassa</strong> · Software Engineer
        </div>
        <p className="footer-copy">
          Designed &amp; built with <span className="heart">♥</span> in Istanbul
          &nbsp;·&nbsp; Catppuccin Mocha theme
          &nbsp;·&nbsp; © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
