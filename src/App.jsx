import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      
      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <motion.img
          src="/BG1.png"
          alt="Timeless Note"
          style={{ width: 180, marginBottom: 20 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        />
        <h1 style={{ color: "#d4af37", fontSize: 48 }}>Timeless Note</h1>
        <p style={{ maxWidth: 600, margin: "20px auto", color: "#ccc" }}>
          Capturing heartfelt messages and unforgettable moments through premium event experiences.
        </p>
        <a
          href="#book"
          style={{
            background: "#d4af37",
            color: "#000",
            padding: "12px 30px",
            borderRadius: 30,
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Book Your Event
        </a>
      </section>

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
            <li>3 hours rental – unlimited videos</li>
            <li>Customized standby photo</li>
            <li>Google Drive (1 month)</li>
            <li>FREE Welcome / Selfie Mirror (Promo)</li>
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
