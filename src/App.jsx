import { useState } from "react";
import Carousel from "./components/Carousel";
import { list, shortList } from "./data";

const App = () => {
  const [people, setPeople] = useState(list);

  return (
    <main>
      <Carousel people={people} />
    </main>
  );
};
export default App;
