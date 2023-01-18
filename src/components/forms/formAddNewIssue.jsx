import { useState } from 'react'
import css from './forms.module.css'

const FormAddNewIssue = ({ formSubmit, toggleVisible }) => {

  const [ value, setValue ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim()) {
      formSubmit(value)
    } else {
      toggleVisible()
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input type="text" placeholder="New task title..."
             name="name" id="issueName" value={value}
             onChange={handleChange}
             className={css.input} />
      <button type="submit" className={css.button}>
        {value.trim() ? "Submit" : "Cancel"}
      </button>
    </form>
  )
}

export default FormAddNewIssue
