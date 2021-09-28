import React from 'react'

export default function Hero({ title, subtitle }) {
  return (
    <section className='hero is-info has-text-centered'>
      <div className='hero-body'>
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </section>
  )
}
