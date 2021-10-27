import React, { Component } from "react";

function Listingmaps() {
    
  const Practitioners = [
    "Dr. Almasaro",
    "Dr. Herbeau",
    "Dr. Andrew Manson",
    "Dr. Jim Parsons",
    "Dr. Edwin Spindrift",
    "Dr. Jeremy Stone",
    "Dr. Martin Arrowsmith",
    "Dr. Rashids",
  ];

  return (
    <div>
      <ul>
        {Practitioners.map((data) => {
          return <li>{data}</li>;
        })}
      </ul>
    </div>
  );
}

export default Listingmaps;
