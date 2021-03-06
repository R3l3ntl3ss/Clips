import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import Quote from "./quote";
import Empty from "./empty";
import Options from "./options";

import styles from "./styles.module.scss";

function Clips({ quotes, activeBook }) {
  const [activeQuotes, setActiveQuotes] = useState([]);

  const [location, setLocation] = useState(false);
  const [date, setDate] = useState(false);

  useEffect(() => {
    let activeQuotes = quotes.filter((quote) => quote.raw === activeBook);
    setActiveQuotes(activeQuotes);
  }, [activeBook, quotes]);

  return (
    <div className={styles.container}>
      {activeQuotes.length === 0 ? (
        <Empty />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <h1>
              {activeQuotes[0].book} -- {activeQuotes.length} Clips
            </h1>
            <Options
              location={location}
              date={date}
              setLocation={setLocation}
              setDate={setDate}
            />
          </div>
          <div className={styles.content}>
            <div>
              {activeQuotes.map((quote) => (
                <Quote
                  key={uuid()}
                  quote={quote}
                  location={location}
                  date={date}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Clips;
