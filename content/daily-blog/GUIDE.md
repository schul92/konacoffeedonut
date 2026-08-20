# Daily Blog Publishing Guide (자동 루틴용)

You are publishing ONE blog post for konacoffeedonut.com. Follow every step in order.
If any preflight fails, STOP, leave the repo clean (git checkout .), and report exactly what was missing.

## 0. Preflight

1. `git pull` (resolve nothing — if pull fails, stop and report).
2. Verify these exist: `.env.local` (with `GEMINI_API_KEY` and `CLOVER_API_TOKEN`), `google-service-account.json`.
3. `gh auth status` must show a logged-in account with push access to schul92/konacoffeedonut
   (if push later fails with 403: `gh auth switch --hostname github.com --user schul92`).

## 1. Pick the topic

Read `content/daily-blog/topics.json`. Take the FIRST entry with `"status": "pending"`.
- Skip a SEASONAL topic whose window has passed (mark it `"skipped"`).
- If no pending topics remain, stop and report "queue empty — need new topics."
- Sanity check: `ls "src/app/[locale]/blog/"` — if a very similar slug already exists, mark topic `"duplicate"` and take the next one.

## 2. Verify every fact (절대 규칙)

- **Prices**: any price you mention MUST be verified against Clover POS at write time:
  read token from `.env.local` (`CLOVER_API_TOKEN`), then
  `GET https://api.clover.com/v3/merchants/RFKS9SXJFCJX1/items?limit=1000&offset=N&expand=categories`
  (READ ONLY — never POST to Clover from this routine). If you cannot verify a price, write the post without naming it.
- **Store facts** (do not deviate): Kona Coffee Donut, 2142 Kalākaua Ave, Honolulu, HI 96815 · open 7 AM–9 PM daily · ~5 min walk from Waikiki Beach · phone (808) 304-1808 · Mochi Land = the drink/dessert counter inside.
- Never claim gluten-free, vegan, or allergy safety. Never mention competitors by name negatively.

## 3. Write the post

Create `src/app/[locale]/blog/<slug>/page.tsx` and `layout.tsx`.
**Copy the exact structure of `src/app/[locale]/blog/boba-waikiki/`** (RevenueBlogPost component, config + content per locale).

Content requirements (SEO + GEO):
- 5 locales: `en` full-depth (intro ~120 words, 3–5 sections, one `pullout`, 4–6 FAQ), `ja`/`ko`/`zh`/`es` condensed like the boba-waikiki example.
- **Title** ≤ 65 chars, front-load the answer/keyword, include one concrete hook (price, "open 7 AM", "explained by the shop") — AI Overviews can't replicate first-party hooks.
- **Meta description** 140–160 chars, includes price + location + hours when relevant.
- **FAQ answers must be self-contained** (name + address + price in the answer itself) — these are what AI search engines quote.
- Every post ends with visitCTA + finalCTA driving an in-store visit (revenue-first: the post must give a reason to walk in TODAY).
- Dates: use the real current date ("Published <Month Year>").
- layout.tsx: copy boba-waikiki/layout.tsx, update title/description/keywords (6–9 keyword variants incl. "near me" forms), og image path, and ALL alternates URLs to the new slug.

## 4. Hero image

`python3 scripts/generate_blog_hero.py <slug> "<photoreal food-photography prompt, no text/logos/people>"`
→ saves `public/images/blog/<slug>.jpeg` (1200×675). Verify the file exists and is >30KB.

## 5. Register the post (3 places)

1. `src/app/sitemap.ts`: add `'/blog/<slug>'` to the blog list (after the latest batch comment), plus priority `0.85` and changefreq `'weekly'` entries next to the other blog entries.
2. `src/app/[locale]/blog/page.tsx`: add a card at the TOP of each of the 5 locale `posts: [` arrays (translate title/excerpt per locale; category in that locale's style; readTime 4–5).

## 6. Verify build

- `npx tsc --noEmit` → must pass.
- `npm run build` → must finish without errors (check the tail).
If either fails and you cannot fix it in 2 attempts: `git checkout . && git clean -fd src/app content public/images/blog/<slug>.jpeg` and report the error.

## 7. Publish

1. Update the topic entry in `content/daily-blog/topics.json`: `"status": "published", "published": "YYYY-MM-DD"`.
2. `git add -A && git commit -m "feat(blog): <slug> (daily)" && git push` (403 → gh auth switch, retry once).
3. Submit to Google Indexing API:
   `python3 scripts/submit_indexing.py <slug>` (submits all 5 locale URLs; uses google-service-account.json).

## 8. Report

End with: slug, EN title, live URL (https://www.konacoffeedonut.com/en/blog/<slug>), what prices were verified, indexing submission count, and the next pending topic in the queue.
