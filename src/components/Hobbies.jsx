import { useState } from 'react'
import hobbies from '../data/hobbies.json'
import Gallery from './Gallery.jsx'
import Placeholder from './Placeholder.jsx'

export default function Hobbies() {
  const [active, setActive] = useState(hobbies.tabs[0].key)
  const tab = hobbies.tabs.find(t => t.key === active)

  return (
    <section id="hobbies">
      <div className="wrap">
        <div className="secHead">
          <h2>Off the clock</h2>
          <p className="lede">{hobbies.lede}</p>
        </div>

        <div className="tabs" role="tablist">
          {hobbies.tabs.map(t => (
            <button key={t.key} className="tab" role="tab"
                    aria-selected={t.key === active}
                    onClick={() => setActive(t.key)}>
              {t.label}
            </button>
          ))}
        </div>

        {tab.kind === 'books'
          ? tab.groups.map((g, i) => (
              <div className="shelfGroup" key={i}>
                <h3>{g.h}</h3>
                <div className="shelf">
                  {g.items.map((b, j) => (
                    <div className="book" key={j}>
                      <div className="spine">
                        {b.cover ? <img src={b.cover} alt="" loading="lazy" />
                                 : <Placeholder kind="book" />}
                      </div>
                      <b>{b.t}</b>
                      <em>{b.a}</em>
                      <em>{b.n}</em>
                    </div>
                  ))}
                </div>
              </div>
            ))
          : <Gallery items={tab.items} className="photoGrid" />}
      </div>
    </section>
  )
}
