import "./Footer.css";

export function Footer({ record }) {
  return (
    <section className="flex h-56 w-96 items-start justify-between rounded-lg bg-white p-1.5 px-5 shadow-custom">
      <ul className="list-none">
        <h2 className="font-bold">Record</h2>
        {record.map((change, id) => (
          <li key={id} className="mb-1 text-base">
            <div>
              <p className="text-base">
                {change.inputValue} {change.firstCurrency.currency} =
              </p>
              <h4 className="text-lg font-[600]">
                {change.result} {change.secondCurrency.currency}
              </h4>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </section>
  );
}
