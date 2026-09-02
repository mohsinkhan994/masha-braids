import { useState } from 'react'
import { AlertCircle, CalendarDays, Check, LoaderCircle, MapPin } from 'lucide-react'
import { services } from '../data/services.js'

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export function BookingForm() {
  const [sent, setSent] = useState(false)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    if (status === 'submitting') return

    if (!accessKey || accessKey === 'your_access_key_here') {
      setStatus('error')
      setErrorMessage('Форма почти готова — добавьте ключ Web3Forms в настройках сайта.')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', accessKey)
    formData.append('subject', 'Новая заявка на причёску — «Маша и Косы»')
    formData.append('from_name', 'Сайт студии «Маша и Косы»')
    formData.append('city', 'Оренбург')
    formData.append('page', window.location.href)

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Не удалось отправить заявку')
      }

      form.reset()
      setSent(true)
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Не получилось отправить заявку. Проверьте интернет и попробуйте ещё раз.')
    }
  }

  function resetForm() {
    setSent(false)
    setStatus('idle')
    setErrorMessage('')
  }

  return (
    <form className="booking-form glass" onSubmit={handleSubmit}>
      {sent ? (
        <div className="success-message" role="status">
          <span><Check size={28} /></span>
          <h3>Заявка отправлена!</h3>
          <p>Спасибо! Маша свяжется с вами, чтобы обсудить образ и удобное время.</p>
          <button className="text-button" type="button" onClick={resetForm}>Отправить ещё одну</button>
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
          <input className="botcheck" type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" aria-hidden="true" />
          {status === 'error' && (
            <p className="form-error" role="alert"><AlertCircle size={16} /> {errorMessage}</p>
          )}
          <button className="button button-wide" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? <><LoaderCircle className="spinner" size={18} /> Отправляем…</> : <><CalendarDays size={18} /> Оставить заявку</>}
          </button>
          <p className="form-note"><MapPin size={15} /> Сейчас принимаем записи только в Оренбурге</p>
        </>
      )}
    </form>
  )
}
