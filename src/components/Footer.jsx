import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <section className="flex flex-col w-full items-center justify-between bg-[#00214A] text-white p-4">
      <div className="flex w-[70%] justify-start mb-4">
        <img className="w-14 lg:w-20" src={logo} alt="Logo" />
      </div>

      <hr className="w-[90%] lg:w-[80%] mb-4" />

      <div className="flex w-full justify-center lg:justify-center lg:w-[80%] py-4">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8 w-full lg:w-[80%]">
    
          <div className="text-center lg:text-center">
            <h3 className="mb-1 text-sm font-[600] text-[#00D37E] lg:text-lg">USED API</h3>
            <ul>
              <li>
                <a
                  href="https://exchangerate.host/"
                  target="_blank"
                  className="text-xs hover:underline lg:text-base"
                >
                  Exchangerate API
                </a>
              </li>
              <li>
                <a
                  href="https://exchangerate.host/documentation"
                  target="_blank"
                  className="text-xs hover:underline lg:text-base"
                >
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center lg:text-center">
            <h3 className="mb-1 text-sm font-[600] text-[#00D37E] lg:text-lg">
              INSPIRED PAGES
            </h3>
            <ul>
              <li>
                <a
                  href="https://www.xe.com/"
                  target="_blank"
                  className="text-xs hover:underline lg:text-base"
                >
                  Inspiration Page 1
                </a>
              </li>
              <li>
                <a
                  href="https://www.oanda.com/bvi-en/cfds/"
                  target="_blank"
                  className="text-xs hover:underline lg:text-base"
                >
                  Inspiration Page 2
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-center">
            <h3 className="mb-1 text-sm font-[600] text-[#00D37E] lg:text-lg">
              PROJECT INFO
            </h3>
            <ul>
              <li>
                <a
                  href="#info"
                  target="_blank"
                  className="text-xs hover:underline lg:text-base"
                >
                  About the Project
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MaxiRinaldi22"
                  target="_blank"
                  className="text-xs hover:underline lg:text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full text-center lg:w-[80%]">
        <p className="py-1 text-xs font-[400] text-[#00D37E] lg:m-0 lg:text-sm">
          © 2022 Currency Converter. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
