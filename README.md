# Маша и Косы

React and Vite landing page for Mariia Shvarts' hairstyling business in Orenburg.

## Development

```bash
npm install
cp .env.example .env
npm run dev
```

## Email booking notifications

The booking form submits directly from the browser to Web3Forms.

1. Create an access key at https://web3forms.com/ using the inbox that should receive bookings.
2. For local development, put the key in `.env`:

   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_real_access_key
   ```

3. In Vercel, add the same variable under **Project Settings → Environment Variables** for Production, Preview, and Development.
4. Redeploy the project so Vite includes the setting in the new build.
5. In the Web3Forms dashboard, restrict submissions to the production domain when it is available.

The Web3Forms access key is intended for browser use. Never add an email password or a private provider API key to a `VITE_` variable.

## Production build

```bash
npm run build
```

## Search visibility after deployment

The page includes Russian local-search metadata, crawl directives, a favicon, social preview tags, a sitemap, and `HairSalon` structured data. The canonical production URL is `https://masha-braids.vercel.app/`.

After the final Vercel URL or custom domain is ready:

1. Add the site to Google Search Console and Yandex Webmaster.
2. Request indexing for the home page.
3. Create matching Google Business Profile and Yandex Business listings for Orenburg.
4. Add the final domain to those profiles and keep the business name, phone, city, and photos consistent.
