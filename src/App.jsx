import Navbar from "./component/Navbar";
import NewsBoard from "./component/NewsBoard";
import { useState } from "react";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
