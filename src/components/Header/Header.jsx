import React from 'react'
import styles from './Header.module.css'
export default function Header() {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>ВУЗам</h2>
      <h2 className={styles.title}>Предпринимателям</h2>
      <h2 className={styles.title}>Студентам</h2>
      <h2 className={styles.title_login}>Вход</h2>
      <h2 className={styles.title_reg}>Регистрация</h2>
    </div>
  )
}
