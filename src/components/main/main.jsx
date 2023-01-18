import { Routes, Route } from 'react-router-dom'
import Board from '../board/board'
import IssueDetail from '../issue-detail/issueDetail'
import css from './main.module.css'

const Main = (props) => {
  return (
    <main className={css.main}>
      <Routes>
        <Route path={'/'} element={<Board {...props} />} />
        <Route path={'/issue/:issueId'} element={<IssueDetail {...props} />} />
      </Routes>
    </main>
  )
}

export default Main
