import React, { useState, useEffect, useRef } from 'react';

// ═══════════════════════════════════════════════════════════════════════════════
// ✨ CUSTOMIZE YOUR PROFILE HERE - Edit everything below! ✨
// ═══════════════════════════════════════════════════════════════════════════════

const PROFILE_DATA = {
  // Basic Info
  name: "Chigirl",
  nickname: "Chi",
  tagline: "Software girlie by day, amala connoisseur by night 🍯",
  age: 25,
  location: "Lagos → London",
  height: "5'7\"",
  
  // Quick Stats
  zodiac: "Scorpio ♏",
  mbti: "ENTJ",
  loveLanguage: "Quality Time & Acts of Service",
  attachment: "Secure",
  languages: ["English", "Igbo", "Yoruba (small small)"],
  religion: "Christian (but I won't force you to church)",
  
  // Personality & Vibe
  personality: [
    { trait: "Ambitious", emoji: "🎯", level: 95 },
    { trait: "Sarcastic", emoji: "😏", level: 88 },
    { trait: "Loyal", emoji: "🤞🏾", level: 100 },
    { trait: "Overthinker", emoji: "🧠", level: 75 },
    { trait: "Cautious Romantic", emoji: "🥹", level: 82 }
  ],
  
  energy: "I match energy. You give 10%, I give 10%. You give 100%, I'm giving 150% and a backrub.",
  
  // Interests
  interests: [
    { name: "Tech & Startups", icon: "💻" },
    { name: "Afrobeats", icon: "🎵" },
    { name: "Traveling", icon: "✈️" },
    { name: "Cooking", icon: "🍳" },
    { name: "Skincare", icon: "✨" },
    { name: "Reading", icon: "📚" },
    { name: "Gym (sometimes)", icon: "🏋🏾‍♀️" },
    { name: "Nollywood", icon: "🎬" }
  ],
  
  // Current Obsessions
  currentObsessions: [
    "Tems' new album on repeat",
    "Finding the perfect jollof recipe",
    "Learning to be more patient (it's not going well)",
    "Duolingo French (312 day streak!)"
  ],
  
  // Favorites
  favorites: {
    food: ["Amala & Ewedu", "Suya", "Plantain everything", "Thai food"],
    artists: ["Tems", "Burna Boy", "Sza", "Daniel Caesar", "Rema"],
    shows: ["Industry", "The Bear", "Blood & Water", "Love Is Blind"],
    movies: ["Black Panther", "The Proposal", "Coming to America"],
    books: ["Americanah", "Atomic Habits", "The Alchemist"],
    places: ["Zanzibar", "Dubai", "Accra", "My bed"]
  },
  
  // Green Flags I Bring
  greenFlags: [
    "I'll hype you up to your friends AND your enemies",
    "I remember small details you mentioned 3 months ago",
    "My cooking will have you calling your mom less",
    "I'll never let you walk on the traffic side",
    "I handle conflict like an adult (mostly)",
    "Your secrets are actually safe with me"
  ],
  
  // What I'm Looking For
  lookingFor: {
    type: "Something serious (but let's be friends first)",
    traits: [
      "Emotionally intelligent & communicative",
      "Ambitious with actual goals",
      "Can handle my sarcasm & match it",
      "Family-oriented",
      "Knows how to plan a proper date",
      "Taller than me in heels (non-negotiable, sorry 😭)"
    ]
  },
  
  // Non-Negotiables / Deal Breakers
  dealBreakers: [
    "Situationships & undefined things",
    "Men who can't hold conversations",
    "Smoking",
    "'I'm not really on social media' but online 24/7",
    "Mama's boys (she can have you)",
    "No ambition beyond FIFA & betting"
  ],
  
  // The Ick List
  icks: [
    "Running for the bus",
    "Ordering well-done steak",
    "Typing 'lol' after everything",
    "Slow walkers",
    "Voice notes longer than 2 mins"
  ],
  
  // Hot Takes
  hotTakes: [
    { take: "Jollof rice is overrated. There, I said it.", spicy: 4 },
    { take: "Long distance can work if both people are serious.", spicy: 2 },
    { take: "The 'chase' is dead. Just say you like someone.", spicy: 3 },
    { take: "Couples who post everything are usually unhappy.", spicy: 5 },
    { take: "Men fall in love faster than women.", spicy: 3 }
  ],
  
  // FAQ - Answer common questions upfront
  faq: [
    { q: "What are you looking for?", a: "A best friend I can kiss. Partnership. Growth. Inside jokes. The whole thing." },
    { q: "Why are you single?", a: "I chose peace over settling. Also I was healing and leveling up. Now I'm ready." },
    { q: "What's your love language?", a: "Quality time first, then acts of service. Just be present and thoughtful." },
    { q: "Are you close to your family?", a: "Very. Sunday calls with my mom are non-negotiable. You'll meet them eventually." },
    { q: "What do you do for fun?", a: "Brunches, concerts, travel, trying new restaurants, or honestly just staying in with good company." },
    { q: "What's your idea of a perfect date?", a: "Effort > money. Plan something thoughtful. Could be a picnic or a rooftop—just show you paid attention." }
  ],
  
  // How to Approach
  shootYourShot: {
    do: [
      "Start with something from this page (effort = attractive)",
      "Be direct about your intentions",
      "Have an actual personality",
      "Suggest a real plan, not 'we should hang sometime'"
    ],
    dont: [
      "Open with 'Hey beautiful' (be original please)",
      "Ask questions I've answered here",
      "Send unsolicited anything",
      "Play games or take 3 days to reply"
    ]
  },
  
  // Social Links (optional)
  socials: {
    instagram: "@chi.oko",
    twitter: "@chidinmao_",
    spotify: "Chi's Vibe Check"
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// 🎨 Main Application
// ═══════════════════════════════════════════════════════════════════════════════

export default function AboutMeDating() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [hoveredFav, setHoveredFav] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={styles.container}>
      <style>{globalStyles}</style>
      
      {/* Floating Navigation */}
      <FloatingNav activeSection={activeSection} />
      
      {/* Hero Section */}
      <HeroSection data={PROFILE_DATA} scrollY={scrollY} />
      
      {/* Quick Stats */}
      <QuickStats data={PROFILE_DATA} />
      
      {/* The Vibe */}
      <VibeSection data={PROFILE_DATA} />
      
      {/* Interests */}
      <InterestsSection data={PROFILE_DATA} />
      
      {/* Favorites */}
      <FavoritesSection data={PROFILE_DATA} hoveredFav={hoveredFav} setHoveredFav={setHoveredFav} />
      
      {/* Green Flags */}
      <GreenFlagsSection data={PROFILE_DATA} />
      
      {/* Looking For */}
      <LookingForSection data={PROFILE_DATA} />
      
      {/* Deal Breakers & Icks */}
      <RedFlagsSection data={PROFILE_DATA} />
      
      {/* Hot Takes */}
      <HotTakesSection data={PROFILE_DATA} />
      
      {/* FAQ */}
      <FAQSection data={PROFILE_DATA} />
      
      {/* Shoot Your Shot */}
      <ShootYourShotSection data={PROFILE_DATA} />
      
      {/* Footer */}
      <Footer data={PROFILE_DATA} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 🧭 Floating Navigation
// ═══════════════════════════════════════════════════════════════════════════════

function FloatingNav({ activeSection }) {
  const sections = [
    { id: 'hero', label: '✦' },
    { id: 'stats', label: 'Stats' },
    { id: 'vibe', label: 'Vibe' },
    { id: 'faves', label: 'Faves' },
    { id: 'flags', label: 'Flags' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <nav style={styles.floatingNav}>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          style={{
            ...styles.navItem,
            opacity: activeSection === section.id ? 1 : 0.5
          }}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 🌟 Hero Section
// ═══════════════════════════════════════════════════════════════════════════════

function HeroSection({ data, scrollY }) {
  return (
    <section id="hero" style={styles.heroSection}>
      <div style={styles.heroBackground}>
        <div style={{
          ...styles.heroGradient,
          transform: `translateY(${scrollY * 0.3}px)`
        }} />
        <div style={styles.noiseOverlay} />
      </div>
      
      <div style={styles.heroContent}>
        <div style={styles.profileImageContainer}>
          <div style={styles.profileImage}>
            <span style={styles.profileEmoji}>👸🏾</span>
          </div>
          <div style={styles.onlineIndicator}>
            <span style={styles.onlineDot} />
            <span>Available</span>
          </div>
        </div>
        
        <div style={styles.heroText}>
          <p style={styles.heroGreeting}>Hey, I'm</p>
          <h1 style={styles.heroName}>{data.name}</h1>
          <p style={styles.heroNickname}>but you can call me {data.nickname} 💫</p>
          <p style={styles.heroTagline}>{data.tagline}</p>
          
          <div style={styles.heroMeta}>
            <span style={styles.metaItem}>📍 {data.location}</span>
            <span style={styles.metaDivider}>•</span>
            <span style={styles.metaItem}>{data.age} years of excellence</span>
            <span style={styles.metaDivider}>•</span>
            <span style={styles.metaItem}>{data.height}</span>
          </div>
        </div>
        
        <div style={styles.scrollIndicator}>
          <span>Scroll to know me better</span>
          <div style={styles.scrollArrow}>↓</div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 📊 Quick Stats Section
// ═══════════════════════════════════════════════════════════════════════════════

function QuickStats({ data }) {
  const stats = [
    { label: "Zodiac", value: data.zodiac, icon: "✨" },
    { label: "MBTI", value: data.mbti, icon: "🧠" },
    { label: "Love Language", value: data.loveLanguage, icon: "💕" },
    { label: "Attachment", value: data.attachment, icon: "🔗" },
    { label: "Religion", value: data.religion, icon: "🙏🏾" },
    { label: "Languages", value: data.languages.join(", "), icon: "🗣️" }
  ];

  return (
    <section id="stats" style={styles.section}>
      <div style={styles.sectionInner}>
        <SectionHeader 
          title="The Basics" 
          subtitle="Everything you'd ask on the first date, answered."
          emoji="📋"
        />
        
        <div style={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              style={{
                ...styles.statCard,
                animationDelay: `${i * 0.1}s`
              }}
            >
              <span style={styles.statIcon}>{stat.icon}</span>
              <span style={styles.statLabel}>{stat.label}</span>
              <span style={styles.statValue}>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 💫 Vibe Section
// ═══════════════════════════════════════════════════════════════════════════════

function VibeSection({ data }) {
  return (
    <section id="vibe" style={{...styles.section, background: 'rgba(251, 191, 36, 0.03)'}}>
      <div style={styles.sectionInner}>
        <SectionHeader 
          title="The Vibe Check" 
          subtitle="Who I am when nobody's watching (and when they are)"
          emoji="✨"
        />
        
        <div style={styles.personalityGrid}>
          {data.personality.map((trait, i) => (
            <div key={trait.trait} style={styles.traitCard}>
              <div style={styles.traitHeader}>
                <span style={styles.traitEmoji}>{trait.emoji}</span>
                <span style={styles.traitName}>{trait.trait}</span>
              </div>
              <div style={styles.traitBarContainer}>
                <div 
                  style={{
                    ...styles.traitBar,
                    width: `${trait.level}%`,
                    animationDelay: `${i * 0.15}s`
                  }} 
                />
              </div>
              <span style={styles.traitLevel}>{trait.level}%</span>
            </div>
          ))}
        </div>
        
        <div style={styles.energyCard}>
          <span style={styles.energyIcon}>⚡</span>
          <p style={styles.energyText}>{data.energy}</p>
        </div>
        
        <div style={styles.obsessionsCard}>
          <h4 style={styles.obsessionsTitle}>Currently obsessed with:</h4>
          <ul style={styles.obsessionsList}>
            {data.currentObsessions.map((item, i) => (
              <li key={i} style={styles.obsessionItem}>
                <span style={styles.obsessionBullet}>→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 🎯 Interests Section
// ═══════════════════════════════════════════════════════════════════════════════

function InterestsSection({ data }) {
  return (
    <section style={styles.section}>
      <div style={styles.sectionInner}>
        <SectionHeader 
          title="What I'm Into" 
          subtitle="Topics I can talk about for hours"
          emoji="💭"
        />
        
        <div style={styles.interestsGrid}>
          {data.interests.map((interest, i) => (
            <div 
              key={interest.name} 
              style={{
                ...styles.interestPill,
                animationDelay: `${i * 0.08}s`
              }}
            >
              <span>{interest.icon}</span>
              <span>{interest.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 💖 Favorites Section
// ═══════════════════════════════════════════════════════════════════════════════

function FavoritesSection({ data }) {
  const categories = [
    { key: 'food', label: 'Foods', icon: '🍽️' },
    { key: 'artists', label: 'Artists', icon: '🎵' },
    { key: 'shows', label: 'Shows', icon: '📺' },
    { key: 'movies', label: 'Movies', icon: '🎬' },
    { key: 'books', label: 'Books', icon: '📚' },
    { key: 'places', label: 'Places', icon: '🌍' }
  ];

  return (
    <section id="faves" style={{...styles.section, background: 'rgba(251, 191, 36, 0.03)'}}>
      <div style={styles.sectionInner}>
        <SectionHeader 
          title="My Favorites" 
          subtitle="So you never have to ask 'what kind of music do you like?'"
          emoji="⭐"
        />
        
        <div style={styles.favoritesGrid}>
          {categories.map((cat) => (
            <div key={cat.key} style={styles.favoriteCard}>
              <div style={styles.favoriteHeader}>
                <span style={styles.favoriteIcon}>{cat.icon}</span>
                <h4 style={styles.favoriteLabel}>{cat.label}</h4>
              </div>
              <ul style={styles.favoriteList}>
                {data.favorites[cat.key].map((item, i) => (
                  <li key={i} style={styles.favoriteItem}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 💚 Green Flags Section
// ═══════════════════════════════════════════════════════════════════════════════

function GreenFlagsSection({ data }) {
  return (
    <section id="flags" style={styles.section}>
      <div style={styles.sectionInner}>
        <SectionHeader 
          title="Green Flags I Bring" 
          subtitle="What you're signing up for (the good parts)"
          emoji="💚"
        />
        
        <div style={styles.flagsGrid}>
          {data.greenFlags.map((flag, i) => (
            <div 
              key={i} 
              style={{
                ...styles.greenFlagCard,
                animationDelay: `${i * 0.1}s`
              }}
            >
              <span style={styles.flagCheck}>✓</span>
              <p style={styles.flagText}>{flag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 💕 Looking For Section
// ═══════════════════════════════════════════════════════════════════════════════

function LookingForSection({ data }) {
  return (
    <section style={{...styles.section, background: 'rgba(251, 191, 36, 0.03)'}}>
      <div style={styles.sectionInner}>
        <SectionHeader 
          title="What I'm Looking For" 
          subtitle={data.lookingFor.type}
          emoji="🎯"
        />
        
        <div style={styles.lookingForGrid}>
          {data.lookingFor.traits.map((trait, i) => (
            <div 
              key={i} 
              style={{
                ...styles.lookingForCard,
                animationDelay: `${i * 0.1}s`
              }}
            >
              <span style={styles.lookingForNumber}>{String(i + 1).padStart(2, '0')}</span>
              <p style={styles.lookingForText}>{trait}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 🚩 Red Flags Section (Deal Breakers & Icks)
// ═══════════════════════════════════════════════════════════════════════════════

function RedFlagsSection({ data }) {
  return (
    <section style={styles.section}>
      <div style={styles.sectionInner}>
        <div style={styles.redFlagsContainer}>
          <div style={styles.redFlagsColumn}>
            <h3 style={styles.redFlagsTitle}>
              <span>🚫</span> Deal Breakers
            </h3>
            <p style={styles.redFlagsSubtitle}>Non-negotiables. Please don't waste our time.</p>
            <ul style={styles.redFlagsList}>
              {data.dealBreakers.map((item, i) => (
                <li key={i} style={styles.redFlagItem}>
                  <span style={styles.redFlagX}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div style={styles.redFlagsDivider} />
          
          <div style={styles.redFlagsColumn}>
            <h3 style={styles.redFlagsTitle}>
              <span>😬</span> The Ick List
            </h3>
            <p style={styles.redFlagsSubtitle}>Small things that give me the ick (sorry not sorry)</p>
            <ul style={styles.icksList}>
              {data.icks.map((item, i) => (
                <li key={i} style={styles.ickItem}>
                  <span style={styles.ickEmoji}>🥴</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 🔥 Hot Takes Section
// ═══════════════════════════════════════════════════════════════════════════════

function HotTakesSection({ data }) {
  return (
    <section style={{...styles.section, background: 'rgba(251, 191, 36, 0.03)'}}>
      <div style={styles.sectionInner}>
        <SectionHeader 
          title="Hot Takes" 
          subtitle="Opinions that might start arguments at the dinner table"
          emoji="🔥"
        />
        
        <div style={styles.hotTakesGrid}>
          {data.hotTakes.map((item, i) => (
            <div 
              key={i} 
              style={{
                ...styles.hotTakeCard,
                animationDelay: `${i * 0.1}s`
              }}
            >
              <p style={styles.hotTakeText}>"{item.take}"</p>
              <div style={styles.spicyMeter}>
                <span style={styles.spicyLabel}>Spicy level:</span>
                <div style={styles.spicyPeppers}>
                  {[...Array(5)].map((_, j) => (
                    <span 
                      key={j} 
                      style={{
                        ...styles.pepper,
                        opacity: j < item.spicy ? 1 : 0.2
                      }}
                    >
                      🌶️
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ❓ FAQ Section
// ═══════════════════════════════════════════════════════════════════════════════

function FAQSection({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" style={styles.section}>
      <div style={styles.sectionInner}>
        <SectionHeader 
          title="FAQ" 
          subtitle="Questions I'm tired of answering in DMs"
          emoji="💬"
        />
        
        <div style={styles.faqContainer}>
          {data.faq.map((item, i) => (
            <div 
              key={i} 
              style={styles.faqItem}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div style={styles.faqQuestion}>
                <span style={styles.faqQ}>Q:</span>
                <span style={styles.faqQuestionText}>{item.q}</span>
                <span style={{
                  ...styles.faqToggle,
                  transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)'
                }}>+</span>
              </div>
              <div style={{
                ...styles.faqAnswer,
                maxHeight: openIndex === i ? '200px' : '0',
                opacity: openIndex === i ? 1 : 0,
                padding: openIndex === i ? '1rem 0 0 2rem' : '0 0 0 2rem'
              }}>
                <span style={styles.faqA}>A:</span>
                <span style={styles.faqAnswerText}>{item.a}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 🎯 Shoot Your Shot Section
// ═══════════════════════════════════════════════════════════════════════════════

function ShootYourShotSection({ data }) {
  return (
    <section style={{...styles.section, background: 'linear-gradient(180deg, rgba(251, 191, 36, 0.05) 0%, rgba(251, 191, 36, 0.1) 100%)'}}>
      <div style={styles.sectionInner}>
        <SectionHeader 
          title="How to Shoot Your Shot" 
          subtitle="Instructions for the brave souls"
          emoji="🏀"
        />
        
        <div style={styles.shootGrid}>
          <div style={styles.shootColumn}>
            <h4 style={styles.shootColumnTitle}>
              <span style={styles.doIcon}>✓</span> Do This
            </h4>
            <ul style={styles.shootList}>
              {data.shootYourShot.do.map((item, i) => (
                <li key={i} style={styles.shootDoItem}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div style={styles.shootColumn}>
            <h4 style={styles.shootColumnTitle}>
              <span style={styles.dontIcon}>✕</span> Not This
            </h4>
            <ul style={styles.shootList}>
              {data.shootYourShot.dont.map((item, i) => (
                <li key={i} style={styles.shootDontItem}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div style={styles.socialsContainer}>
          <p style={styles.socialsLabel}>Find me here:</p>
          <div style={styles.socialsLinks}>
            <a href="#" style={styles.socialLink}>
              <span>📸</span> {data.socials.instagram}
            </a>
            <a href="#" style={styles.socialLink}>
              <span>🐦</span> {data.socials.twitter}
            </a>
            <a href="#" style={styles.socialLink}>
              <span>🎵</span> {data.socials.spotify}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 🔖 Section Header Component
// ═══════════════════════════════════════════════════════════════════════════════

function SectionHeader({ title, subtitle, emoji }) {
  return (
    <div style={styles.sectionHeader}>
      <span style={styles.sectionEmoji}>{emoji}</span>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <p style={styles.sectionSubtitle}>{subtitle}</p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 👣 Footer
// ═══════════════════════════════════════════════════════════════════════════════

function Footer({ data }) {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p style={styles.footerText}>
          Made with 🤍 and a lot of self-awareness
        </p>
        <p style={styles.footerName}>
          © {new Date().getFullYear()} {data.name}
        </p>
        <p style={styles.footerTagline}>
          "If you read all of this, you're already doing better than 90% of my DMs"
        </p>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 🎨 Styles Object
// ═══════════════════════════════════════════════════════════════════════════════

const styles = {
  container: {
    minHeight: '100vh',
    background: '#0D0D0D',
    color: '#FAFAFA',
    fontFamily: '"DM Sans", system-ui, sans-serif',
    overflowX: 'hidden'
  },

  // Navigation
  floatingNav: {
    position: 'fixed',
    top: '50%',
    right: '1.5rem',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    zIndex: 100,
    padding: '1rem 0.5rem',
    background: 'rgba(13, 13, 13, 0.8)',
    backdropFilter: 'blur(10px)',
    borderRadius: '50px',
    border: '1px solid rgba(251, 191, 36, 0.1)'
  },

  navItem: {
    color: '#FBBF24',
    textDecoration: 'none',
    fontSize: '0.7rem',
    fontWeight: '500',
    transition: 'opacity 0.3s ease',
    padding: '0.25rem'
  },

  // Hero Section
  heroSection: {
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },

  heroBackground: {
    position: 'absolute',
    inset: 0,
    zIndex: 0
  },

  heroGradient: {
    position: 'absolute',
    inset: 0,
    background: `
      radial-gradient(ellipse at 30% 20%, rgba(251, 191, 36, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse at 70% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 40%),
      linear-gradient(180deg, #0D0D0D 0%, #1A1A1A 100%)
    `
  },

  noiseOverlay: {
    position: 'absolute',
    inset: 0,
    opacity: 0.03,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`
  },

  heroContent: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    padding: '2rem',
    animation: 'fadeInUp 1s ease-out'
  },

  profileImageContainer: {
    marginBottom: '2rem'
  },

  profileImage: {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
    boxShadow: '0 20px 60px rgba(251, 191, 36, 0.3)',
    border: '4px solid rgba(251, 191, 36, 0.3)'
  },

  profileEmoji: {
    fontSize: '5rem'
  },

  onlineIndicator: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    background: 'rgba(34, 197, 94, 0.1)',
    border: '1px solid rgba(34, 197, 94, 0.3)',
    borderRadius: '50px',
    fontSize: '0.8rem',
    color: '#22C55E'
  },

  onlineDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#22C55E',
    animation: 'pulse 2s infinite'
  },

  heroText: {
    marginBottom: '3rem'
  },

  heroGreeting: {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: '0.5rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase'
  },

  heroName: {
    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
    fontFamily: '"Playfair Display", Georgia, serif',
    fontWeight: '600',
    margin: '0 0 0.5rem',
    background: 'linear-gradient(135deg, #FBBF24 0%, #FDE68A 50%, #FBBF24 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },

  heroNickname: {
    fontSize: '1.1rem',
    color: 'rgba(255,255,255,0.6)',
    marginBottom: '1rem'
  },

  heroTagline: {
    fontSize: '1.25rem',
    color: 'rgba(255,255,255,0.8)',
    maxWidth: '500px',
    margin: '0 auto 1.5rem',
    lineHeight: '1.6'
  },

  heroMeta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap',
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.5)'
  },

  metaItem: {},
  metaDivider: { opacity: 0.3 },

  scrollIndicator: {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'rgba(255,255,255,0.4)',
    fontSize: '0.8rem',
    animation: 'bounce 2s infinite'
  },

  scrollArrow: {
    fontSize: '1.5rem'
  },

  // Sections
  section: {
    padding: '5rem 1.5rem',
    position: 'relative'
  },

  sectionInner: {
    maxWidth: '1000px',
    margin: '0 auto'
  },

  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3rem'
  },

  sectionEmoji: {
    fontSize: '2rem',
    display: 'block',
    marginBottom: '1rem'
  },

  sectionTitle: {
    fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
    fontFamily: '"Playfair Display", Georgia, serif',
    fontWeight: '600',
    margin: '0 0 0.75rem',
    color: '#FBBF24'
  },

  sectionSubtitle: {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.5)',
    maxWidth: '400px',
    margin: '0 auto'
  },

  // Stats Grid
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem'
  },

  statCard: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(251, 191, 36, 0.1)',
    borderRadius: '12px',
    padding: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    animation: 'fadeInUp 0.6s ease-out backwards',
    transition: 'all 0.3s ease'
  },

  statIcon: {
    fontSize: '1.5rem'
  },

  statLabel: {
    fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    minWidth: '80px'
  },

  statValue: {
    fontSize: '0.95rem',
    color: '#FAFAFA',
    flex: 1
  },

  // Personality Traits
  personalityGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    marginBottom: '2rem'
  },

  traitCard: {
    display: 'grid',
    gridTemplateColumns: '140px 1fr 50px',
    alignItems: 'center',
    gap: '1rem'
  },

  traitHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },

  traitEmoji: {
    fontSize: '1.25rem'
  },

  traitName: {
    fontSize: '0.95rem',
    color: '#FAFAFA'
  },

  traitBarContainer: {
    height: '8px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '4px',
    overflow: 'hidden'
  },

  traitBar: {
    height: '100%',
    background: 'linear-gradient(90deg, #FBBF24, #F59E0B)',
    borderRadius: '4px',
    animation: 'expandWidth 1s ease-out backwards'
  },

  traitLevel: {
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'right'
  },

  energyCard: {
    background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(251, 191, 36, 0.05) 100%)',
    border: '1px solid rgba(251, 191, 36, 0.2)',
    borderRadius: '16px',
    padding: '1.5rem',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '2rem'
  },

  energyIcon: {
    fontSize: '1.5rem'
  },

  energyText: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: 'rgba(255,255,255,0.9)',
    fontStyle: 'italic',
    margin: 0
  },

  obsessionsCard: {
    background: 'rgba(255,255,255,0.02)',
    borderRadius: '12px',
    padding: '1.5rem'
  },

  obsessionsTitle: {
    fontSize: '0.9rem',
    color: '#FBBF24',
    marginBottom: '1rem',
    fontWeight: '500'
  },

  obsessionsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },

  obsessionItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: 'rgba(255,255,255,0.7)',
    fontSize: '0.95rem'
  },

  obsessionBullet: {
    color: '#FBBF24'
  },

  // Interests
  interestsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    justifyContent: 'center'
  },

  interestPill: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.25rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(251, 191, 36, 0.15)',
    borderRadius: '50px',
    fontSize: '0.9rem',
    animation: 'fadeInUp 0.5s ease-out backwards',
    transition: 'all 0.3s ease',
    cursor: 'default'
  },

  // Favorites
  favoritesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.25rem'
  },

  favoriteCard: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.05)',
    borderRadius: '16px',
    padding: '1.5rem'
  },

  favoriteHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1rem',
    paddingBottom: '0.75rem',
    borderBottom: '1px solid rgba(251, 191, 36, 0.1)'
  },

  favoriteIcon: {
    fontSize: '1.25rem'
  },

  favoriteLabel: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#FBBF24',
    margin: 0
  },

  favoriteList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },

  favoriteItem: {
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.7)',
    paddingLeft: '1rem',
    position: 'relative'
  },

  // Green Flags
  flagsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem'
  },

  greenFlagCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1.25rem',
    background: 'rgba(34, 197, 94, 0.05)',
    border: '1px solid rgba(34, 197, 94, 0.15)',
    borderRadius: '12px',
    animation: 'fadeInUp 0.6s ease-out backwards'
  },

  flagCheck: {
    color: '#22C55E',
    fontSize: '1.25rem',
    fontWeight: '700'
  },

  flagText: {
    margin: 0,
    color: 'rgba(255,255,255,0.85)',
    fontSize: '0.95rem',
    lineHeight: '1.5'
  },

  // Looking For
  lookingForGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem'
  },

  lookingForCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1.25rem',
    background: 'rgba(255,255,255,0.02)',
    borderRadius: '12px',
    animation: 'fadeInUp 0.6s ease-out backwards'
  },

  lookingForNumber: {
    fontSize: '1.5rem',
    fontFamily: '"Playfair Display", serif',
    color: '#FBBF24',
    opacity: 0.5,
    fontWeight: '600'
  },

  lookingForText: {
    margin: 0,
    color: 'rgba(255,255,255,0.85)',
    fontSize: '0.95rem',
    lineHeight: '1.5'
  },

  // Red Flags
  redFlagsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    gap: '2rem',
    alignItems: 'start'
  },

  redFlagsColumn: {
    padding: '1.5rem'
  },

  redFlagsTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.25rem',
    marginBottom: '0.5rem',
    color: '#FAFAFA'
  },

  redFlagsSubtitle: {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: '1.5rem'
  },

  redFlagsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },

  redFlagItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.7)'
  },

  redFlagX: {
    color: '#EF4444',
    fontWeight: '700'
  },

  redFlagsDivider: {
    width: '1px',
    background: 'rgba(255,255,255,0.1)',
    alignSelf: 'stretch'
  },

  icksList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },

  ickItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.7)'
  },

  ickEmoji: {
    fontSize: '1rem'
  },

  // Hot Takes
  hotTakesGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },

  hotTakeCard: {
    padding: '1.5rem',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(251, 191, 36, 0.1)',
    borderRadius: '12px',
    animation: 'fadeInUp 0.6s ease-out backwards'
  },

  hotTakeText: {
    fontSize: '1.1rem',
    color: '#FAFAFA',
    margin: '0 0 1rem',
    fontStyle: 'italic',
    lineHeight: '1.6'
  },

  spicyMeter: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  },

  spicyLabel: {
    fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },

  spicyPeppers: {
    display: 'flex',
    gap: '0.25rem'
  },

  pepper: {
    fontSize: '0.9rem',
    transition: 'opacity 0.3s ease'
  },

  // FAQ
  faqContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },

  faqItem: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.05)',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },

  faqQuestion: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1.25rem',
    fontSize: '1rem'
  },

  faqQ: {
    color: '#FBBF24',
    fontWeight: '600'
  },

  faqQuestionText: {
    flex: 1,
    color: '#FAFAFA'
  },

  faqToggle: {
    color: '#FBBF24',
    fontSize: '1.5rem',
    transition: 'transform 0.3s ease'
  },

  faqAnswer: {
    display: 'flex',
    gap: '0.75rem',
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  },

  faqA: {
    color: 'rgba(255,255,255,0.4)',
    fontWeight: '600'
  },

  faqAnswerText: {
    color: 'rgba(255,255,255,0.7)',
    lineHeight: '1.6'
  },

  // Shoot Your Shot
  shootGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  },

  shootColumn: {},

  shootColumnTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.1rem',
    marginBottom: '1.25rem',
    color: '#FAFAFA'
  },

  doIcon: {
    color: '#22C55E',
    fontWeight: '700'
  },

  dontIcon: {
    color: '#EF4444',
    fontWeight: '700'
  },

  shootList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },

  shootDoItem: {
    padding: '0.75rem 1rem',
    background: 'rgba(34, 197, 94, 0.05)',
    border: '1px solid rgba(34, 197, 94, 0.1)',
    borderRadius: '8px',
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.8)'
  },

  shootDontItem: {
    padding: '0.75rem 1rem',
    background: 'rgba(239, 68, 68, 0.05)',
    border: '1px solid rgba(239, 68, 68, 0.1)',
    borderRadius: '8px',
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.8)'
  },

  socialsContainer: {
    textAlign: 'center',
    paddingTop: '2rem',
    borderTop: '1px solid rgba(255,255,255,0.05)'
  },

  socialsLabel: {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: '1rem'
  },

  socialsLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap'
  },

  socialLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#FBBF24',
    textDecoration: 'none',
    fontSize: '0.95rem',
    padding: '0.5rem 1rem',
    background: 'rgba(251, 191, 36, 0.1)',
    borderRadius: '50px',
    transition: 'all 0.3s ease'
  },

  // Footer
  footer: {
    padding: '4rem 1.5rem',
    textAlign: 'center',
    borderTop: '1px solid rgba(255,255,255,0.05)'
  },

  footerContent: {},

  footerText: {
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: '0.5rem'
  },

  footerName: {
    fontSize: '1rem',
    color: '#FBBF24',
    marginBottom: '1rem'
  },

  footerTagline: {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.3)',
    fontStyle: 'italic',
    maxWidth: '400px',
    margin: '0 auto'
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// 🎬 Global Styles & Animations
// ═══════════════════════════════════════════════════════════════════════════════

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:wght@400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: #0D0D0D;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes expandWidth {
    from {
      width: 0%;
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.1);
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(10px);
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .redFlagsContainer {
      grid-template-columns: 1fr !important;
    }
  }

  /* Hover effects */
  button:hover, a:hover {
    opacity: 0.9;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #0D0D0D;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(251, 191, 36, 0.3);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(251, 191, 36, 0.5);
  }
`;
