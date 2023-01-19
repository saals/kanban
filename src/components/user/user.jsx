import { useState } from 'react'
import userAvatar from '../../assets/user-avatar.png'
import css from './user.module.css'

const User = () => {
  const [ isMenuVisible, setMenuVisible ] = useState(false)
  const handleClick = () => {
    setMenuVisible(!isMenuVisible)
  }

  return (
    <div className={css.user}>
      <img src={userAvatar} alt="user"
           width="40" height="40"
           className={css.avatar} />
      <button type="button"
              className={`${css.button} ${isMenuVisible && css.active}`}
              onClick={handleClick} />
      {isMenuVisible && (
        <ul className={css.userMenu}>
          <li className={css.userItem}>Profile</li>
          <li className={css.userItem}>Log Out</li>
        </ul>
      )}
    </div>
  )
}

export default User
