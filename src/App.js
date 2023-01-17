import { useState } from 'react'
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'

import { dataMock } from './mock'

const emptyState = [
  { title: 'Backlog', issues: [] },
  { title: 'Ready', issues: [] },
  { title: 'In Progress', issues: [] },
  { title: 'Finished', issues: [] },
]

function App() {
  // const [backlog] = dataMock.filter(data => data.title === 'backlog')
  // const [backlog, ready, inProgress, finished] = dataMock
  // const initialTodos = [backlog, ready, inProgress, finished]

  const initialTodos = dataMock || emptyState

  const [ todos, setTodos ] = useState(initialTodos)

  return (
    <div className="app-wrap">
      <Header />
      <Main todos={todos} setTodos={setTodos} />
      <Footer todos={todos} />
    </div>
  );
}

export default App;
