export default function MobileMenu({ scrollToSection, onClose }) {
  const links = [
    { label: "Services", id: "#services" },
    { label: "Portfolio", id: "#portfolio" },
    { label: "About", id: "#about" },
    { label: "Contact", id: "#contact" },
  ];

  return (
    <div id="mobileMenu" className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} aria-hidden="true" />
      <aside className="absolute right-0 top-0 h-full w-11/12 max-w-xs bg-white dark:bg-slate-900 shadow-xl p-6">
        <nav className="flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.id}
              href={l.id}
              onClick={(e) => { e.preventDefault(); scrollToSection(l.id); onClose(); }}
              className="text-lg font-medium text-slate-800 dark:text-slate-100"
            >
              {l.label}
            </a>
          ))}

          <button
            onClick={(e) => { e.preventDefault(); scrollToSection("#contact"); onClose(); }}
            className="mt-4 btn-primary w-full"
          >
            Get a Quote
          </button>
        </nav>
      </aside>
    </div>
  );
}
