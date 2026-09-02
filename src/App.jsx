import { useCallback, useState } from 'react'
import { ArrowDown, ArrowRight, Heart, MapPin, Quote, Sparkles } from 'lucide-react'
import { Header } from './components/Header.jsx'
import { Logo } from './components/Logo.jsx'
import { BookingForm } from './components/BookingForm.jsx'
import { PhotoLightbox } from './components/PhotoLightbox.jsx'
import { MessengerDock } from './components/MessengerDock.jsx'
import { services } from './data/services.js'

const portrait = '/images/mariia-shvarts.jpg'

export default function App() {
  const [selectedService, setSelectedService] = useState(null)
  const closeLightbox = useCallback(() => setSelectedService(null), [])

  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Header />
      <MessengerDock />

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={14} /> Авторские причёски в Оренбурге</div>
            <h1>Ваша красота —<br /><em>в каждой пряди.</em></h1>
            <p className="hero-lead">Косы и причёски, в которых вы чувствуете себя собой — только ещё прекраснее.</p>
            <div className="hero-actions">
              <a className="button" href="#booking">Создать свой образ <ArrowRight size={18} /></a>
              <a className="text-link" href="#services">Смотреть услуги <ArrowDown size={16} /></a>
            </div>
            <div className="hero-proof">
              <div className="client-stack" aria-hidden="true"><span>♡</span><span>М</span><span>✦</span></div>
              <p><strong>Бережно и с любовью</strong><br />к вашим волосам и настроению</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame glass">
              <img src={portrait} alt="Мария Шварц — мастер по плетению и причёскам" />
              <div className="portrait-shade" />
              <div className="portrait-caption glass">
                <span className="caption-icon"><Heart size={17} fill="currentColor" /></span>
                <span><small>Ваш мастер</small><strong>Маша Шварц</strong></span>
              </div>
            </div>
            <div className="location-pill glass"><MapPin size={16} /> Оренбург</div>
            <div className="scribble" aria-hidden="true">тебе идёт!</div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-heading">
            <div><span className="eyebrow">Выберите настроение</span><h2>Не просто причёска.<br /><em>Ваш способ сиять.</em></h2></div>
            <p>Каждый образ создаётся индивидуально — под ваши черты, характер и повод.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card glass" key={service.title}>
                <button
                  className="service-image-trigger"
                  type="button"
                  onClick={() => setSelectedService(service)}
                  aria-label={`Открыть фото: ${service.title}`}
                />
                <img
                  className="service-image"
                  src={service.image}
                  alt={`${service.title} — пример причёски`}
                  style={{ objectPosition: service.position }}
                  loading="lazy"
                />
                <div className="service-image-shade" />
                <span className="service-number">{service.number}</span>
                <a className="photo-credit" href={service.sourceUrl} target="_blank" rel="noreferrer">Фото · Pexels</a>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div><span>{service.meta}</span><a href="#booking" aria-label={`Записаться на ${service.title}`}><ArrowRight size={18} /></a></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about-photo glass"><img src={portrait} alt="Маша Шварц" /></div>
          <div className="about-copy glass">
            <Quote className="quote-icon" size={34} />
            <span className="eyebrow">Знакомство с мастером</span>
            <h2>Привет, я Маша.</h2>
            <p className="about-lead">Я создаю причёски, которые не прячут вас, а подчёркивают вашу природную красоту.</p>
            <p>Для меня важно, чтобы вам было комфортно с первой минуты и до последней шпильки. Подберём образ вместе, бережно отнесёмся к волосам и обязательно оставим место для вашей индивидуальности.</p>
            <div className="signature">Маша <span>♡</span></div>
          </div>
        </section>

        <section className="booking section" id="booking">
          <div className="booking-copy">
            <span className="eyebrow">Ваш новый образ начинается здесь</span>
            <h2>Давайте создадим<br /><em>что-то красивое.</em></h2>
            <p>Оставьте заявку — я уточню детали, помогу выбрать причёску и предложу свободное время.</p>
            <div className="booking-detail glass"><MapPin size={21} /><span><small>Где встречаемся</small><strong>Оренбург, Россия</strong></span></div>
          </div>
          <BookingForm />
        </section>
      </main>

      <footer className="footer glass">
        <Logo />
        <p>Красота, сплетённая с любовью.</p>
        <a href="#home">Наверх ↑</a>
        <small>© {new Date().getFullYear()} «Маша и Косы» · студия плетения</small>
      </footer>
      <PhotoLightbox service={selectedService} onClose={closeLightbox} />
    </div>
  )
}
