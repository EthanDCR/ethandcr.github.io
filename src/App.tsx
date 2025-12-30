import { useState } from "react"
import styles from "./app.module.css"
import Lanyard from "./components/Lanyard"


function App() {

  const [email] = useState("clinteth.dev@gmail.com")
  const [fullName] = useState("ETHAN CLINTON-RAGONESE")

  interface socialLink {
    name: String
    link: string
  }

  interface ProjectLink {
    name: string
    link: string
    description: string
  }

  const socialLinks: socialLink[] = [
    { name: "Github", link: "https://www.github.com/ethandcr" },
    { name: "Linkedin", link: "www.linkedin.com/in/ethan-clinton-306581293" },
    { name: "Instagram", link: "https://www.instagram.com/ethanblinton" }
  ]

  const projectLinks: ProjectLink[] = [
    { description: "Current favorite project", link: "https://www.github.com/ethandcr/memo-deck", name: "memoDeck" },
    { description: "Fullstack web", link: "https://www.ownerinfo.com", name: "Owner Info" },
    { description: "Fun one", link: "https://www.github.com/ethandcr/pi-nas-app", name: "Pi Nas App" },
  ]

  return (
    <div className={styles.page}>


      <div className={styles.lanyardContainer}>
        <Lanyard />
      </div>


      <div className={styles.contentContainer}>
        <h1>{fullName}</h1>
        <div className={styles.topSection}>
          <div className={styles.links}>
            {socialLinks.length > 0 && socialLinks.map((link, i) => (
              <a className={styles.link} key={i} href={link.link} >| {link.name} |</a>
            ))}
          </div>

          <div className={styles.email}>
            <p>email: {email}</p>
          </div>

          <h2>Projects</h2>

          <div className={styles.projects}>
            {projectLinks.length > 0 && projectLinks.map((link, i) => (
              <div key={i}>
                <h3 key={i}>{link.description}</h3>
                <a className={styles.link} href={link.link} > {link.name} </a>
              </div>
            ))}
          </div>

        </div>
      </div>


    </div >
  )
}

export default App
