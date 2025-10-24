import { locales } from '@/i18n';

export async function GET() {
  const baseUrl = 'https://www.konacoffeedonut.com';

  // Define all images with their metadata
  const images = [
    // Hero images
    {
      loc: `${baseUrl}/images/background/background.jpg`,
      caption: 'Kona Coffee Donut - Waikiki Hawaii Background',
      title: 'Hawaiian Coffee Shop Ambiance',
      geoLocation: 'Waikiki, Honolulu, Hawaii',
      license: `${baseUrl}`,
    },
    // Menu images
    {
      loc: `${baseUrl}/images/menu/donut.jpeg`,
      caption: 'Artisan Mochi Donuts - MOCHILAND',
      title: 'Mochi Donuts Menu',
      geoLocation: 'Waikiki, Honolulu, Hawaii',
      license: `${baseUrl}`,
    },
    {
      loc: `${baseUrl}/images/menu/coffee.jpeg`,
      caption: '100% Premium Kona Coffee - Honolulu Coffee',
      title: 'Kona Coffee Menu',
      geoLocation: 'Waikiki, Honolulu, Hawaii',
      license: `${baseUrl}`,
    },
    {
      loc: `${baseUrl}/images/menu/malasada.jpeg`,
      caption: 'Hawaiian Malasada Donuts',
      title: 'Malasada Menu',
      geoLocation: 'Waikiki, Honolulu, Hawaii',
      license: `${baseUrl}`,
    },
    {
      loc: `${baseUrl}/images/menu/bingsu.jpeg`,
      caption: 'Hawaiian Style Bingsu with Fresh Fruits',
      title: 'Bingsu Menu',
      geoLocation: 'Waikiki, Honolulu, Hawaii',
      license: `${baseUrl}`,
    },
    {
      loc: `${baseUrl}/images/menu/hotdog.jpeg`,
      caption: 'Korean Corn Dogs',
      title: 'Korean Hotdog Menu',
      geoLocation: 'Waikiki, Honolulu, Hawaii',
      license: `${baseUrl}`,
    },
    {
      loc: `${baseUrl}/images/menu/acai.jpeg`,
      caption: 'Fresh Acai Bowls with Tropical Fruits',
      title: 'Acai Bowl Menu',
      geoLocation: 'Waikiki, Honolulu, Hawaii',
      license: `${baseUrl}`,
    },
    // Brand logos
    {
      loc: `${baseUrl}/konacoffee.png`,
      caption: 'Kona Coffee Donut Logo',
      title: 'Kona Coffee Donut Brand',
      license: `${baseUrl}`,
    },
    {
      loc: `${baseUrl}/icons/honolulu_coffee.webp`,
      caption: 'Honolulu Coffee Logo - Premium Kona Beans',
      title: 'Honolulu Coffee Brand',
      license: `${baseUrl}`,
    },
    {
      loc: `${baseUrl}/icons/mochi_land_circle.png`,
      caption: 'MOCHILAND Logo - Artisan Mochi Donuts',
      title: 'MOCHILAND Brand',
      license: `${baseUrl}`,
    },
    {
      loc: `${baseUrl}/icons/mochiland.png`,
      caption: 'MOCHILAND Text Logo',
      title: 'MOCHILAND',
      license: `${baseUrl}`,
    },
    // OG Image
    {
      loc: `${baseUrl}/og-image.jpg`,
      caption: 'Kona Coffee Donut - Waikiki Hawaii',
      title: 'Kona Coffee Donut Social Share Image',
      geoLocation: 'Waikiki, Honolulu, Hawaii',
      license: `${baseUrl}`,
    },
  ];

  // Generate XML sitemap for images
  const imageUrlsets = images.map((image) => `
    <url>
      <loc>${baseUrl}</loc>
      <image:image>
        <image:loc>${image.loc}</image:loc>
        <image:caption>${image.caption}</image:caption>
        <image:title>${image.title}</image:title>
        ${image.geoLocation ? `<image:geo_location>${image.geoLocation}</image:geo_location>` : ''}
        <image:license>${image.license}</image:license>
      </image:image>
    </url>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${imageUrlsets}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
