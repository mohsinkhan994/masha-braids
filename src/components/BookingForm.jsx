import { useState } from 'react'
import { CalendarDays, Check, MapPin } from 'lucide-react'
import { services } from '../data/services.js'

export function BookingForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <form className="booking-form glass" onSubmit={handleSubmit}>
      {sent ? (
        <div className="success-message" role="status">
          <span><Check size={28} /></span>
          <h3>Заявка отправлена!</h3>
          <p>Спасибо! Маша свяжется с вами, чтобы обсудить образ и удобное время.</p>
          <button className="text-button" type="button" onClick={() => setSent(false)}>Отправить ещё одну</button>
        </div>
      ) : (
        <>
          <div className="form-heading">
            <span className="eyebrow">Онлайн-запись</span>
            <h3>Расскажите о желаемом образе</h3>
          </div>
          <label>
            Ваше имя
            <input required name="name" placeholder="Как к вам обращаться?" />
          </label>
          <label>
            Телефон или Telegram
            <input required name="contact" placeholder="+7 900 000-00-00" />
          </label>
          <label>
            Какая причёска вас вдохновляет?
            <select name="style" defaultValue="">
              <option value="" disabled>Выберите вариант</option>
              {services.map((service) => <option key={service.title}>{service.title}</option>)}
              <option>Хочу совет мастера</option>
            </select>
          </label>
          <label>
            Пожелания <span className="optional">необязательно</span>
            <textarea name="message" rows="3" placeholder="Дата, длина волос, идеи…" />
          </label>
          <button className="button button-wide" type="submit"><CalendarDays size={18} /> Оставить заявку</button>
          <p className="form-note"><MapPin size={15} /> Сейчас принимаем записи только в Оренбурге</p>
        </>
      )}
    </form>
  )
}
