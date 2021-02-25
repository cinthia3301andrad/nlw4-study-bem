import Head  from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChanllend } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import styles from  '../styles/pages/Home.module.css'
export default function Home() {
  return (  
    <div className={styles.container}>
      <Head>
        <title>Inicio | Study Boss</title>

      </Head>
     <ExperienceBar/>

     <section>
       <div>
         <Profile/>
         <CompletedChanllend/>
         <Countdown/>

       </div>
       <ChallengeBox/>

       <div>

       </div>
     </section>
    </div>
  )
}
