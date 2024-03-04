import { useState } from "react";
import Carousel from "./components/Carousel";
import { list, shortList, longList } from "./data";
import SlickCarousel from "./components/SlickCarousel";

const App = () => {
  const [people, setPeople] = useState(longList);

  return (
    <main>
      {/* <Carousel people={people} /> */}
      {/* <hr /> */}

      <SlickCarousel people={people} />
    </main>
  );
};
export default App;
