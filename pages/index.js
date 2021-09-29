import React from 'react'
import Hero from '../components/hero/Hero.component'
import Testimonial from '../components/testimonial/Testimonial'

export default function HomePage() {
  return (
    <>
      {/* <Hero
        title='Hello World'
        subtitle="Welcome to this site"
      /> */}
      <section className="hero is-medium"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1603815878781-536e057a3e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)', backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="hero-body columns is-centered is-vcentered">
          <div className="column is-half">
            <div className="block">
              <h1 className="has-text-white">Stardom Awaits You</h1>
              <p className="subtitle has-text-white">Music courses from $9.95</p>
            </div>
          </div>
          <div className="column is-half has-text-centered is-relative">
            <Testimonial
              title="Unbelievable quality courses at great prices"
              subtitle="John Doe"
              width="300px"
              margin="auto"
            />
          </div>
        </div>
      </section>
    </>
  )
}
