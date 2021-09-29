import React from 'react'

export default function Hero({ title, subtitle }) {
  return (
    <section className='hero is-primary has-text-centered'>
      <div className='hero-body'>
        <p className="title is-size-4-mobile">{title}</p>
        <p className="subtitle is-size-6-mobile px-small-mobile">{subtitle}</p>
      </div>
    </section>
  )
}
