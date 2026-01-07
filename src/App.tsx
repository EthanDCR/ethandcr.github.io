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
    { description: "[Current project(s)] ", link: "https://www.github.com/EthanDCR/memo-deck/tree/main/wails", name: "memoDeck" },
    { description: "[Fullstack web]", link: "https://www.ownerinfo.com", name: "Owner Info" },
    { description: "[Fun ones]", link: "https://www.github.com/ethandcr/pi-nas-app", name: "Pi Nas App" },
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
          <h1>{fullName}</h1>

          <div className={styles.logoContainer}>
            {imageLogos.map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt} />
            ))}
          </div>

          <div className={styles.location}>
            <p>{location}</p>
            <img src={guitar} width={35} height={35} />
          </div>


          <div className={styles.topSection}>
            <div className={styles.links}>
              {socialLinks.length > 0 && socialLinks.map((link, i) => (
                <a className={styles.link} key={i} href={link.link} >| {link.name} |</a>
              ))}
            </div>

            <div className={styles.email}>
              <p><strong>{email}</strong> </p>
            </div>


            <div className={styles.projects}>

              {projectLinks.length > 0 && projectLinks.map((link, i) => (
                <div key={i}>
                  <h3 key={i}>{link.description}</h3>
                  <a className={styles.link} href={link.link} > {link.name} </a>
                </div>
              ))}
            </div>
          </div>

          <a className={styles.tracker} href="https://www.github.com/EthanDCR/rm-counter">Sales tracker/game</a>
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
