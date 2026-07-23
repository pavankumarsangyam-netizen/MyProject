import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Send, Code2, Trophy, Sparkles } from 'lucide-react'
import { blogPosts, certifications, gallery, projects, skills, timeline, stats, testimonials, services } from '../data/content'

const rise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
}

export const SectionTitle = ({ tag, title, copy }) => (
  <motion.div {...rise} className="section-title">
    <p className="eyebrow">{tag}</p>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </motion.div>
)

export function AnimatedBackground() {
  return (
    <>
      <div className="grain" />
      <div className="aurora a-one" />
      <div className="aurora a-two" />
      <div className="mesh-layer" />
    </>
  )
}

export function Button({ children, href = '#', quiet = false }) {
  return (
    <a href={href} className={`button ${quiet ? 'quiet' : ''}`}>
      {children}
      <ArrowUpRight size={16} />
    </a>
  )
}

export function ProjectCards() {
  return (
    <div className="projects-grid">
      {projects.map((project, i) => (
        <motion.article
          {...rise}
          transition={{ ...rise.transition, delay: i * 0.09 }}
          className="project-card glass"
          key={project.title}
        >
          <div className="project-art" style={{ '--project': project.color }}>
            <i />
            <i />
            <i />
          </div>
          <div className="project-copy">
            <p>
              {project.type} <span>{project.year}</span>
            </p>
            <h3>{project.title}</h3>
            <small>{project.summary}</small>
            <ul>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <ArrowUpRight className="project-arrow" size={18} />
        </motion.article>
      ))}
    </div>
  )
}

export function SkillCards() {
  return (
    <div className="skill-grid">
      {skills.map((skill, i) => (
        <motion.div
          {...rise}
          transition={{ ...rise.transition, delay: i * 0.035 }}
          className="skill-card glass"
          key={skill}
        >
          <b>{String(i + 1).padStart(2, '0')}</b>
          <span>{skill}</span>
        </motion.div>
      ))}
    </div>
  )
}

export function Timeline() {
  return (
    <div className="timeline">
      {timeline.map((item, i) => (
        <motion.article
          {...rise}
          transition={{ ...rise.transition, delay: i * 0.1 }}
          key={item.year}
          className="glass"
        >
          <time>{item.year}</time>
          <div>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

export function TechStats() {
  return (
    <div className="stats">
      {stats.map((stat, i) => (
        <motion.div
          {...rise}
          transition={{ ...rise.transition, delay: i * 0.08 }}
          className="stat glass"
          key={stat.label}
        >
          <span>{stat.label}</span>
          <strong>{stat.value}</strong>
          <small>{stat.detail}</small>
        </motion.div>
      ))}
    </div>
  )
}

export function ContactForm() {
  return (
    <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
      <label>
        Name
        <input placeholder="What should I call you?" />
      </label>
      <label>
        Email
        <input type="email" placeholder="Where can I reach you?" />
      </label>
      <label>
        Project details
        <textarea rows="4" placeholder="Tell me a little about your idea..." />
      </label>
      <button className="button" type="submit">
        Send inquiry <Send size={16} />
      </button>
    </form>
  )
}

export function ResumeDownload() {
  return (
    <a className="resume-download glass" href="/resume.pdf" download>
      <Download size={18} />
      <span>
        Download résumé
        <small>PDF · 2.4 MB</small>
      </span>
    </a>
  )
}

export function BlogCards() {
  return (
    <div className="blog-grid">
      {blogPosts.map((post, i) => (
        <motion.article {...rise} transition={{ ...rise.transition, delay: i * 0.08 }} className="glass blog-card" key={post.title}>
          <div className="blog-meta">
            <span>{post.category}</span>
            <span>{post.readTime}</span>
          </div>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <a href="/blogs" className="text-link">Read article</a>
        </motion.article>
      ))}
    </div>
  )
}

export function ImageGallery() {
  return (
    <div className="gallery-grid">
      {gallery.map((item, i) => (
        <div className="gallery-item glass" key={item}>
          <div className="gallery-badge">0{i + 1}</div>
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

export function GitHubStats() {
  return (
    <div className="mini-card-grid">
      <div className="glass mini-card">
        <Code2 size={18} />
        <strong>1.2k</strong>
        <span>GitHub contributions</span>
      </div>
      <div className="glass mini-card">
        <Code2 size={18} />
        <strong>26 repos</strong>
        <span>active & maintained</span>
      </div>
    </div>
  )
}

export function LeetCodeStats() {
  return (
    <div className="glass mini-card">
      <Sparkles size={18} />
      <strong>368</strong>
      <span>LeetCode problems solved</span>
    </div>
  )
}

export function CodeforcesStats() {
  return (
    <div className="glass mini-card">
      <Trophy size={18} />
      <strong>1421</strong>
      <span>Codeforces specialist rating</span>
    </div>
  )
}

export function CodeChefStats() {
  return (
    <div className="glass mini-card">
      <Sparkles size={18} />
      <strong>3★</strong>
      <span>CodeChef competitive profile</span>
    </div>
  )
}

export function TypingAnimation() {
  return (
    <div className="type-line">
      creative technologist<span className="cursor-blink">|</span>
    </div>
  )
}

export function TerminalAnimation() {
  return (
    <div className="terminal glass">
      <div className="terminal-top">
        <i />
        <i />
        <i />
        <span>portfolio.sh</span>
      </div>
      <p><b>~</b> whoami</p>
      <TypingAnimation />
      <p><b>~</b> <span className="blink">_</span></p>
    </div>
  )
}

export function ExperienceCards() {
  return (
    <div className="experience-grid">
      {timeline.map((item, i) => (
        <motion.article {...rise} transition={{ ...rise.transition, delay: i * 0.07 }} className="glass experience-card" key={item.title}>
          <time>{item.year}</time>
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
        </motion.article>
      ))}
    </div>
  )
}

export function TestimonialsCard() {
  return (
    <div className="testimonials-grid">
      {testimonials.map((item, i) => (
        <motion.blockquote {...rise} transition={{ ...rise.transition, delay: i * 0.08 }} className="glass testimonial" key={item.author}>
          <p>“{item.quote}”</p>
          <footer>{item.author}</footer>
        </motion.blockquote>
      ))}
    </div>
  )
}

export function ServicesCards() {
  return (
    <div className="service-list">
      {services.map((item, i) => (
        <motion.article {...rise} transition={{ ...rise.transition, delay: i * 0.08 }} className="glass" key={item.title}>
          <b>0{i + 1}</b>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <Button href="/contact" quiet>
            Learn more
          </Button>
        </motion.article>
      ))}
    </div>
  )
}

export function CertificationCards() {
  return (
    <div className="cert-grid">
      {certifications.map((item, i) => (
        <motion.div {...rise} transition={{ ...rise.transition, delay: i * 0.06 }} className="glass cert-card" key={item}>
          <span>{String(i + 1).padStart(2, '0')}</span>
          <strong>{item}</strong>
        </motion.div>
      ))}
    </div>
  )
}

export function AchievementCards() {
  return (
    <div className="achievement-grid">
      {['Built premium product systems', 'Improved frontend quality', 'Mentored engineering teams'].map((item, i) => (
        <motion.div {...rise} transition={{ ...rise.transition, delay: i * 0.06 }} className="glass achievement-card" key={item}>
          <Trophy size={18} />
          <p>{item}</p>
        </motion.div>
      ))}
    </div>
  )
}
