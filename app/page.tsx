export default async function Home() {
  let data: any[] = [];

  try {
    const res = await fetch(
      "https://opensheet.elk.sh/1qwtUjm1ghhxuBK_urQZntHKaKKbH8eAeOT6m23__W0Y/Sheet1",
      { cache: "no-store" }
    );

    data = await res.json();
  } catch (error) {}

  return (
    <main style={styles.page}>

      {/* GLOW BACKGROUND */}
      <div style={styles.glow}></div>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.avatar}>🎤</div>

        <h1 style={styles.name}>Ayfasco</h1>
        <p style={styles.bio}>Afrobeats Artist • Producer • Music Creator 🔥</p>

        {/* SOCIAL / STREAM BUTTONS */}
        <div style={styles.streamRow}>
          <a style={styles.streamBtn} href="#">🎧 Audiomack</a>
          <a style={styles.streamBtn} href="#">🎵 Spotify</a>
          <a style={styles.streamBtn} href="#">▶ YouTube</a>
          <a 
            style={styles.streamBtn} 
            href="https://wa.me/2349126347822" 
            target="_blank"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>

      {/* FEATURED */}
      <section style={styles.featured}>
        <h2 style={styles.sectionTitle}>🔥 Latest Release</h2>

        <div style={styles.card}>
          <p>🎵 New music dropping soon...</p>
          <p style={{ color: "#aaa", fontSize: 13 }}>
            Follow for updates and exclusive drops
          </p>
        </div>
      </section>

      {/* LINKS FROM GOOGLE SHEET */}
      <section style={styles.links}>
        <h2 style={styles.sectionTitle}>⚡ All Links</h2>

        {data.map((item: any, i: number) => (
          <a key={i} href={item.link} target="_blank" style={styles.link}>
            🔗 {item.name}
          </a>
        ))}
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Ayfasco • Built for virality 🚀</p>
      </footer>

    </main>
  );
}

/* STYLES */
const styles: any = {
  page: {
    fontFamily: "Arial",
    minHeight: "100vh",
    padding: 20,
    color: "white",
    background: "#07070f",
    position: "relative",
    overflow: "hidden"
  },

  glow: {
    position: "absolute",
    top: "-120px",
    left: "-120px",
    width: 300,
    height: 300,
    background: "purple",
    filter: "blur(140px)",
    opacity: 0.5
  },

  hero: {
    textAlign: "center",
    marginTop: 30
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: "50%",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 50,
    background: "linear-gradient(45deg,#ff00cc,#3333ff)",
    boxShadow: "0 0 30px rgba(255,0,200,0.4)"
  },

  name: {
    fontSize: 40,
    marginTop: 10,
    fontWeight: "bold",
    background: "linear-gradient(90deg,#ff00cc,#3333ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },

  bio: {
    color: "#aaa",
    fontSize: 14
  },

  streamRow: {
    marginTop: 15,
    display: "flex",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap"
  },

  streamBtn: {
    padding: "10px 14px",
    background: "#111",
    border: "1px solid #333",
    borderRadius: 10,
    color: "white",
    textDecoration: "none",
    fontSize: 13
  },

  featured: {
    marginTop: 30,
    textAlign: "center"
  },

  sectionTitle: {
    marginBottom: 10,
    color: "#aaa"
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: 15,
    borderRadius: 12,
    maxWidth: 420,
    margin: "0 auto"
  },

  links: {
    marginTop: 30,
    textAlign: "center"
  },

  link: {
    display: "block",
    margin: "10px auto",
    padding: 14,
    width: "90%",
    maxWidth: 420,
    background: "rgba(255,255,255,0.04)",
    borderRadius: 12,
    textDecoration: "none",
    color: "white",
    border: "1px solid rgba(255,255,255,0.1)"
  },

  footer: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 12,
    color: "#555"
  }
};
  
