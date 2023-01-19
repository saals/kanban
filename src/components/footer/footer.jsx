import css from './footer.module.css'

const Footer = ({ todos }) => {
  return (
    <footer className={css.footer}>
      <div className={`container ${css.wrap}`}>
        <span className={css.text}>
          Active tasks: {todos[0].issues.length}
        </span>
        <span className={css.text}>
          Finished tasks: {todos[3].issues.length}
        </span>
        <span className={css.text}>Kanban board by @saals, 2023</span>
      </div>
    </footer>
  )
}

export default Footer
