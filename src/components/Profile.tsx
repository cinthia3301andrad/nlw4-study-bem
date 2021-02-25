import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/cinthia3301andrad.png" alt="Cinthia"/>
      <div>
        <strong>Cinthia Andrade</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          Level 1
        </p>
      </div>
   
    </div>
  )
}