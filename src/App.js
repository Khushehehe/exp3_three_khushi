import React from "react";
import { Student, Teacher } from "./Person";

function App() {
  const people = [
    new Student("Khushi", 20, "A"),
    new Teacher("Mr. Sharma", 40, "Mathematics"),
    new Student("Riya", 22, "B"),
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Person Class Hierarchy</h1>

      {people.map((person, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "8px",
          }}
        >
          {person.getDetails()}
        </div>
      ))}
    </div>
  );
}

export default App;
