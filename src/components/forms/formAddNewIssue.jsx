import { useState } from 'react'
import css from './forms.module.css'

const FormAddNewIssue = ({ formSubmit }) => {

  const [ values, setValues ] = useState({
    name: '',
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (values.name) {
      formSubmit(values.name, values.description)
    }
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input type="text" name="name" id="issueName" value={values.name}
             onChange={handleChange} />
      <textarea name="description" id="issueDescription"
                value={values.description}
                onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormAddNewIssue
