const AboutCurrencyConverter = () => {
  return (
    <section className="mt-20 w-full bg-[#FAFAFB] py-5">
      <div id="info" className="mx-auto w-full max-w-3xl p-6">
        <h2 className="mb-4 border-l-2 border-[#00D37E] px-2 text-2xl font-bold text-[#00214A]">
          What is the Currency Converter?
        </h2>
        <p className="mb-6 text-gray-700">
          This Currency Converter application is a project created for learning
          purposes. It allows you to check the latest foreign exchange rates and
          convert various world currencies. The rates used here are for
          educational use only and may not reflect the real-time market data.
        </p>

        <h2 className="mb-4 border-l-2 border-[#00D37E] px-2 text-2xl font-bold text-[#00214A]">
          How to use this Currency Converter?
        </h2>
        <p className="mb-6 text-gray-700">
          To use this free currency converter, simply type the currency names,
          3-letter ISO currency symbols, or country names into the relevant
          fields to select your currency. This application lets you convert
          between world currencies in a simple and easy way. Please note that
          the rates provided by this app are simulated and not suitable for
          professional use.
        </p>

        <h2 className="mb-4 border-l-2 border-[#00D37E] px-2 text-2xl font-bold text-[#00214A]">
          Why use this Currency Converter?
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Learning Experience
            </h3>
            <p className="text-gray-700">
              This project is built as a hands-on way to learn React and
              practice using APIs. It’s a great way to understand how currency
              conversion works and how to integrate real-time data into an
              application.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Credible and Accurate (For Learning)
            </h3>
            <p className="text-gray-700">
              While the rates in this app are not accurate for professional use,
              they are designed to provide a realistic learning scenario for
              handling data in a React application.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Trusted (For Educational Use)
            </h3>
            <p className="text-gray-700">
              This app is designed for educational purposes only. It can be
              trusted as a learning tool to explore the concepts of fetching
              data, managing state, and updating the UI in a React application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCurrencyConverter;
