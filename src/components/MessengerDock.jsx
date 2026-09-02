import { MessageCircle, Send } from 'lucide-react'
import { contactLinks } from '../data/contactLinks.js'

function MaxIcon() {
  return (
    <svg className="max-mark" viewBox="0 0 100 100" aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.76.26C78.29.26 99.89 22.6 99.89 50.15S77.61 99.49 51.02 99.49c-9.43 0-14.01-1.33-21.37-6.54a1.22 1.22 0 0 0-1.63.19c-5.66 6.04-20.17 10.29-20.83 2.04 0-14.39-7.19-23.73-7.19-45.3C0 21.55 23.22.26 50.76.26Zm.77 24.55C38.46 24.13 28.26 33.2 26.01 47.38c-1.86 11.75 1.44 26.07 4.27 26.8 1.2.3 4.08-1.91 6.18-3.88.39-.38.99-.44 1.45-.15 3.27 2 6.97 3.5 11.05 3.71 13.41.7 25.3-9.8 26-23.21.7-13.42-10.02-25.15-23.43-25.84Z"
      />
    </svg>
  )
}

const messengers = [
  {
    name: 'WhatsApp',
    href: contactLinks.whatsapp,
    className: 'messenger-whatsapp',
    icon: <MessageCircle size={21} strokeWidth={2.2} />,
  },
  {
    name: 'Telegram',
    href: contactLinks.telegram,
    className: 'messenger-telegram',
    icon: <Send size={20} strokeWidth={2.2} />,
  },
  {
    name: 'MAX',
    href: contactLinks.max,
    className: 'messenger-max',
    icon: <MaxIcon />,
  },
]

export function MessengerDock() {
  return (
    <aside className="messenger-dock glass" aria-label="Написать Маше">
      <span className="messenger-dock-title">Написать</span>
      <div className="messenger-list">
        {messengers.map((messenger) => messenger.href ? (
          <a
            className={`messenger-link ${messenger.className}`}
            href={messenger.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Написать в ${messenger.name}`}
            title={messenger.name}
            key={messenger.name}
          >
            {messenger.icon}
            <span className="messenger-tooltip" role="tooltip">{messenger.name}</span>
          </a>
        ) : (
          <span
            className={`messenger-link messenger-pending ${messenger.className}`}
            aria-label="MAX — ссылка скоро появится"
            title="Добавьте ссылку профиля MAX"
            key={messenger.name}
          >
            {messenger.icon}
            <span className="pending-dot" />
            <span className="messenger-tooltip" role="tooltip">MAX · скоро</span>
          </span>
        ))}
      </div>
    </aside>
  )
}
