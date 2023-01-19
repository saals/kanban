import { useState } from 'react'
import { Link } from 'react-router-dom'
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

  const formSubmit = (name) => {
    addNewIssue(name)
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
            <li key={issue.id} className={css.item}>
              <Link to={`/issue/${issue.id}`}
                    className={css.link}>{issue.name}
              </Link>
            </li>
          )
        )}
      </ul>
      {
        (isVisible &&
          (title === 'Backlog'
            ? <FormAddNewIssue formSubmit={formSubmit}
                               toggleVisible={toggleVisible} />
            : <FormMoveIssue issuesFrom={issuesFrom}
                             selectChange={selectChange} />)) ||
        <button type="button" className={css.button}
                onClick={toggleVisible}
                disabled={!issuesFrom.length}>
          Add card
        </button>
      }
    </div>
  )
}

export default Card
