import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calculator,
  Code2,
  Globe,
  Globe2,
  Minus,
  NotebookPen,
  Plus,
  Scale,
  Search,
  TrendingUp,
  Wallet,
} from 'lucide-react';

const modules = [
  {
    icon: Wallet,
    title: 'Finance',
    href: '/docs/finance',
    description:
      'Planning, budgeting, and the math behind money decisions.',
    notebooks: ['Budgeting basics', 'Compound interest'],
  },
  {
    icon: TrendingUp,
    title: 'Stocks & Markets',
    href: '/docs/stocks',
    description: 'Equities, market mechanics, valuation, portfolio theory.',
    notebooks: ['Market basics'],
  },
  {
    icon: Scale,
    title: 'Microeconomics',
    href: '/docs/micro',
    description: 'Decisions of individuals and firms — supply, demand, elasticity.',
    notebooks: ['Supply & demand'],
  },
  {
    icon: Globe2,
    title: 'Macroeconomics',
    href: '/docs/macro',
    description: 'Economies as a whole — GDP, inflation, unemployment, policy.',
    notebooks: ['GDP & inflation'],
  },
];

const ticker = [
  { label: 'Modules', value: '4' },
  { label: 'Notebooks published', value: '6' },
  { label: 'Worked examples', value: '24' },
  { label: 'Ideas per notebook', value: '1' },
];

const testimonials = [
  {
    quote:
      'One idea per page. I finally understand my budget because each notebook ends with numbers I can check.',
    name: 'Maya Chen',
    title: 'Reader, Finance module',
    mark: 'M',
  },
  {
    quote:
      'The supply and demand notebook did what no lecture ever did. I ran the snippet with my own numbers.',
    name: 'Dario Fontaine',
    title: 'Reader, Microeconomics',
    mark: 'D',
  },
  {
    quote:
      'Short enough to finish on a lunch break, rigorous enough to trust. The search finds any concept instantly.',
    name: 'Priya Nair',
    title: 'Reader, Study group lead',
    mark: 'P',
  },
  {
    quote:
      'We assign these notebooks to every new hire. Flat pages, real math, zero fluff.',
    name: 'Tom Becker',
    title: 'Reader, Team lead',
    mark: 'T',
  },
];

const steps = [
  {
    n: '01',
    title: 'Pick a module',
    text: 'Finance, stocks, micro, or macro — each module opens on its own overview page.',
    href: '/docs',
    cta: 'Browse modules',
  },
  {
    n: '02',
    title: 'Read one idea',
    text: 'Every notebook covers a single concept in about ten minutes, plain language first.',
    href: '/docs/micro/supply-demand',
    cta: 'Try one now',
  },
  {
    n: '03',
    title: 'Run the math',
    text: 'Each notebook ends with a snippet. Change the inputs, re-run it, trust the result.',
    href: '/docs/finance/compound-interest',
    cta: 'See the math',
  },
];

const faqs = [
  {
    q: 'Is this financial advice?',
    a: 'No. These are educational notebooks that teach concepts and methods with worked examples. Verify every figure independently and consult a licensed professional before making financial decisions.',
  },
  {
    q: 'Who are the notebooks for?',
    a: 'Self-taught readers, students, and teams who want the core models without a textbook. If you can read a table, you can read a notebook.',
  },
  {
    q: 'How long does one notebook take?',
    a: 'About ten minutes: one idea, one worked example, one snippet. They are designed to be finished in a single sitting.',
  },
  {
    q: 'How do I add a notebook of my own?',
    a: 'Add an .mdx file inside the module folder under content/docs and list it in that folder\u2019s meta.json. It appears in the sidebar, search, and llms.txt automatically.',
  },
  {
    q: 'Is it free?',
    a: 'Yes. Every notebook is free to read, with no sign-up. The content is Markdown files in a repo — it stays free because it costs almost nothing to host.',
  },
];

export default function HomePage() {
  return (
    <main className="bg-bone text-ink">
      {/* ---------- HERO ---------- */}
      <section className="border-b border-hairline">
        <div className="mx-auto w-full max-w-[1200px] px-6 pt-16 pb-16 sm:pt-24 sm:pb-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div className="text-left">
              <p className="flex items-center gap-2 text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
                <span
                  aria-hidden
                  className="inline-block size-2 rounded-[2px] bg-highlighter-yellow"
                />
                Finance notebooks — four modules, idea by idea
              </p>
              <h1 className="mt-4 text-[40px] font-normal leading-[1] tracking-[0] text-ink sm:text-[48px] lg:text-[64px]">
                Learn money, one notebook at a time.
              </h1>
              <p className="mt-5 max-w-md text-[24px] font-normal leading-[1.17] text-ash">
                Four modules — finance, stocks, micro, macro — with worked
                examples and math you can re-run.
              </p>

              <div className="mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@company.com"
                  aria-label="Email address"
                  className="h-11 w-full rounded-[10px] border border-[rgba(33,33,33,0.1)] bg-paper pr-4 pl-6 text-[14px] font-normal text-ink placeholder:text-ash focus:border-ink focus:outline-none"
                />
                <Link
                  href="/docs"
                  className="inline-flex h-11 shrink-0 items-center justify-center rounded-[6px] bg-highlighter-yellow px-5 text-[14px] font-normal text-ink transition-colors duration-300 ease-out hover:bg-ink hover:text-paper"
                >
                  Get started
                </Link>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Link
                  href="/docs/micro/supply-demand"
                  className="inline-flex h-11 items-center rounded-[6px] border border-ink bg-transparent px-3 text-[14px] font-normal text-ink transition-colors duration-300 ease-out hover:bg-ink hover:text-paper"
                >
                  Start with supply &amp; demand
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex h-11 items-center gap-1 rounded-[6px] px-3 text-[14px] font-normal text-ink transition-colors duration-300 ease-out hover:bg-paper"
                >
                  Browse all notebooks
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['4 modules', '6 notebooks', 'Free forever', 'No sign-up'].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-[6px] border border-hairline bg-paper px-2.5 py-1 text-[13px] font-normal text-ink"
                    >
                      {chip}
                    </span>
                  ),
                )}
              </div>

              <p className="mt-6 text-[13px] font-normal leading-5 text-ash">
                New notebook? Add a{' '}
                <code className="rounded-[6px] border border-hairline bg-paper px-1.5 py-0.5 font-mono text-[12px] text-ink">
                  .mdx
                </code>{' '}
                file to a module folder in{' '}
                <code className="rounded-[6px] border border-hairline bg-paper px-1.5 py-0.5 font-mono text-[12px] text-ink">
                  content/docs
                </code>{' '}
                → list it in that folder&apos;s{' '}
                <code className="rounded-[6px] border border-hairline bg-paper px-1.5 py-0.5 font-mono text-[12px] text-ink">
                  meta.json
                </code>
              </p>
            </div>

            {/* Hero visual — open notebook preview, flat, hairline */}
            <div className="overflow-hidden rounded-[16px] border border-hairline bg-paper">
              <div className="flex items-center gap-2 border-b border-hairline px-5 py-3">
                <span className="size-2.5 rounded-[3px] bg-smoke" />
                <span className="size-2.5 rounded-[3px] bg-smoke" />
                <span className="size-2.5 rounded-[3px] bg-ash" />
                <span className="ml-3 rounded-[6px] border border-hairline bg-bone px-2.5 py-1 font-mono text-[12px] font-normal text-ash">
                  ledger.local/docs/micro/supply-demand
                </span>
              </div>
              <div className="grid sm:grid-cols-[180px_1fr]">
                <div className="hidden border-r border-hairline bg-paper p-5 sm:block">
                  <p className="text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
                    Modules
                  </p>
                  <ul className="mt-3 space-y-1">
                    {['Finance', 'Stocks', 'Micro', 'Macro'].map(
                      (item, i) => (
                        <li
                          key={item}
                          className={`rounded-[6px] px-3 py-2 text-[14px] font-normal ${
                            i === 2
                              ? 'bg-highlighter-yellow text-ink'
                              : 'text-ash'
                          }`}
                        >
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                  <div className="mt-6 rounded-[12px] bg-bone p-4">
                    <p className="text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
                      Planned
                    </p>
                    <p className="mt-1 text-[20px] font-normal leading-[1.3] text-ink">
                      4 modules
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
                        Module 03
                      </p>
                      <p className="mt-1 text-[28px] font-normal leading-[1.14] text-ink">
                        Supply &amp; demand
                      </p>
                    </div>
                    <Link
                      href="/docs/micro/supply-demand"
                      className="inline-flex h-11 shrink-0 items-center rounded-[6px] bg-highlighter-yellow px-5 text-[14px] font-normal text-ink transition-colors duration-300 ease-out hover:bg-ink hover:text-paper"
                    >
                      Read now
                    </Link>
                  </div>
                  <div className="mt-5 overflow-hidden rounded-[16px] border border-hairline">
                    {[
                      ['Price $10', 'Qd 100 / Qs 40', 'Shortage'],
                      ['Price $6', 'Qd 60 / Qs 60', 'Equilibrium'],
                      ['Price $3', 'Qd 20 / Qs 85', 'Surplus'],
                      ['Tax +$2', 'Buyer $7 / Seller $5', 'Wedge'],
                    ].map(([row, amt, status]) => (
                      <div
                        key={row}
                        className="flex items-center justify-between gap-3 border-b border-hairline bg-paper px-4 py-3 last:border-b-0"
                      >
                        <span className="text-[14px] font-normal text-ink">
                          {row}
                        </span>
                        <span className="flex items-center gap-3">
                          <span className="font-mono text-[13px] font-normal text-ash">
                            {amt}
                          </span>
                          <span
                            className={`rounded-[6px] px-2 py-1 text-[10px] font-normal uppercase leading-[1.5] tracking-[0.018em] ${
                              status === 'Equilibrium'
                                ? 'bg-highlighter-yellow text-ink'
                                : 'border border-hairline bg-bone text-ash'
                            }`}
                          >
                            {status}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-[13px] font-normal leading-5 text-ash">
                    Every notebook ends with numbers you can check — tables
                    first, runnable math second.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MODULES ---------- */}
      <section id="modules" className="border-b border-hairline bg-paper">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 sm:py-24">
          <p className="text-left text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
            01 — Four modules
          </p>
          <h2 className="mt-3 max-w-xl text-left text-[28px] font-normal leading-[1.14] text-ink sm:text-[40px] sm:leading-[1.05]">
            Pick a module. Open a notebook.
          </h2>
          <p className="mt-3 max-w-lg text-left text-[16px] font-normal leading-[1.5] text-ash">
            Each module is its own set of notebooks. Click one to land on its
            overview, then open any notebook inside it.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {modules.map((m) => (
              <Link
                key={m.title}
                href={m.href}
                className="group rounded-[16px] border border-hairline bg-paper p-5 text-left transition-colors duration-300 ease-out hover:border-ink sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-9 items-center justify-center rounded-[6px] bg-bone">
                    <m.icon className="size-4 text-ink" />
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-ash transition-colors duration-300 ease-out group-hover:bg-highlighter-yellow group-hover:text-ink" />
                </div>
                <p className="mt-4 flex items-center gap-1 text-[20px] font-normal leading-[1.3] text-ink">
                  {m.title}
                </p>
                <p className="mt-1 text-[14px] font-normal leading-6 text-ash">
                  {m.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.notebooks.map((n) => (
                    <span
                      key={n}
                      className="rounded-[6px] border border-hairline bg-bone px-2 py-1 text-[13px] font-normal text-ink"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- LIVE COUNTER TICKER ---------- */}
      <section aria-label="Live metrics" className="bg-obsidian">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-5">
          <div className="flex items-start justify-between gap-8 overflow-x-auto">
            {ticker.map((t) => (
              <div key={t.label} className="min-w-[160px] text-left">
                <p className="text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
                  {t.label}
                </p>
                <p className="mt-1 text-[14px] font-normal text-paper">
                  {t.value}
                </p>
              </div>
            ))}
            <div className="min-w-[160px] text-left">
              <p className="text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
                Status
              </p>
              <p className="mt-1 inline-flex items-center gap-2 text-[14px] font-normal text-paper">
                <span className="inline-block size-2 rounded-[2px] bg-highlighter-yellow" />
                Publishing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="border-b border-hairline">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div className="text-left">
              <p className="text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
                How it works
              </p>
              <h2 className="mt-3 text-[28px] font-normal leading-[1.14] text-ink sm:text-[40px] sm:leading-[1.05]">
                Three steps, ten minutes.
              </h2>
              <p className="mt-3 max-w-md text-[16px] font-normal leading-[1.5] text-ash">
                No accounts, no courses, no paywalls. The whole product is
                reading one page and running one snippet.
              </p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {steps.map((s) => (
                <li
                  key={s.n}
                  className="flex flex-col rounded-[16px] border border-hairline bg-paper p-5 text-left"
                >
                  <span className="font-mono text-[13px] font-normal text-ash">
                    {s.n}
                  </span>
                  <p className="mt-2 text-[16px] font-normal leading-[1.5] text-ink">
                    {s.title}
                  </p>
                  <p className="mt-1 flex-1 text-[14px] font-normal leading-6 text-ash">
                    {s.text}
                  </p>
                  <Link
                    href={s.href}
                    className="mt-4 inline-flex items-center gap-1 text-[14px] font-normal text-ink underline decoration-highlighter-yellow decoration-2 underline-offset-4 transition-colors duration-300 ease-out hover:bg-highlighter-yellow"
                  >
                    {s.cta} <ArrowRight className="size-4" />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- FEATURE PAIRS ---------- */}
      <section className="border-b border-hairline">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 sm:py-24">
          <p className="text-left text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
            02 — System
          </p>
          <h2 className="mt-3 max-w-xl text-left text-[28px] font-normal leading-[1.14] text-ink sm:text-[40px] sm:leading-[1.05]">
            One file per notebook, zero CMS.
          </h2>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
            <div className="text-left">
              <p className="text-[20px] font-normal leading-[1.3] text-ink">
                Write MDX, get a notebook.
              </p>
              <p className="mt-3 max-w-md text-[16px] font-normal leading-[1.5] text-ash">
                Drop a file in{' '}
                <code className="rounded-[6px] border border-hairline bg-paper px-1.5 py-0.5 font-mono text-[13px] text-ink">
                  content/docs
                </code>
                , order it in{' '}
                <code className="rounded-[6px] border border-hairline bg-paper px-1.5 py-0.5 font-mono text-[13px] text-ink">
                  meta.json
                </code>
                . The compact notebook layout, search, llms.txt, and OG
                images ship with the starter.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href="/docs"
                  className="inline-flex h-11 items-center rounded-[6px] bg-highlighter-yellow px-5 text-[14px] font-normal text-ink transition-colors duration-300 ease-out hover:bg-ink hover:text-paper"
                >
                  Open the notebooks
                </Link>
                <Link
                  href="/docs/finance/compound-interest"
                  className="inline-flex h-11 items-center rounded-[6px] border border-ink bg-transparent px-3 text-[14px] font-normal text-ink transition-colors duration-300 ease-out hover:bg-ink hover:text-paper"
                >
                  Try a notebook
                </Link>
              </div>
              <div className="mt-6 grid gap-2">
                {[
                  { icon: Search, text: 'Full-text search across every notebook, in milliseconds.' },
                  { icon: Calculator, text: 'Runnable snippets — readers re-run the math with their own numbers.' },
                  { icon: BookOpen, text: 'Compact notebook layout: sidebar, page, and on-this-page TOC.' },
                ].map((row) => (
                  <div
                    key={row.text}
                    className="flex items-center gap-3 rounded-[12px] bg-paper px-4 py-3"
                  >
                    <span className="flex size-8 items-center justify-center rounded-[6px] bg-bone">
                      <row.icon className="size-4 text-ink" />
                    </span>
                    <span className="text-[14px] font-normal text-ink">
                      {row.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[16px] border border-hairline bg-paper">
              <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
                <span className="font-mono text-[12px] font-normal text-ash">
                  content/docs/meta.json
                </span>
                <span className="rounded-[6px] border border-hairline bg-bone px-2 py-1 text-[10px] font-normal uppercase leading-[1.5] tracking-[0.018em] text-ash">
                  Order
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-[1.7]">
                <code>
                  <span className="text-ash">{'{\n'}</span>
                  <span className="text-ash">{'  "title": '}</span>
                  <span className="text-ink">{'"Finance Notebooks",\n'}</span>
                  <span className="text-ash">{'  "pages": [\n'}</span>
                  <span className="text-ink">{'    "index",\n'}</span>
                  <span className="text-ink">{'    "budgeting-basics",\n'}</span>
                  <span className="text-ink">{'    "compound-interest"\n'}</span>
                  <span className="text-ash">{'  ]\n}'}</span>
                </code>
              </pre>
              <div className="flex items-center gap-2 border-t border-hairline px-5 py-3">
                <NotebookPen className="size-4 text-ink" />
                <span className="text-[13px] font-normal text-ash">
                  Tables, callouts, and cards work in every notebook.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: 'One idea per notebook',
                text: 'Budgeting, interest, debt — each notebook covers a single concept with a worked example.',
              },
              {
                icon: Calculator,
                title: 'Math you can re-run',
                text: 'Every formula ships as a snippet. Change the inputs, run it, trust the result.',
              },
              {
                icon: Search,
                title: 'Searchable like a ledger',
                text: 'Pre-wired /api/search finds any notebook, heading, or table in milliseconds.',
              },
              {
                icon: Code2,
                title: 'MDX native',
                text: 'Markdown with tables, callouts, code, cards, and tabs — no setup required.',
              },
              {
                icon: Globe,
                title: 'SEO & llms.txt',
                text: 'Each notebook gets metadata, an OG image, and model-readable text for free.',
              },
              {
                icon: NotebookPen,
                title: 'Notebook layout',
                text: 'Fumadocs notebook UI: compact sidebar reading with an on-this-page rail.',
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-[16px] border border-hairline bg-paper p-5 text-left transition-colors duration-300 ease-out hover:border-ink"
              >
                <span className="flex size-8 items-center justify-center rounded-[6px] bg-bone">
                  <f.icon className="size-4 text-ink" />
                </span>
                <p className="mt-4 text-[16px] font-normal leading-[1.5] text-ink">
                  {f.title}
                </p>
                <p className="mt-1 text-[14px] font-normal leading-6 text-ash">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="border-b border-hairline bg-paper">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 sm:py-24">
          <div className="flex items-end justify-between gap-6">
            <div className="text-left">
              <p className="text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
                03 — Readers
              </p>
              <h2 className="mt-3 max-w-xl text-[28px] font-normal leading-[1.14] text-ink sm:text-[40px] sm:leading-[1.05]">
                A journal readers keep open.
              </h2>
            </div>
            <Link
              href="/docs"
              className="hidden shrink-0 items-center gap-1 rounded-[6px] px-3 py-2 text-[14px] font-normal text-ink transition-colors duration-300 ease-out hover:bg-bone sm:inline-flex"
            >
              All notebooks
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="w-[300px] shrink-0 rounded-[16px] border border-hairline bg-paper p-5 text-left sm:w-[340px]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-[6px] bg-bone text-[14px] font-normal text-ink">
                    {t.mark}
                  </span>
                  <figcaption>
                    <p className="text-[16px] font-normal leading-[1.5] text-ink">
                      {t.name}
                    </p>
                    <p className="text-[13px] font-normal leading-5 text-ash">
                      {t.title}
                    </p>
                  </figcaption>
                </div>
                <blockquote className="mt-4 text-[16px] font-normal leading-[1.5] text-ink">
                  “{t.quote}”
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- EXPLORE NOTEBOOKS ---------- */}
      <section>
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 sm:py-24">
          <p className="text-left text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
            04 — Reading order
          </p>
          <h2 className="mt-3 max-w-xl text-left text-[28px] font-normal leading-[1.14] text-ink sm:text-[40px] sm:leading-[1.05]">
            Suggested reading order.
          </h2>
          <p className="mt-3 max-w-lg text-left text-[16px] font-normal leading-[1.5] text-ash">
            Micro first, because macro aggregates what micro explains. Finance
            next, because it applies them. Markets last, because they require
            the economics underneath.
          </p>
          <div className="mt-8 overflow-hidden rounded-[16px] border border-hairline">
            <div className="flex items-center gap-4 border-b border-hairline bg-bone px-5 py-3">
              <span className="text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
                Order
              </span>
              <span className="text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
                Module
              </span>
              <span className="ml-auto text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
                Notebook
              </span>
            </div>
            {[
              ['1', 'Microeconomics', 'Supply & demand', '/docs/micro/supply-demand'],
              ['2', 'Macroeconomics', 'GDP & inflation', '/docs/macro/gdp-and-inflation'],
              ['3', 'Finance', 'Budgeting basics', '/docs/finance/budgeting-basics'],
              ['4', 'Finance', 'Compound interest', '/docs/finance/compound-interest'],
              ['5', 'Stocks & Markets', 'Market basics', '/docs/stocks/market-basics'],
            ].map(([n, module, notebook, href]) => (
              <Link
                key={n}
                href={href}
                className="group flex items-center gap-4 border-b border-hairline bg-paper px-5 py-4 transition-colors duration-300 ease-out last:border-b-0 hover:bg-bone"
              >
                <span className="font-mono text-[13px] font-normal text-ash">
                  {n}
                </span>
                <span className="rounded-[6px] border border-hairline bg-bone px-2 py-1 text-[13px] font-normal text-ink">
                  {module}
                </span>
                <span className="text-[16px] font-normal leading-[1.5] text-ink">
                  {notebook}
                </span>
                <ArrowUpRight className="ml-auto size-4 shrink-0 text-ash transition-colors duration-300 ease-out group-hover:bg-highlighter-yellow group-hover:text-ink" />
              </Link>
            ))}
          </div>
          <Link
            href="/docs"
            className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-normal text-ink underline decoration-highlighter-yellow decoration-2 underline-offset-4 transition-colors duration-300 ease-out hover:bg-highlighter-yellow"
          >
            Browse all notebooks <ArrowRight className="size-4" />
          </Link>

          {/* CTA card — left aligned */}
          <div className="mt-12 rounded-[16px] border border-hairline bg-paper p-6 sm:p-10">
            <div className="grid items-start gap-8 lg:grid-cols-[1.3fr_1fr]">
              <div className="text-left">
                <p className="text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
                  Next step
                </p>
                <h3 className="mt-3 text-[28px] font-normal leading-[1.14] text-ink sm:text-[40px] sm:leading-[1.05]">
                  Read your first notebook tonight.
                </h3>
                <p className="mt-3 max-w-md text-[16px] font-normal leading-[1.5] text-ash">
                  Ten minutes, one idea, real numbers. Start with supply
                  and demand, then work up to GDP, then to your own money.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Link
                    href="/docs/micro/supply-demand"
                    className="inline-flex h-11 items-center rounded-[6px] bg-highlighter-yellow px-5 text-[14px] font-normal text-ink transition-colors duration-300 ease-out hover:bg-ink hover:text-paper"
                  >
                    Start reading
                  </Link>
                  <Link
                    href="/docs"
                    className="inline-flex h-11 items-center rounded-[6px] border border-ink bg-transparent px-3 text-[14px] font-normal text-ink transition-colors duration-300 ease-out hover:bg-ink hover:text-paper"
                  >
                    All notebooks
                  </Link>
                </div>
              </div>
              <div className="rounded-[12px] bg-bone p-5 text-left">
                <p className="text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
                  Notebook recipe
                </p>
                <ul className="mt-3 space-y-3">
                  {[
                    'One idea per notebook',
                    'Example with real numbers',
                    'Math readers can re-run',
                    'Four modules, six notebooks',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[14px] font-normal text-ink"
                    >
                      <span className="inline-block size-2 shrink-0 rounded-[2px] bg-highlighter-yellow" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-6 text-left text-[13px] font-normal leading-5 text-ash">
            Educational content, not financial advice · Built with Next.js 16
            · Fumadocs notebook layout · Tailwind CSS 4
          </p>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="border-t border-hairline bg-paper">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 sm:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.6fr]">
            <div className="text-left">
              <p className="text-[10px] font-normal uppercase leading-[2.2] tracking-[0.018em] text-ash">
                05 — Questions
              </p>
              <h2 className="mt-3 text-[28px] font-normal leading-[1.14] text-ink sm:text-[40px] sm:leading-[1.05]">
                Asked before you ask.
              </h2>
              <p className="mt-3 max-w-md text-[16px] font-normal leading-[1.5] text-ash">
                The short answers. Every long answer is a notebook.
              </p>
            </div>
            <div className="grid gap-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-[16px] border border-hairline bg-paper text-left transition-colors duration-300 ease-out open:border-ink"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
                    <span className="text-[16px] font-normal leading-[1.5] text-ink">
                      {f.q}
                    </span>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-[6px] bg-bone">
                      <Plus className="size-4 text-ink group-open:hidden" />
                      <Minus className="hidden size-4 text-ink group-open:block" />
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-[14px] font-normal leading-6 text-ash">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
