import React from "react";
import moment from "moment";

function calcYears(from, to) {

  const startDate = moment(from);
  const endDate = moment(to);
  const monthDiff = endDate.diff(startDate, "months");
  const yearDiff = endDate.diff(startDate, "years");
  const diffMonth =monthDiff%12;
  return `${yearDiff} ${yearDiff > 1 ? "years" : "year"} ${
    monthDiff > 12 ? diffMonth: monthDiff
  } months`;
}


export default function Card({
  title,
  header,
  subHeader,
  tail,
  link,
  fromDate,
  toDate,
  count,
}) {
  return (
    <div className="section-card">
      <div className={`${!fromDate ? "project" : "company"}`}>{title}</div>
      <div className="position">{header}</div>
      {subHeader && <div className="period">{subHeader}</div>}
      {tail && <div className="developer">{tail}</div>}
      {fromDate && toDate && (
        <div className="years">{calcYears(fromDate, toDate)}</div>
      )}
      {count && <div className="count">{count}</div>}
      {link && (
        <div className="links">
          <a rel="noreferrer" target="_blank" href={link}>
            {link}
          </a>
        </div>
      )}
    </div>
  );
}
