import { MessageCircle, Send } from 'lucide-react'
import { contactLinks } from '../data/contactLinks.js'

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
    icon: <span className="max-mark">M</span>,
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
            <span className="messenger-tooltip">{messenger.name}</span>
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
            <span className="messenger-tooltip">MAX · скоро</span>
          </span>
        ))}
      </div>
    </aside>
  )
}
