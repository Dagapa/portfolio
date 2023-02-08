import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import styles from './ContactForm.module.css'

export const ContactForm = () => {
  const input = {
    name: "",
    email: "",
    message: ""
  }
  const [formData, setData] = useState(input)

  const handleInputChange = (event) => {
    setData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.send('service_il4hzrb', 'template_nvm26db', formData, '_PZFHmRzCbbGmf5V5')
    console.log(formData)
  }

  return (
    <form className={styles.contact} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleInputChange}
      />
      <button className={styles.submit} type="submit">Enviar</button>
    </form>
  )
}
