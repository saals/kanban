import uniqid from 'uniqid'
import Card from '../card/card'
import css from './board.module.css'

const Board = ({ todos, setTodos }) => {
  const updatedTodos = [ ...todos ]

  const addNewIssue = (name) => {
    updatedTodos[0].issues.push({
      id: uniqid(),
      name,
      description: 'This task has no description'
    })
    setTodos(updatedTodos)
  }

  const moveIssue = (from, to, index) => {
    const [ issue ] = updatedTodos[from].issues.splice(index, 1)
    updatedTodos[to].issues.push(issue)
    setTodos(updatedTodos)
  }

  return (
    <div className={`container ${css.board}`}>
      {todos.map((todo, index) => (
        <Card key={todo.title}
              title={todo.title}
              issues={todo.issues}
              issuesIndex={index}
              issuesFrom={index > 0 ? todos[index - 1].issues : Array(1)}
              issuesFromIndex={index > 0 ? index - 1 : 0}
              addNewIssue={addNewIssue}
              moveIssue={moveIssue}
        />
      ))}
    </div>
  )
}

export default Board
