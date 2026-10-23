import { SHOP, whatsappLink } from '../data'

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const message = `Hi ${SHOP.name}, my name is ${data.get('name')}.\n${data.get('message')}\n(Reply to: ${data.get('contact')})`
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="page">
      <section className="shop-head">
        <div className="container">
          <p className="eyebrow">Say hello</p>
          <h1>Contact Shreeyogi<sup className="trademark">™</sup></h1>
        </div>
      </section>

      <section className="container section contact-grid">
        <div className="contact-info">
          <a className="contact-item" href={`tel:${SHOP.phone}`}>
            <span className="contact-ico">📞</span>
            <div><b>Call us</b><p>+91 {SHOP.phone}</p></div>
          </a>
          <a className="contact-item" href={`mailto:${SHOP.email}`}>
            <span className="contact-ico">✉️</span>
            <div><b>Email</b><p>{SHOP.email}</p></div>
          </a>
          <div className="contact-item">
            <span className="contact-ico">📍</span>
            <div><b>Visit</b><p>{SHOP.address}</p></div>
          </div>
          <a className="contact-item" href={whatsappLink(`Hi ${SHOP.name}, I have a question.`)} target="_blank" rel="noreferrer">
            <span className="contact-ico">💬</span>
            <div><b>WhatsApp</b><p>Chat with us instantly</p></div>
          </a>
          <section className="trademark-summary" aria-labelledby="trademark-heading">
            <h3 id="trademark-heading">Trademark details</h3>
            <dl>
              <div><dt>Brand</dt><dd>Shreeyogi™ (Device)</dd></div>
              <div><dt>Classification</dt><dd>Class 16</dd></div>
              <div><dt>Status</dt><dd>Proposed to be used</dd></div>
            </dl>
          </section>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <h3>Send a message</h3>
          <label>Your name<input name="name" required placeholder="Full name" /></label>
          <label>Phone or email<input name="contact" required placeholder="How we reach you" /></label>
          <label>Message<textarea name="message" rows="4" required placeholder="How can we help?" /></label>
          <button className="btn btn-wa" type="submit">Send via WhatsApp</button>
        </form>
      </section>
    </div>
  )
}
