import Link from 'next/link';

const navLinks = [
  { label: 'Finance', href: '/docs/finance' },
  { label: 'Stocks', href: '/docs/stocks' },
  { label: 'Micro', href: '/docs/micro' },
  { label: 'Macro', href: '/docs/macro' },
  { label: 'All notebooks', href: '/docs' },
];

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <div className="flex min-h-screen flex-col bg-bone font-[family-name:var(--font-lausanne)] text-ink">
      {/* Announcement bar — 40px, white, hairline bottom */}
      <div className="flex h-10 items-center justify-center border-b border-hairline bg-paper px-4">
        <p className="text-[13px] font-normal leading-5 text-ink">
          Finance notebooks — four modules, one idea per page
          <Link
            href="/docs"
            className="ml-2 underline underline-offset-2 transition-colors hover:bg-bone"
          >
            Browse all
          </Link>
        </p>
      </div>

      {/* Sticky nav — white, hairline bottom, inset highlight */}
      <header
        className="sticky top-0 z-50 border-b border-hairline bg-paper"
        style={{
          boxShadow: 'rgba(255, 255, 255, 0.6) 0px 0px 2px 0px inset',
        }}
      >
        <div className="mx-auto flex h-[62px] w-full max-w-[1200px] items-center justify-between gap-4 px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="flex size-6 items-center justify-center rounded-[6px] bg-ink text-[13px] text-paper"
            >
              L
            </span>
            <span className="text-[16px] font-normal tracking-tight text-ink">
              Ledger
            </span>
            <span className="rounded-[6px] border border-hairline bg-bone px-2 py-0.5 text-[10px] uppercase leading-[2.2] tracking-[0.018em] text-ash">
              Notebooks
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="rounded-[6px] px-3 py-2 text-[14px] font-normal text-ink transition-colors duration-300 hover:bg-bone"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/docs"
              className="hidden rounded-[6px] px-3 py-2 text-[14px] font-normal text-ink transition-colors duration-300 hover:bg-bone sm:block"
            >
              Sign in
            </Link>
            <Link
              href="/docs"
              className="inline-flex h-11 items-center rounded-[6px] bg-highlighter-yellow px-5 text-[14px] font-normal text-ink transition-colors duration-300 ease-out hover:bg-ink hover:text-paper"
            >
              Start reading
            </Link>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col">{children}</div>

      {/* Footer — inverted obsidian panel */}
      <footer className="bg-obsidian text-paper">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="flex size-6 items-center justify-center rounded-[6px] bg-paper text-[13px] text-ink"
                >
                  L
                </span>
                <span className="text-[16px] font-normal">Ledger</span>
              </div>
              <p className="mt-4 max-w-xs text-[14px] font-normal leading-6 text-paper/70">
                Finance notebooks: one money idea per page, with worked
                examples and math you can re-run.
              </p>
              <Link
                href="/docs"
                className="mt-6 inline-flex h-11 items-center rounded-[6px] bg-highlighter-yellow px-5 text-[14px] font-normal text-ink transition-colors duration-300 ease-out hover:bg-paper"
              >
                Open the notebooks
              </Link>
            </div>
            {[
              {
                h: 'Modules',
                items: [
                  ['Finance', '/docs/finance'],
                  ['Stocks & Markets', '/docs/stocks'],
                  ['Microeconomics', '/docs/micro'],
                  ['Macroeconomics', '/docs/macro'],
                ],
              },
              {
                h: 'Start here',
                items: [
                  ['All notebooks', '/docs'],
                  ['Supply & demand', '/docs/micro/supply-demand'],
                  ['GDP & inflation', '/docs/macro/gdp-and-inflation'],
                  ['llms.txt', '/llms.txt'],
                ],
              },
              {
                h: 'Project',
                items: [
                  ['Fumadocs', 'https://fumadocs.dev'],
                  ['Notebook layout', 'https://fumadocs.dev/docs/ui/layouts/notebook'],
                  ['GitHub', 'https://github.com/fuma-nama/fumadocs'],
                ],
              },
            ].map((col) => (
              <div key={col.h}>
                <p className="text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
                  {col.h}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.items.map(([label, href]) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-[14px] font-normal text-paper/80 transition-colors duration-300 hover:text-paper"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-paper/15 pt-6 sm:flex-row">
            <p className="text-[13px] font-normal text-paper/60">
              © 2026 Ledger finance notebooks. Educational content, not
              financial advice.
            </p>
            <p className="text-[13px] font-normal text-paper/60">
              Set in Inter · 400 only · ss01 on
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
