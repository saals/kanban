import { useState } from 'react'
import FormAddNewIssue from '../forms/formAddNewIssue'
import FormMoveIssue from '../forms/formMoveIssue'
import css from './card.module.css'

const Card = ({
                title,
                issues,
                issuesIndex,
                issuesFrom,
                issuesFromIndex,
                addNewIssue,
                moveIssue
              }) => {
  const [ isVisible, setVisible ] = useState(false)

  const toggleVisible = () => {
    setVisible(!isVisible)
  }

  const formSubmit = (name, description) => {
    addNewIssue(name, description)
    toggleVisible()
  }

  const selectChange = (name) => {
    const index = issuesFrom.findIndex(item => item.name === name)
    moveIssue(issuesFromIndex, issuesIndex, index)
    toggleVisible()
  }

  return (
    <div key={title} className={css.card}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>
        {issues.map(issue => (
            <li key={issue.id} className={css.item}>{issue.name}</li>
          )
        )}
      </ul>
      {
        (isVisible &&
          (title === 'Backlog'
            ? <FormAddNewIssue formSubmit={formSubmit} />
            : <FormMoveIssue issuesFrom={issuesFrom}
                             selectChange={selectChange} />)) ||
        <button type="button" className={css.button}
                onClick={toggleVisible}>Add card
        </button>
      }
    </div>
  )
}

export default Card
