import { useState } from "react";
import Carousel from "./components/Carousel";
import { shortList } from "./data";

const App = () => {
  const [people, setPeople] = useState(shortList);

  return (
    <main>
      <Carousel people={people} />
    </main>
  );
};
export default App;
