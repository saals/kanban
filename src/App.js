import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'

// import { dataMock } from './mock'

const emptyState = [
  { title: 'Backlog', issues: [] },
  { title: 'Ready', issues: [] },
  { title: 'In Progress', issues: [] },
  { title: 'Finished', issues: [] },
]

function App() {
  // const initialTodos = dataMock || emptyState
  const initialTodos = JSON.parse(window.localStorage.getItem('todos')) || emptyState
  const [ todos, setTodos ] = useState(initialTodos)

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [ todos ])

  return (
    <div className="app-wrap">
      <Router>
        <Header />
        <Main todos={todos} setTodos={setTodos} />
        <Footer todos={todos} />
      </Router>
    </div>
  );
}

export default App;
