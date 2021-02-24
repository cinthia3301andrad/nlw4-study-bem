import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/cinthia3301andrad.png" alt="Cinthia"/>
      <strong>Cinthia Andrade</strong>
      <p>Level aqui</p>
    </div>
  )
}