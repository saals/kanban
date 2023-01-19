import User from '../user/user'
import css from './header.module.css'

const Header = () => {
  return (
    <header className={css.header}>
      <div className={`container ${css.wrap}`}>
        <h1 className={css.title}>Awesome Kanban Board</h1>
        <User />
      </div>
    </header>
  )
}

export default Header
