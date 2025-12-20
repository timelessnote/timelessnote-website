import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      
      {/* HERO */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  style={{ textAlign: "center", padding: "80px 20px" }}
>
  <motion.img
    src="/BG1.png"
    alt="Timeless Note"
    style={{ width: 180, marginBottom: 20 }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  />

  <motion.h1
    style={{ color: "#d4af37", fontSize: 48 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  >
    Timeless Note
  </motion.h1>

  <motion.p
    style={{ maxWidth: 600, margin: "20px auto", color: "#ccc" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
  >
    Capturing heartfelt messages and unforgettable moments through premium event experiences.
  </motion.p>

  <motion.a
    href="#book"
    whileHover={{ scale: 1.05 }}
    style={{
      background: "#d4af37",
      color: "#000",
      padding: "12px 30px",
      borderRadius: 30,
      textDecoration: "none",
      fontWeight: "bold",
      display: "inline-block",
      marginTop: 20
    }}
  >
    Book Your Event
  </motion.a>
</motion.section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#d4af37" }}>Services</h2>
        <p>Vintage Telephone Video Guestbook • Welcome / Selfie Mirror • Polaroid Souvenirs</p>
      </section>

      {/* PACKAGES */}
      <section style={{ padding: "60px 20px", background: "#111" }}>
        <h2 style={{ color: "#d4af37", textAlign: "center" }}>Packages</h2>

        <div style={{ maxWidth: 800, margin: "40px auto" }}>
          <h3>🎥 Video Guestbook – Classic (₱5,999)</h3>
          <ul>
            <li>3-HOURS RENTAL DURATION - UNLIMITED VIDEO</li>
            <li>CUSTOMIZED STANDY PHOTO ON THE TELEPHONE SCREEN</li>
            <li>VIDEO GUESTBOOK VINTAGE TELEPHONE</li>
            <li>COPY OF ALL FILES VIA GOOGLE DRIVE (1 MONTH ACCESS)</li>
            <li>CLASSIC BOOTH SET-UP</li>
            <li>1-2 PROFESSIONAL EVENT ATTENDANT</li>
            <li>TRANSPORTATION FEE - METRO MANILA AND SOME
AREAS IN RIZAL (ANTIPOLO, TAYTAY, CAINTA)</li>
            <li>"FREE" Welcome / Selfie Mirror (Promo)</li>
          </ul>

          <h3 style={{ marginTop: 40 }}>🪞 Welcome / Selfie Mirror – ₱2,999</h3>
          <ul>
            <li>Arc mirror w/ LED lights</li>
            <li>Personalized decal</li>
            <li>Flower arrangement & signage</li>
          </ul>

          <h3 style={{ marginTop: 40 }}>📸 Polaroid Souvenir Packages</h3>
          <ul>
            <li>Classic – ₱4,499 (40 films)</li>
            <li>Eternal – ₱5,999 (60 films)</li>
            <li>Supreme – ₱7,499 (80 films)</li>
          </ul>
        </div>
      </section>
      <video
  src="/packages/ALL.mp4"
  autoPlay
  muted
  loop
  playsInline
  style={{
    width: "100%",
    borderRadius: 12,
    marginBottom: 15
  }}
/>


      {/* BOOKING */}
      <section id="book" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#d4af37" }}>Book Your Date</h2>
        <iframe
          src="https://docs.google.com/forms/d/1yxnwotaYgLsoyt5o7KYB-8MPWiAQSQDRUH2mVvCy4Dc/viewform?embedded=true"
          width="100%"
          height="700"
          style={{ border: "none", marginTop: 30 }}
        ></iframe>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: 30, textAlign: "center", background: "#050505", color: "#888" }}>
        <p>© 2025 Timeless Note</p>
        <p>
          <a href="https://www.facebook.com/timelessnote" style={{ color: "#d4af37" }}>Facebook</a> |{" "}
          <a href="https://www.instagram.com/timelessnote_/" style={{ color: "#d4af37" }}>Instagram</a> |{" "}
          <a href="https://www.tiktok.com/@timelessnote_" style={{ color: "#d4af37" }}>TikTok</a>
        </p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/639158356581"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "#25D366",
          color: "#fff",
          padding: 15,
          borderRadius: "50%",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        WhatsApp
      </a>
    </div>
  );
}
