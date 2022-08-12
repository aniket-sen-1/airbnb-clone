import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";

function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </main>
  );
}

export default App;

// how to pass propterty to the components
// (1)-------------------
// image={card.coverImg}
// rating={card.stats.rating}
// review={card.stats.reviewCount}
// location={card.location}
// title={card.title}
// price={card.price}
// openSpots={card.openSpots}

// (2)-------------------
//card={card}
