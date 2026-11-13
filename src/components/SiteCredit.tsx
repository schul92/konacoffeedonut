/**
 * Sitewide credit line. Rendered once from the locale layout, so it sits below every
 * page's own footer (and gives blog posts, which have no footer, a closing line).
 * Server component: the link is in the initial HTML for crawlers.
 * Links to the www host directly (the apex redirects) and keeps the referrer on purpose.
 */
export default function SiteCredit() {
  return (
    <footer aria-label="Site credit" className="bg-black px-4 py-5 text-center">
      <p className="text-[11px] font-light uppercase tracking-[0.22em] text-white/55">
        Powered by{' '}
        <a
          href="https://www.zoelumos.com"
          target="_blank"
          rel="noopener"
          className="text-white/85 transition-colors hover:text-white"
        >
          ZOE LUMOS
        </a>
      </p>
    </footer>
  );
}
