<template>
  <div
    id="resume-preview"
    style="
      width: 21cm;
      min-height: 29.7cm;
      margin: auto;
      padding: 2cm;
      background: white;
      font-family: Arial, sans-serif;
      font-size: 12pt;
      color: #333;
    "
  >
    <!-- Header -->
    <header
      style="
        text-align: center;
        border-bottom: 2px solid #ccc;
        padding-bottom: 1em;
        margin-bottom: 1.5em;
      "
    >
      <h1 style="font-size: 24pt; margin: 0;">John Doe</h1>
      <p style="font-size: 14pt; color: #555; margin: 0.2em 0;">
        Full Stack Developer
      </p>
      <p style="font-size: 11pt; color: #777;">
        johndoe@example.com · +1-234-567-890 · github.com/johndoe
      </p>
    </header>

    <!-- Summary -->
    <section style="margin-bottom: 1.5em;">
      <h2
        style="
          font-size: 14pt;
          margin-bottom: 0.5em;
          color: #000;
          border-bottom: 1px solid #ccc;
          padding-bottom: 0.3em;
        "
      >
        Summary
      </h2>
      <p>
        Passionate full stack developer with 5+ years of experience in building scalable web applications and cloud services. Adept in both frontend and backend development.
      </p>
    </section>

    <!-- Experience -->
    <section style="margin-bottom: 1.5em;">
      <h2
        style="
          font-size: 14pt;
          margin-bottom: 0.5em;
          color: #000;
          border-bottom: 1px solid #ccc;
          padding-bottom: 0.3em;
        "
      >
        Experience
      </h2>
      <div>
        <h3 style="margin: 0.2em 0; font-size: 13pt;">
          Senior Developer · TechCorp
        </h3>
        <p style="font-size: 11pt; color: #666; margin-bottom: 0.3em;">
          Jan 2022 – Present | San Francisco, CA
        </p>
        <ul style="margin: 0.5em 0 0 1.2em; padding: 0;">
          <li style="margin-bottom: 0.3em;">
            Led migration from monolith to microservices.
          </li>
          <li style="margin-bottom: 0.3em;">
            Improved API performance by 40% through caching.
          </li>
        </ul>
      </div>
    </section>

    <!-- Education -->
    <section style="margin-bottom: 1.5em;">
      <h2
        style="
          font-size: 14pt;
          margin-bottom: 0.5em;
          color: #000;
          border-bottom: 1px solid #ccc;
          padding-bottom: 0.3em;
        "
      >
        Education
      </h2>
      <p>B.Tech in Computer Science · MIT · 2017 – 2021</p>
    </section>

    <!-- Skills -->
    <section style="margin-bottom: 1.5em;">
      <h2
        style="
          font-size: 14pt;
          margin-bottom: 0.5em;
          color: #000;
          border-bottom: 1px solid #ccc;
          padding-bottom: 0.3em;
        "
      >
        Skills
      </h2>
      <p>JavaScript, Node.js, Vue, React, PostgreSQL, Docker, AWS</p>
    </section>
  </div>
</template>
