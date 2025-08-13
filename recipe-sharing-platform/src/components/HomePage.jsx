import { useState, useEffect } from "react";
import jsonData from "../data.json";

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div className="p-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-20">
        {data &&
          data.map((item) => (
            <li
              key={item.id}
              className="p-8 md:p-3 bg-orange-100 rounded-2xl font-sans text-left hover:shadow-xl"
            >
              <img src={item.image} alt="" />
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.summary}</p>
            </li>
          ))}
      </ul>
      ;
    </div>
  );
}

export default HomePage;
