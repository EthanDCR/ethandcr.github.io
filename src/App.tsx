import { useState } from "react"
import styles from "./app.module.css"
import Lanyard from "./components/Lanyard"
import cardLogo from "../public/headShotCropped1.png"
import qrCode from "../public/qrcodeVim.png"
import moneroLogo from "../public/monero-xmr-logo.svg"
import resumeIcon from "../public/resume.svg"



function App() {

  // One panel at a time, so the page never grows past the one screen it fit on
  // before any of these sections existed.
  const [tab, setTab] = useState<"projects" | "ventures" | "client">("projects")

  const [email] = useState("clinteth.dev@gmail.com")
  const [fullName] = useState("ETHAN CLINTON-RAGONESE")
  const location = "Milwaukee, WI"


  interface socialLink {
    name: String
    link: string
  }

  interface ProjectLink {
    name: string
    link: string
    description: string
    techIcons?: string[]
  }

  // Two things I own, as opposed to the Projects list below, which is things I
  // built. Kept separate because "I run this" and "I made this" are different
  // claims and collapsing them makes both read as weaker.
  interface Venture {
    name: string
    link: string
    status: string
    description: string
    techIcons?: string[]
  }

  interface ClientProject {
    name: string
    // Optional: OwnerInfo is proprietary and has no public URL, so its card
    // renders as plain text rather than a link that goes nowhere.
    link?: string
    role: string
    description: string
    techIcons?: string[]
  }

  const ventures: Venture[] = [
    {
      name: "Ballista",
      link: "https://theballista.com",
      status: "private beta",
      description: "Property data, dialer, callbacks and pipeline in one system for storm restoration teams.",
      techIcons: ["react", "typescript", "go"]
    },
    {
      name: "Call-Stars",
      link: "https://callstars.theballista.com",
      status: "live",
      description: "Cold-call training portal for new reps — scripts, objections and graded practice.",
      techIcons: ["react", "typescript"]
    },
  ]

  const clientProjects: ClientProject[] = [
    {
      name: "OwnerInfo (Proprietary)",
      role: "Frontend & backend",
      description: "A property-owner data enrichment platform. I built and maintain the application layer across frontend and backend, integrating Supabase, Next.js API routes, and multiple third-party data providers.",
      techIcons: ["nextdotjs", "typescript", "supabase", "stripe"]
    },
    {
      name: "Owen Allen",
      link: "https://owenallenco.github.io/",
      role: "Design & build",
      description: "Portfolio site for a designer. Animation-led, built around his own illustration work.",
      techIcons: ["react", "typescript"]
    },
    {
      name: "Watchmen Roofing",
      link: "https://watchmen-roofing.vercel.app/",
      role: "Design & build",
      description: "Landing page and contact flow for a roofing contractor, with quote requests routed to their inbox.",
      techIcons: ["nextdotjs", "typescript"]
    },
  ]

  const socialLinks: socialLink[] = [
    { name: "Github", link: "https://www.github.com/ethandcr" },
    { name: "Linkedin", link: "https://www.linkedin.com/in/ethan-clinton-ragonese-4051273a5" },
    //    { name: "Instagram", link: "https://www.instagram.com/ethanblinton" }
  ]

  const projectLinks: ProjectLink[] = [
    {
      name: "MemoDeck",
      link: "https://www.github.com/EthanDCR/memo-deck/tree/main/wails",
      description: "An offline, cross-platform desktop study app that generates flashcards from local files using on-device LLMs. Built to explore spaced repetition, local inference, and learning tools without relying on cloud services.",
      techIcons: ["go", "react", "typescript", "ollama"]
    },
    {
      name: "Nas App",
      link: "https://www.github.com/ethandcr/pi-nas-app",
      description: "A React client and Go backend for managing files on a Raspberry Pi. The Go server handles filesystem operations and HTTP requests from the client. Frontend is bundled and served from the Pi, accessible over the local network.",
      techIcons: ["raspberrypi", "go", "react", "linux"]
    },
    {
      name: "Live Sales Scoreboard",
      link: "https://www.github.com/EthanDCR/rm-counter",
      description: "A real-time sales tracking app with live chat and scoreboard streaming via WebSockets. Uses SQLite for persistent storage of rep stats and historical data.",
      techIcons: ["react", "sqlite", "nodedotjs"]
    },

  ]

  return (
    <div className={styles.page}>
      <>
        <div className={styles.lanyardContainer}>
          <Lanyard position={[10, -8, 30]} cardImage={cardLogo} />
        </div>

        <div className={styles.contentContainer}>
          <a href="/EthanDcr.resume.pdf" download className={styles.resumeDownload}>
            <img src={resumeIcon} alt="Resume" className={styles.resumeIcon} />
            <span className={styles.resumeText}>Resume</span>
          </a>
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
              <div className={styles.tabBar}>
                {([
                  ["projects", "Projects"],
                  ["ventures", "Ventures"],
                  ["client", "Client Work"],
                ] as const).map(([key, label]) => (
                  <button
                    key={key}
                    className={`${styles.tab} ${tab === key ? styles.tabActive : ""}`}
                    onClick={() => setTab(key)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className={styles.tabPanel}>
                {tab === "projects" && (
                  <div className={styles.projects}>
                    {projectLinks.map((link, i) => (
                      <div key={i} className={styles.projectCard}>
                        <a className={styles.projectLink} href={link.link}>
                          <h3>{link.name}</h3>
                        </a>
                        {link.techIcons && link.techIcons.length > 0 && (
                          <div className={styles.techIcons}>
                            {link.techIcons.map((icon, idx) => (
                              <img key={idx} src={`/simpleIcons/${icon}.svg`} alt={icon} className={styles.techIcon} />
                            ))}
                          </div>
                        )}
                        <p className={styles.projectDescription}>{link.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {tab === "ventures" && (
                  <div className={styles.projects}>
                    {ventures.map((v, i) => (
                      <div key={i} className={styles.projectCard}>
                        <div className={styles.cardHead}>
                          <a className={styles.projectLink} href={v.link}>
                            <h3>{v.name}</h3>
                          </a>
                          <span className={styles.statusTag}>{v.status}</span>
                        </div>
                        {v.techIcons && (
                          <div className={styles.techIcons}>
                            {v.techIcons.map((icon, idx) => (
                              <img key={idx} src={`/simpleIcons/${icon}.svg`} alt={icon} className={styles.techIcon} />
                            ))}
                          </div>
                        )}
                        <p className={styles.projectDescription}>{v.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {tab === "client" && (
                  <div className={styles.projects}>
                    {clientProjects.map((c, i) => (
                      <div key={i} className={styles.projectCard}>
                        <div className={styles.cardHead}>
                          {c.link ? (
                            <a className={styles.projectLink} href={c.link}>
                              <h3>{c.name}</h3>
                            </a>
                          ) : (
                            <h3 className={styles.cardTitlePlain}>{c.name}</h3>
                          )}
                          <span className={styles.roleTag}>{c.role}</span>
                        </div>
                        {c.techIcons && (
                          <div className={styles.techIcons}>
                            {c.techIcons.map((icon, idx) => (
                              <img key={idx} src={`/simpleIcons/${icon}.svg`} alt={icon} className={styles.techIcon} />
                            ))}
                          </div>
                        )}
                        <p className={styles.projectDescription}>{c.description}</p>
                      </div>
                    ))}
                  </div>
                )}
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
      </>
    </div >
  )
}

export default App
