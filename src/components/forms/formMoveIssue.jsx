import { useState } from 'react'
import css from './forms.module.css'

const FormMoveIssue = ({ issuesFrom, selectChange }) => {
  const [ value, setValue ] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
    selectChange(e.target.value)
  }

  return (
    <select name="select" id="issueSelect"
            onChange={handleChange} value={value}
            className={css.select}>
      <option className={css.optionNone}>Select from list...</option>
      {issuesFrom.map(issue => (
        <option key={issue.id} value={issue.name}
                className={css.option} title={issue.name}>
          {/*{issue.name} todo*/}
          {issue.name.length <= issue.name.slice(0, 25).length
            ? issue.name
            : issue.name.slice(0, 25) + "..."}
        </option>
      ))}
    </select>
  )
}

export default FormMoveIssue
