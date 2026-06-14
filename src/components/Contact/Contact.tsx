import { useState } from 'react'
import type { FormEvent } from 'react'

const encode = (data: Record<string, string>) => Object.entries(data)
  .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
  .join('&')

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')
    const form = new FormData(event.currentTarget)
    const fields = Object.fromEntries([...form.entries()].map(([key, value]) => [key, String(value)]))

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(fields),
      })
      setStatus('sent')
    } catch {
      setStatus('idle')
      window.alert('The form could not be sent. Please email info@nelinnovationlabs.com.')
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="page-width contact-grid">
        <div className="contact-intro">
          <span className="micro-label">Start a conversation</span>
          <h2>Have something<br /><em>worth building?</em></h2>
          <p>Tell us what is stuck, expensive or newly possible. We will respond within one business day.</p>
          <a href="mailto:info@nelinnovationlabs.com">info@nelinnovationlabs.com ↗</a>
        </div>

        {status === 'sent' ? (
          <div className="form-success" role="status">
            <span className="micro-label">Message received</span>
            <h3>Thank you.</h3>
            <p>We will review the project details and reply within one business day.</p>
          </div>
        ) : (
          <form className="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit}>
            <input type="hidden" name="form-name" value="contact" />
            <p className="honeypot"><label>Leave empty <input name="bot-field" /></label></p>
            <label>Company or name<input name="companyName" required /></label>
            <label>Email address<input type="email" name="email" required /></label>
            <label className="full-field">What should we build?<textarea name="aiChallenge" rows={4} required placeholder="The problem, opportunity or system you have in mind..." /></label>
            <label>Timeline<select name="timeline" defaultValue=""><option value="">Select one</option><option value="asap">1–3 months</option><option value="near-term">3–6 months</option><option value="planned">6–12 months</option><option value="exploring">Exploring</option></select></label>
            <label>Budget<select name="budget" defaultValue=""><option value="">Select one</option><option value="under-50k">Under $50k</option><option value="50k-100k">$50k–$100k</option><option value="100k-250k">$100k–$250k</option><option value="250k-plus">$250k+</option><option value="discuss">Let's discuss</option></select></label>
            <button className="submit-button full-field" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send project details'} <span>↗</span></button>
          </form>
        )}
      </div>
    </section>
  )
}
