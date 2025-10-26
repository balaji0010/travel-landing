import React from "react";
import "./App.css";

export default function Travel() {
  return (
    <div className="travel-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Flyboard</div>
        <ul className="nav-links">
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="btn">Book Now</button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Discover the World with TravelX</h1>
        <p>Your adventure starts here. Explore new places, meet new people.</p>
        <button className="btn">Start Your Journey</button>
      </header>

      {/* Destinations */}
      <section className="section" id="destinations">
        <h2>Top Destinations</h2>
        <div className="grid">
          <div className="card">Paris</div>
          <div className="card">Maldives</div>
          <div className="card">Bali</div>
          <div className="card">Switzerland</div>
        </div>
      </section>

      {/* Travel Packages */}
      <section className="section" id="packages">
        <h2>Travel Packages</h2>
        <div className="grid">
          <div className="card">
            <h3>Honeymoon Special</h3>
            <p>Romantic escapes to Maldives, Bali & Paris.</p>
            <button className="btn">Book Now</button>
          </div>
          <div className="card">
            <h3>Family Vacation</h3>
            <p>Fun trips to theme parks & cultural wonders.</p>
            <button className="btn">Book Now</button>
          </div>
          <div className="card">
            <h3>Adventure Tours</h3>
            <p>Thrilling treks, safaris, and mountain trips.</p>
            <button className="btn">Book Now</button>
          </div>
          <div className="card">
            <h3>Solo Traveler</h3>
            <p>Budget-friendly, safe, and exciting journeys.</p>
            <button className="btn">Book Now</button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section" id="gallery">
        <h2>Travel Gallery</h2>
        <div className="gallery-grid">
          <img src="https://picsum.photos/300/200?1" alt="place1" />
          <img src="https://picsum.photos/300/200?2" alt="place2" />
          <img src="https://picsum.photos/300/200?3" alt="place3" />
          <img src="https://picsum.photos/300/200?4" alt="place4" />
          <img src="https://picsum.photos/300/200?5" alt="place5" />
          <img src="https://picsum.photos/300/200?6" alt="place6" />
        </div>
      </section>

      {/* Newsletter */}
      <section className="section newsletter">
        <h2>Subscribe for Travel Deals</h2>
        <p>Get the latest offers and discounts directly in your inbox.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button className="btn">Subscribe</button>
        </form>
      </section>

      {/* FAQ */}
      <section className="section faq" id="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>Do I need a visa for international trips?</h4>
          <p>It depends on the destination. We guide you through the process.</p>
        </div>
        <div className="faq-item">
          <h4>Can I cancel or reschedule my booking?</h4>
          <p>Yes, our flexible policy allows changes up to 48 hours before departure.</p>
        </div>
        <div className="faq-item">
          <h4>Are your packages all-inclusive?</h4>
          <p>Yes, they include flights, stays, meals, and sightseeing.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <p>© 2025 TravelX. All rights reserved.</p>
        <p>Follow us on Instagram | Facebook | Twitter</p>
      </footer>
    </div>
  );
}
