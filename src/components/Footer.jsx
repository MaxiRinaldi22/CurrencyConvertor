import "./Footer.css";

export function Footer({ record }) {
  return (
    <>
      <section className="container-record">
        <div className="container-covert">
          <ul className="record-convert">
            <h2>Record</h2>
            {record.map((change,id) => (
              <li key={id}>
                <div>
                  <p>
                    {change.inputValue} {change.firstCurrency.currency} =
                  </p>
                  <h4>
                    {change.result} {change.secondCurrency.currency}
                  </h4>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
        <div className="container-date">
          <h2>Date</h2>
          <ul className="record-date">
            {record.map((change, id) => (
              <li key={id}>
                <div>
                  <p>
                    {change.hrs}:{change.min}
                  </p>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
