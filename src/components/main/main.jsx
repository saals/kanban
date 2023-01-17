import Board from '../board/board'
import css from './main.module.css'

const Main = (props) => {
  return (
    <main className={css.main}>
      <Board {...props} />
    </main>
  )
}

export default Main
