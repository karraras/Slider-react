import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./person";
function App() {
  const [value, setValue] = React.useState(0);

  const checkNumber = (number) => {
    if (number > 3) {
      return 0;
    }
    if (number < 0) {
      return 3;
    }
    return number;
  };
  React.useEffect(() => {
    let newId = setInterval(() => {
      setValue((prev) => checkNumber(prev - 1));
    }, 2000);
    return () => {
      clearInterval(newId);
    };
  }, []);
  const handlePrev = () => {
    setValue((prev) => {
      let newIndex = prev - 1;
      return checkNumber(newIndex);
    });
  };
  const handleNext = () => {
    setValue((prev) => {
      let newIndex = prev + 1;
      return checkNumber(newIndex);
    });
  };
  console.log(value);

  return (
    <section className="section">
      {data.map((person, index) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            key={id}
            style={{
              transform: `translateX(-${index}00%)`,
              left: `${value}00%`,
            }}
            className="act"
          >
            <img className="person-img" alt="" src={image} />
            <h5>{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight />
          </article>
        );
      })}
      <button className="prev" onClick={handlePrev}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={handleNext}>
        <FiChevronRight />
      </button>
    </section>
  );
}

export default App;
