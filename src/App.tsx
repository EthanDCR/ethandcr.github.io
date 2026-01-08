import { useState } from "react"
import styles from "./app.module.css"
import Lanyard from "./components/Lanyard"
import cardLogo from "../public/headShotCropped1.png"
import qrCode from "../public/qrcodeVim.png"
import moneroLogo from "../public/monero-xmr-logo.svg"



function App() {

  const [email] = useState("clinteth.dev@gmail.com")
  const [fullName] = useState("ETHAN CLINTON-RAGONESE")
  const location = "Waukesha, WI"


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
    { name: "Linkedin", link: "https://www.linkedin.com/in/ethan-clinton-306581293" },
    { name: "Instagram", link: "https://www.instagram.com/ethanblinton" }
  ]

  const projectLinks: ProjectLink[] = [
    {
      name: "MemoDeck",
      link: "https://www.github.com/EthanDCR/memo-deck/tree/main/wails",
      description: "An offline, cross-platform desktop study app that generates flashcards from local files using on-device LLMs. Built to explore spaced repetition, local inference, and learning tools without relying on cloud services."
    },
    {
      name: "OwnerInfo (Proprietary)",
      link: "https://www.ownerinfo.com",
      description: "A property-owner data enrichment platform. I built and maintain the application layer across frontend and backend, integrating Supabase, Next.js API routes, and multiple third-party data providers."
    },

    {
      name: "Pi Nas App",
      link: "https://www.github.com/ethandcr/pi-nas-app",
      description: "A React client and Go backend for managing files on a Raspberry Pi. The Go server handles filesystem operations and HTTP requests from the client. Frontend is bundled and served from the Pi, accessible over the local network."
    },
    {
      name: "Sales Tracker / Game",
      link: "https://www.github.com/EthanDCR/rm-counter",
      description: "A real-time sales tracking app with live chat and scoreboard streaming via WebSockets. Uses SQLite for persistent storage of rep stats and historical data."
    },

  ]

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.lanyardContainer}>
          <Lanyard position={[10, -8, 30]} cardImage={cardLogo} />
        </div>


        <div className={styles.contentContainer}>
          <div className={styles.identityBand}>
            <h1>{fullName}</h1>
            <p className={styles.subtitle}>Developer</p>
          </div>

          <div className={styles.contextBand}>
            <span>{location}</span>
            <span className={styles.separator}>•</span>
            <span>{email}</span>
          </div>

          <div className={styles.linksAndStack}>
            <div className={styles.links}>
              {socialLinks.length > 0 && socialLinks.map((link, i) => (
                <>
                  {i > 0 && <span className={styles.linkSeparator}>·</span>}
                  <a className={styles.link} key={i} href={link.link}>{link.name}</a>
                </>
              ))}
            </div>

            <div className={styles.stackList}>
              <span>TypeScript</span>
              <span>·</span>
              <span>React</span>
              <span>·</span>
              <span>Go</span>
              <span>·</span>
              <span>Node</span>
              <span>·</span>
              <span>Linux</span>
              <span>·</span>
              <span>Git</span>
            </div>
          </div>

          <div className={styles.sectionDivider}></div>

          <div className={styles.topSection}>


            <div className={styles.projectsSection}>
              <h2>Projects</h2>
              <div className={styles.projects}>
                {projectLinks.length > 0 && projectLinks.map((link, i) => (
                  <div key={i} className={styles.projectCard}>
                    <a className={styles.projectLink} href={link.link}>
                      <h3>{link.name}</h3>
                    </a>
                    <p className={styles.projectDescription}>{link.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.moneroStuff}>
              <img src={moneroLogo} width={60}></img>
              <img src={qrCode} width={60}></img>
            </div>
          </div>


        </div>



      </div>
    </div >
  )
}

export default App
