import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

export default function Testimonial({ title, subtitle, width, margin }) {
  return (
    <>
      <div className="card has-background-primary-light is-radiusless" style={{ width: width, margin: margin }}>
        <div className="card-content">
          <h2 className="subtitle">
            <ImQuotesLeft /> {title} <ImQuotesRight />
          </h2>
          <p className="subtitle">
            {subtitle}
          </p>
        </div>
      </div>
    </>
  )
}
