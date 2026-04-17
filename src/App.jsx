import { useState } from "react";

const data = [
  {
    id: 1,
    name: "Rahul",
    age: 25,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Priya",
    age: 22,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>

        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
        })}

        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;