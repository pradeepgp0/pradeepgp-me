import RT from "../../public/assets/images/rt.svg";
import NG from "../../public/assets/images/ng.svg";
import JS from "../../public/assets/images/js.svg";
import TS from "../../public/assets/images/ts.svg";
import MYSQL from "../../public/assets/images/mysql.svg";
import HTML from "../../public/assets/images/html.svg";
import CSS from "../../public/assets/images/css.svg";
import CS from "../../public/assets/images/cs.svg";


export const ExperienceList = [
  {
    title: "EXCELSOFT TECHNOLOGIES PVT LTD",
    header: "Senior Software Engineer",
    subHeader: "SEP 2020 - Current",
    tail: "ReactJS Developer",
    fromDate: "09/03/2020",
    toDate: `${
      new Date().getMonth() + 1
    }/${new Date().getDate()}/${new Date().getFullYear()}`,
    count: 3,
  },
  {
    title: "INFOSYS",
    header: "Technology Analyst",
    subHeader: "MAY 2018 - AUG 2020",
    tail: "Angular 5+ and C# Developer",
    fromDate: "05/07/2018",
    toDate: "08/31/2020",
    count: 2,
  },
  {
    title: "SOFTWARE PARADIGMS PRIVATE LIMITED",
    header: "Associate Software Engineer",
    subHeader: "JAN 2015 - APR 2018",
    tail: "C# Developer",
    fromDate: "01/28/2015",
    toDate: "04/28/2018",
    count: 1,
  },
];

export const ProjectList = [
  {
    title: "ADMIN AND LMS APPS",
    header: "REACTJS",
    subHeader:
      "An Admin application for maintaining customers and generate reports",
    link: "https://wneapp.dev.edgenuityapp.com",
  },
  {
    title: "Project Center of Excellence",
    header: "ANGULAR 5+",
    subHeader:
      "PCOE is a tool which enables users to create a project having different phases with different attributes",
  },
  {
    title: "Claim Audit Management System",
    header: "C#",
    subHeader: "Claims Management is a very important activity for any retail company as it has a direct effect on the revenue of the company. ",

  },

];



export const LangList = [
  {
    title: "react",
    image: RT,
  },
  {
    title: "ng",
    image: NG,
  },
  {
    title: "js",
    image: JS,
  },
  {
    title: "ts",
    image: TS,
  },
  {
    title: "cs",
    image: CS,
  },
  {
    title: "html",
    image: HTML,
  },
  {
    title: "css",
    image: CSS,
  },
  {
    title: "mysql",
    image: MYSQL,
  },
];
