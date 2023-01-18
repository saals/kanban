import { Link, useResolvedPath } from 'react-router-dom'
import css from './issueDetail.module.css'

const IssueDetail = ({ todos, setTodos }) => {
  const pathAsArr = useResolvedPath('').pathname.split('/')
  const issueId = pathAsArr[pathAsArr.length - 1]

  const issueData = todos.reduce((acc, todo, indexTodo) => {
    if (todo.issues.some(issue => issue.id === issueId)) {
      acc.issue = (todo.issues.find((issue, indexIssue) => {
        acc.indexIssue = indexIssue
        return issue.id === issueId
      }))
      acc.indexTodo = indexTodo
    }
    return acc
  }, {})

  const updateTodos = [ ...todos ]

  const handleChange = (e) => {
    updateTodos[issueData.indexTodo]
      .issues[issueData.indexIssue]
      .description = e.target.value || 'This task has no description'

    setTodos(updateTodos)
  }

  return (
    <div className={`container ${css.wrap}`}>
      <div className={css.content}>
        <Link to={'/'} className={css.link} />
        <h1 className={css.title}>
          {issueData.issue.name}
        </h1>
        <textarea name="description" id="issueDescription"
                  value={issueData.issue.description}
                  onChange={handleChange}
                  className={css.textarea} />
      </div>
    </div>
  )
}

export default IssueDetail
