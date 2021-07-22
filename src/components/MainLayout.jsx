import React from "react";
import {
  ExperienceList,
  ProjectList,
  LangList,
} from "../constants/List";
import Card from "../components/Card";

export default function App() {
  return (
    <div className="portfolio-background">
      <div className="intro-holder">
        <div className="intro-short">Hey, I'm Pradeep GP.</div>
        <div className="intro-para">
          Senior Software Engineer at{" "}
          <a
            rel="noreferrer"
            href="https://www.excelsoftcorp.com/"
            target="_blank"
          >
            Excelsoft Technologies
          </a>
          . I am full stack developer,I code in Angular 5+, ReactJS and C#, I mostly work on MySQL DB.
     
        </div>
        <div className="social-info-link">
          <div className="social-text-icon">
            <i className="fab fa-github github-icon fa-primary" />
            <a
              className="no-underline"
              rel="noreferrer"
              href="https://github.com/pradeepgp0"
              target="_blank"
            >
              <div className="social-text">
                Github <i className="fa fa-external-link-alt fa-secondary" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="section-outer-holder">
        <div className="section">
          <div className="section-heading">EXPERIENCE</div>
          <div className="section-card-holder">
            {ExperienceList.map(
              ({ title, header, subHeader, tail, fromDate, toDate, count }) => (
                <Card
                  title={title}
                  header={header}
                  subHeader={subHeader}
                  tail={tail}
                  fromDate={fromDate}
                  toDate={toDate}
                  count={count}
                />
              )
            )}
          </div>
        </div>
        <div className="section">
          <div className="section-heading">LANGUAGES/LIBRARIES</div>
          <div className="section-langs">
            {LangList.map(({ title, image }) => (
              <img src={image} className={`lang-icons-width ${title}`} />
            ))}
          </div>
        </div>
        <div className="section">
          <div className="section-heading">PROJECTS</div>
          <div className="section-card-holder">
            {ProjectList.map(({ title, header, subHeader, link }) => (
              <Card
                title={title}
                header={header}
                subHeader={subHeader}
                link={link}
              />
            ))}
          </div>
         
          <div className="section contact">
            <div className="section-heading">CONTACT</div>
            <div className="section-card-holder">
              <i className="fas fa-envelope" />
              <a
                className="no-underline"
                rel="noreferrer"
                href="mailto:pradeepgp8@gmail.com"
              >
                <div className="social-text email">pradeepgp8@gmail.com</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="footer">
          Built with{" "}
          <a
            className="lang-link"
            rel="noreferrer"
            target="_blank"
            href="https://reactjs.org/"
          >
            ReactJS
          </a>
          {" + "}
          <a
            className="lang-link"
            rel="noreferrer"
            target="_blank"
            href="https://astro.build/"
          >
            Astro
          </a>
        </div>
      </div>
    </div>
  );
}
