import { useEffect } from 'react'
import { X } from 'lucide-react'

export function PhotoLightbox({ service, onClose }) {
  useEffect(() => {
    if (!service) return undefined

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [service, onClose])

  if (!service) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Фото причёски: ${service.title}`}>
      <button className="lightbox-backdrop" type="button" onClick={onClose} aria-label="Закрыть фото" />
      <figure className="lightbox-panel glass">
        <button className="lightbox-close" type="button" onClick={onClose} aria-label="Закрыть фото">
          <X size={22} />
        </button>
        <img src={service.image} alt={`${service.title} — увеличенный пример причёски`} />
        <figcaption>
          <span><small>Пример причёски</small><strong>{service.title}</strong></span>
          <span>Нажмите вне фотографии или Esc, чтобы закрыть</span>
        </figcaption>
      </figure>
    </div>
  )
}
