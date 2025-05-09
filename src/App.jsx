import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/the-team" element={<TheTeam />} />
          <Route path="/media" element={<Media />} />
          <Route path="/chief-instructor" element={<ChiefInstructor />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/private-sessions" element={<PrivateSessions />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

// Placeholder components
function Home() {
  return (
    <>
      <div className="landing">
        <h1>Welcome to White TIger Muay Thai Gym</h1>
        <p>Train with the best. Unleash your potential.</p>
      </div>
      <div className="home-video-wrapper">
        <iframe
          className="home-video"
          src="https://www.youtube.com/embed/nAOgGzNT-9s"
          title="White Tiger Muay Thai Gym Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
function TheTeam() {
  const teamImages = [
    {
      url: "https://static.wixstatic.com/media/1ffaee_06c4e5a508724d9fb12c40ed1c471f61~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e11d7cf6-7963-4678-83fd-0cf1d830f54c.jpg",
      alt: "Team Member 1",
    },
    {
      url: "https://static.wixstatic.com/media/1ffaee_aae6202915014f1389563e5d9992b113~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6354.jpg",
      alt: "Team Member 2",
    },
    {
      url: "https://static.wixstatic.com/media/1ffaee_a91b154520124c48b4df78a3a0e72253~mv2.png/v1/fill/w_600,h_450,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5487_heic.png",
      alt: "Team Member 3",
    },
    {
      url: "https://static.wixstatic.com/media/1ffaee_0396898f783445ef9fc5d3bc1dd636ec~mv2.png/v1/fill/w_600,h_450,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5987_HEIC.png",
      alt: "Team Member 4",
    },
    {
      url: "https://static.wixstatic.com/media/1ffaee_1a585716d17f4f69a4e9c0f28380fd4c~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0895.jpg",
      alt: "Team Member 5",
    },
    {
      url: "https://static.wixstatic.com/media/1ffaee_c1863d5ef7934ef2a73f5c36b4474330~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/468461119_18004553606678606_3240395466957881594_n.jpg",
      alt: "Team Member 6",
    },
  ];
  return (
    <div className="team-gallery" style={{ width: "100%", padding: "0" }}>
      {teamImages.map((img, idx) => (
        <div
          className="team-image-wrapper"
          key={idx}
          style={{ width: "100%", margin: "0" }}
        >
          <img
            src={img.url}
            alt={img.alt}
            className="team-image"
            style={{ width: "100%" }}
          />
        </div>
      ))}
    </div>
  );
}
function Media() {
  const videoIds = [
    "R5LleEEpyMY",
    "HONSTQmJDlg",
    "g0thqJdecYg",
    "4_V6ZeL76p0",
    "-Juii60mv7E",
    "r_c3C8H450s",
  ];
  return (
    <div className="media-gallery" style={{ width: "100%", padding: "0" }}>
      {videoIds.map((id, idx) => (
        <div
          className="media-video-wrapper"
          key={id}
          style={{ width: "100%", margin: "0" }}
        >
          <iframe
            className="media-video"
            src={`https://www.youtube.com/embed/${id}`}
            title={`YouTube video player ${idx + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ width: "100%" }}
          ></iframe>
        </div>
      ))}
    </div>
  );
}
function ChiefInstructor() {
  const images = [
    "https://static.wixstatic.com/media/1ffaee_50dd2d1638a141259da32f94ec07606e~mv2.jpg/v1/fill/w_306,h_349,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1ffaee_50dd2d1638a141259da32f94ec07606e~mv2.jpg",
    "https://static.wixstatic.com/media/1ffaee_d82298a3a9394678ac1b7af34fd68c5b~mv2.jpg/v1/fill/w_306,h_349,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1ffaee_d82298a3a9394678ac1b7af34fd68c5b~mv2.jpg",
    "https://static.wixstatic.com/media/1ffaee_8b2ff84f51b04ee4aedfc9606df3bbae~mv2.jpg/v1/fill/w_306,h_349,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1ffaee_8b2ff84f51b04ee4aedfc9606df3bbae~mv2.jpg",
    "https://static.wixstatic.com/media/1ffaee_0c09a57ecb2347cc9ef5df46a9e33246~mv2.jpg/v1/fill/w_306,h_349,al_br,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1ffaee_0c09a57ecb2347cc9ef5df46a9e33246~mv2.jpg",
    "https://static.wixstatic.com/media/1ffaee_2b314b8f33904dc88af111b6815786a0~mv2.jpg/v1/fill/w_306,h_349,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1ffaee_2b314b8f33904dc88af111b6815786a0~mv2.jpg",
  ];
  return (
    <>
      <div className="chief-instructor-info">
        <h2>Chief Instructor</h2>
        <h3>"Morgan The Yoga Flame"</h3>
        <ul>
          <li>16 Years of Combat Sports Experience</li>
          <li>Black Belt in Brazilian Jiu Jitsu</li>
          <li>Former Welterweight Cage Combat Champion</li>
          <li>4-1 Professional MMA Fighter (Last fight 3/11/22)</li>
        </ul>
        <p>
          White Tiger Muay Thai is a creative space. We practice the culture of
          the sport and work its philosophy. Do not be afraid to illustrate
          personality and character; to help utilize a positive experience
          during your martial arts journey. Cheers!
        </p>
      </div>
      <div className="chief-instructor-gallery">
        {images.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`Chief Instructor ${idx + 1}`}
            className="chief-instructor-image"
          />
        ))}
      </div>
      <div className="chief-instructor-feature-image-wrapper">
        <img
          src="https://static.wixstatic.com/media/1ffaee_ed17b5bf4b7a421e91b4068bf4da5e24~mv2.jpg/v1/crop/x_0,y_45,w_1024,h_935,q_85,enc_avif,quality_auto/1ffaee_ed17b5bf4b7a421e91b4068bf4da5e24~mv2.jpg"
          alt="Chief Instructor Feature"
          className="chief-instructor-feature-image"
        />
      </div>
    </>
  );
}
function Schedule() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayAbbr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const hours = [
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
  ];
  const todayIdx = new Date().getDay();
  const isMobile = window.innerWidth <= 700;

  // Google Calendar API
  const API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
  const CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID;
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    return d;
  });
  const monthName = weekDates[0].toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      setError(null);
      try {
        const timeMin = new Date();
        timeMin.setHours(0, 0, 0, 0);
        const timeMax = new Date(timeMin);
        timeMax.setDate(timeMax.getDate() + 7);
        const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
          CALENDAR_ID
        )}/events?key=${API_KEY}&timeMin=${timeMin.toISOString()}&timeMax=${timeMax.toISOString()}&singleEvents=true&orderBy=startTime`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        setEvents(data.items || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, [API_KEY, CALENDAR_ID]);

  // Helper: get events for a given day and hour
  function getEventsForCell(dayIdx, hourIdx) {
    return events.filter((event) => {
      if (!event.start || !event.start.dateTime) return false;
      const start = new Date(event.start.dateTime);
      return (
        start.getDay() === dayIdx &&
        start.getHours() === (hourIdx < 7 ? hourIdx + 6 : hourIdx - 5 + 12)
      );
    });
  }

  return (
    <div className="schedule-calendar">
      <div
        className="schedule-month"
        style={{
          textAlign: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: "1.3em",
          padding: "1rem 0 0.5rem 0",
        }}
      >
        {monthName}
      </div>
      <div className="schedule-header-row">
        <div className="schedule-time-header"></div>
        {weekDates.map((date, idx) => (
          <div
            className={`schedule-date-header${
              idx === todayIdx ? " schedule-today" : ""
            }`}
            key={date.toISOString()}
          >
            {date.getDate()}
          </div>
        ))}
      </div>
      <div className="schedule-header-row">
        <div className="schedule-time-header"></div>
        {(isMobile ? dayAbbr : days).map((day, idx) => (
          <div
            className={`schedule-day-header${
              idx === todayIdx ? " schedule-today" : ""
            }`}
            key={day}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="schedule-body">
        {loading && (
          <div style={{ color: "#fff", padding: "1rem" }}>
            Loading events...
          </div>
        )}
        {error && <div style={{ color: "red", padding: "1rem" }}>{error}</div>}
        {!loading &&
          !error &&
          hours.map((hour, hourIdx) => (
            <div className="schedule-row" key={hour}>
              <div className="schedule-time-label">{hour}</div>
              {days.map((day, dayIdx) => (
                <div
                  className={`schedule-cell${
                    dayIdx === todayIdx ? " schedule-today-cell" : ""
                  }`}
                  key={day + hour}
                >
                  {getEventsForCell(dayIdx, hourIdx).map((ev) => (
                    <div key={ev.id} className="schedule-event">
                      {ev.summary}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
function Benefits() {
  return (
    <div className="benefits-info">
      <h2>Benefits of Muay Thai</h2>
      <p>
        Muay Thai offers numerous benefits for both physical and mental health.
        It enhances cardiovascular fitness, builds strength, and improves
        flexibility through its dynamic movements. Additionally, practicing Muay
        Thai can boost self-confidence and discipline, while also providing an
        effective outlet for stress relief. Whether you're looking to get fit or
        learn self-defense, Muay Thai is a powerful and rewarding martial art.
      </p>
      <div className="benefits-feature-image-wrapper">
        <img
          src="https://static.wixstatic.com/media/1ffaee_6007497d1f554592ad50706ff2f7f19a~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Black%20and%20Yellow%20Modern%20Benefits%20Of%20Muay%20Thai%20Instagram%20Post.png"
          alt="Benefits of Muay Thai"
          className="benefits-feature-image"
        />
      </div>
    </div>
  );
}
function Pricing() {
  return (
    <>
      <div className="pricing-info">
        <h2>Pricing</h2>
        <p>
          We are located inside of Total Performance Fitness. A $39.99 monthly
          fitness membership is required to train in our 30,000 sq ft space. You
          get full access to a state-of-the-art training facility. Along with
          high level Muay Thai instruction.
        </p>
        <ul>
          <li>
            <strong>White Tiger Muay Thai:</strong> $129.99 Monthly
          </li>
          <li>
            <strong>Kids Classes:</strong> $99.99 Monthly
          </li>
          <li>
            <strong>Drop in class:</strong> $15.00
          </li>
        </ul>
        <ul>
          <li>
            <strong>Single private training session:</strong> $55.00
          </li>
          <li>
            <strong>10 private training sessions:</strong> $450.00
          </li>
        </ul>
      </div>
      <div className="pricing-feature-image-wrapper">
        <img
          src="https://static.wixstatic.com/media/1ffaee_435961867e404ae4871dce5368df22f7~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1ffaee_435961867e404ae4871dce5368df22f7~mv2.jpg"
          alt="White Tiger Graphic Tee"
          className="pricing-feature-image"
        />
        <div className="pricing-item-name">White Tiger Graphic Tee</div>
        <div className="pricing-item-price">$25.00</div>
      </div>
    </>
  );
}
function PrivateSessions() {
  return (
    <div className="private-sessions-info">
      <h2>Private Sessions</h2>
      <p>Give me 12 hours notice if you need to cancel.</p>
      <p>
        ​Call or Text us at{" "}
        <a href="tel:8325746184" className="private-sessions-phone">
          832.574.6184
        </a>{" "}
        to book a session. Thanks!
      </p>
    </div>
  );
}

export default App;
