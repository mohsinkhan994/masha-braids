import { useEffect } from 'react'
import { services } from '../data/services.js'

const description = 'Плетение кос и авторские причёски в Оренбурге от Маши Шварц. Французские косы, афрокосы, бокс-брейды, корнроу и праздничные причёски.'
const siteUrl = 'https://masha-braids.vercel.app/'
const imageUrl = `${siteUrl}images/first-client-braided-buns-v2.jpg`

export function Seo() {
  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = siteUrl

    document.querySelector('meta[property="og:url"]')?.setAttribute('content', siteUrl)
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', imageUrl)
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', imageUrl)

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${siteUrl}#website`,
          url: siteUrl,
          name: 'Маша и Косы',
          alternateName: 'Маша и Косы Оренбург',
          inLanguage: 'ru-RU',
        },
        {
          '@type': 'HairSalon',
          '@id': `${siteUrl}#business`,
          name: 'Маша и Косы',
          description,
          url: siteUrl,
          image: imageUrl,
          telephone: '+7-903-392-60-04',
          priceRange: '₽₽',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Оренбург',
            addressRegion: 'Оренбургская область',
            addressCountry: 'RU',
          },
          areaServed: {
            '@type': 'City',
            name: 'Оренбург',
          },
          founder: {
            '@type': 'Person',
            name: 'Мария Шварц',
          },
          sameAs: [
            'https://t.me/Mapyc18',
            'https://max.ru/u/f9LHodD0cOK37530jvTt9HpnUUa-mlU_s2EZp3tCnECxp0QdiSDz8gyhYkg',
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Плетение кос и причёски',
            itemListElement: services.map((service) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: service.title,
                description: service.description,
                areaServed: 'Оренбург',
              },
            })),
          },
        },
      ],
    }

    let script = document.getElementById('local-business-schema')
    if (!script) {
      script = document.createElement('script')
      script.id = 'local-business-schema'
      script.type = 'application/ld+json'
      document.head.append(script)
    }
    script.textContent = JSON.stringify(structuredData)
  }, [])

  return null
}
