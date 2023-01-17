import { useState } from 'react'
import css from './forms.module.css'

const FormMoveIssue = ({ issuesFrom, selectChange }) => {
  const [ value, setValue ] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
    selectChange(e.target.value)
  }

  return (
    <form>
      <select name="select" id="issueSelect"
              onChange={handleChange} value={value}>
        <option value="" />
        {issuesFrom.map(issue => (
          <option key={issue.id} value={issue.name}>{issue.name}</option>
        ))}
      </select>
    </form>
  )
}

export default FormMoveIssue
