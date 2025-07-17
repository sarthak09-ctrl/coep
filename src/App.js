import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! Message received.`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo-container">
          <img src="/LOgo-coep.png" alt="COEP Logo" className="logo-img" />
          <div className="logo-text">COEP Technological University</div>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#objectives">Course Objective</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#eligibility">Eligibility</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-overlay">
          <h1>COEP Technological University</h1>
          <h2>Department of Computer Science & Engineering</h2>
          <p>
            Post Graduate Diploma in Data Science & Artificial Intelligence
            (PGDDSAI)
          </p>
        </div>
      </section>

      <section className="section about" id="about">
        <h2>About COEP Tech</h2>
        <p>
          College of Engineering, Pune (CoEP), chartered in 1854 is a nationally
          respected leader in technical education. The institute is
          distinguished by its commitment to finding solutions to the great
          predicaments of the day through advanced technology.
        </p>
        <p>
          The institute has a rich history and dedication to the pursuit of
          excellence. COEP Tech offers a unique learning experience across a
          spectrum of academic and social experiences.
        </p>
        <p>
          With a firm footing in truth and humanity, the institute gives you an
          understanding of both technical developments and the ethics that go
          with it. The curriculum is designed to enhance your academic
          experience through opportunities like internships, study abroad
          programmes and research facilities.
        </p>
        <p>
          The hallmark of COEP Tech education is its strong and widespread
          alumni network, support of the industry and the camaraderie that the
          institute shares with several foreign universities.
        </p>
        <p>
          The institute is consistently ranked amongst the top 20 technical
          colleges in India and its alumni have contributed a lion’s share in
          development of national infrastructure.
        </p>
      </section>

      <section className="section objectives" id="objectives">
        <h2>Course Objectives</h2>
        <ul>
          <li>
            <strong>Foundation in Data Science and AI Concepts:</strong>{" "}
            Understanding fundamental principles, theories, and practices.
          </li>
          <li>
            <strong>Data Analysis and Interpretation:</strong> Training in
            collecting, processing, and analyzing large datasets.
          </li>
          <li>
            <strong>Hands-On Technical Skills:</strong> Proficiency in Python,
            R, SQL for AI projects.
          </li>
          <li>
            <strong>ML and AI Applications:</strong> Applying ML algorithms in
            NLP, vision, robotics, analytics.
          </li>
          <li>
            <strong>Problem-Solving Skills:</strong> Enhancing real-world
            problem-solving using data-driven approaches.
          </li>
          <li>
            <strong>Project and Research Experience:</strong> Real-world
            projects, research and case studies.
          </li>
        </ul>
      </section>

      <section className="section curriculum" id="curriculum">
        <h2> Key Highlights</h2>
        <ul>
          <li> Industry-Relevant Curriculum</li>
          <li> Hands-on AI & ML Projects</li>
          <li> Tools: Python, TensorFlow, SQL, Power BI</li>
          <li> Real-world Case Studies & Capstone Project</li>
          <li> Expert Faculty & Industry Mentors</li>
          <li> Placement Support & Internships</li>
          <li> For Graduates from Any Discipline</li>
          <li> 1-Year, Online Flexible Learning Format</li>
        </ul>
      </section>

      <section className="section eligibility" id="eligibility">
        <h2>Eligibility Criteria</h2>
        <p>
          Final-year students BE Any Stream, BCS, BCA, MCA, MCS, M.Tech. (Any
          Stream) are eligible to apply for the program.
        </p>
        <p>
          Candidates with B.E. (Any Stream), BCS, BCA, MCA, MCS, M.Tech. (Any
          Stream), or those with a background in Mathematics and Statistics can
          apply.
        </p>
        <p>
          The opportunity is open to both fresher and experienced professionals.
          Those appearing for their final year degree examination may also
          apply.
        </p>

        <h3>Selection Procedure</h3>
        <ul>
          <li>Two rounds of technical interview</li>
        </ul>

        <h3>Fees</h3>
        <p>Rs. 2,31,000/-</p>

        <h3>Course Intake</h3>
        <p>60 Students</p>
      </section>

      <section className="section course-structure" id="structure">
        <h2> Course Structure (Trimester-wise Slides)</h2>
        <div className="slide-container">
          {/* Trimester 1 */}
          <div className="slide">
            <h3> Trimester 1 (16 Weeks)</h3>
            <table className="structure-table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Subject</th>
                  <th>Theory</th>
                  <th>Lab</th>
                  <th>Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Programming Fundamentals using Python</td>
                  <td>2</td>
                  <td>1</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Mathematics for Data Science</td>
                  <td>3</td>
                  <td>0</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Data Warehousing using MySQL and MongoDB</td>
                  <td>2</td>
                  <td>1</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Machine Learning Fundamentals</td>
                  <td>2</td>
                  <td>1</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Data Visualization using Tableau and Power BI</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
            <p>
              <strong>Total Credits:</strong> 15
            </p>
          </div>

          {/* Trimester 2 */}
          <div className="slide">
            <h3> Trimester 2 (16 Weeks)</h3>
            <table className="structure-table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Subject</th>
                  <th>Theory</th>
                  <th>Lab</th>
                  <th>Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6</td>
                  <td>Introduction to Artificial Intelligence</td>
                  <td>3</td>
                  <td>0</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Big Data Technologies</td>
                  <td>2</td>
                  <td>1</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Deep Learning</td>
                  <td>3</td>
                  <td>0</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Natural Language Processing</td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Programming Fundamentals using R</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
            <p>
              <strong>Total Credits:</strong> 15
            </p>
          </div>

          {/* Trimester 3 */}
          <div className="slide">
            <h3> Trimester 3 (16 Weeks)</h3>
            <table className="structure-table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Subject</th>
                  <th>Theory</th>
                  <th>Lab</th>
                  <th>Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11</td>
                  <td>Ethical AI and Advanced Machine Learning</td>
                  <td>3</td>
                  <td>0</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Computer Vision</td>
                  <td>3</td>
                  <td>0</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Industry Project</td>
                  <td>0</td>
                  <td>9</td>
                  <td>9</td>
                </tr>
              </tbody>
            </table>
            <p>
              <strong>Total Credits:</strong> 15
            </p>
          </div>
        </div>

        <h4>
          {" "}
          PGDDSAI Total Course Credits: <strong>45</strong>
        </h4>
      </section>

      <section className="section contact" id="contact">
        <h2>Contact Us</h2>

        <form
          action="https://formspree.io/f/mgvzvwdl"
          method="post"
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="number"
            name="phone"
            required
            placeholder="Your mobile"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <p>
              <strong>📞 Phone:</strong> 8308740815 / 02025507318
            </p>
            <p>
              <strong>✉️ Email:</strong>{" "}
              <a href="mailto:pgdsai.comp@coeptech.ac.in">
                pgdsai.comp@coeptech.ac.in
              </a>
            </p>
            <p>
              <strong>🌐 Website:</strong>{" "}
              <a
                href="https://www.coep.org.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                COEP PGD Website (Click here)
              </a>
            </p>
            <p>
              <strong>🏢 Address:</strong>
              <br />
              Department of Computer Science & Engineering,
              <br />
              COEP Technological University,
              <br />
              Pune – 411005
            </p>
            <p>Last Date to Apply Online: 31 July 2025</p>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} COEP Technological University . All
              Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
