import css from './footer.module.css'

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={`container ${css.wrap}`}>
        <span className={css.text}>Active tasks: "N"</span>
        <span className={css.text}>Finished tasks: "M"</span>
        <span className={css.text}>Kanban board by @saals, 2023</span>
      </div>
    </footer>
  )
}

export default Footer
