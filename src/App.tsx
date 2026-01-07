import { useState } from "react"
import styles from "./app.module.css"
import Lanyard from "./components/Lanyard"
import cardLogo from "../public/headShotCropped1.png"
import qrCode from "../public/qrcodeVim.png"
import moneroLogo from "../public/monero-xmr-logo.svg"
import guitar from "../public/guitar.svg"



function App() {

  const [email] = useState("clinteth.dev@gmail.com")
  const [fullName] = useState("ETHAN CLINTON-RAGONESE")
  const [location, setLocation] = useState<string>("Waukesha, WI")


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

  const imageLogos = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "typescript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg", atl: "golang" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg", alt: "react" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", alt: "git" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", alt: "linux" },
    //    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", alt: "nodejs" },
  ];


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
            <img src={guitar} width={22} height={22} />
          </div>

          <div className={styles.topSection}>
            <div className={styles.linksAndStack}>
              <div className={styles.linksGroup}>
                <span className={styles.groupLabel}>Links</span>
                <div className={styles.links}>
                  {socialLinks.length > 0 && socialLinks.map((link, i) => (
                    <a className={styles.link} key={i} href={link.link}>{link.name}</a>
                  ))}
                </div>
              </div>

              <div className={styles.stackGroup}>
                <span className={styles.groupLabel}>Stack</span>
                <div className={styles.logoContainer}>
                  {imageLogos.map((logo, i) => (
                    <img key={i} src={logo.src} alt={logo.alt} />
                  ))}
                </div>
              </div>
            </div>


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

          <div className={styles.moneroStuff}>
            <img src={moneroLogo} width={75}></img>
            <img src={qrCode} width={75}></img>
          </div>


        </div>



      </div>
    </div >
  )
}

export default App
