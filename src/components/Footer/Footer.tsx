export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 pt-12">
      {/* ===== footer top start ===== */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products?
            </h2>
            <a href="mailto:leonardo.rprado@gmail.com">
              <button className="bg-primaryColor text-white font-[500] py-2 px-4 rounded-[8px] hover:font[500] hover:bg-smallTextColor hover:text-white ease-in duration-700 flex items-center gap-2">
                <i className="ri-mail-line"></i>Hire Me
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sit
              quos minus magni laborum enim animi minima, repudiandae adipisci
              illo.
            </p>

            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow me:
              </span>

              <span className="w-[35px] h-[35px] bg-gray-900 p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://github.com/oleoprado"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-gray-900 p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.linkedin.com/in/leonardo-prado-dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
            </div>
          </div>
        </div>

        <nav>
          <ul className="flex items-center justify-center gap-10 mt-10">
            <li>
              <a className="text-gray-400 font-[600]" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* ===== footer top end ===== */}
      <div className="bg-gray-900 py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-primaryColor text-white font-[500] text-[18px] flex items-center justify-center">
                  Lp
                </span>

                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">
                    Léo Prado
                  </h2>
                  <p className="text-gray-400 text-[14px] font-[500]">
                    Personal
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-[14px]">
                Copyright {year} developed by {''}
                <a
                  href="https://github.com/oleoprado"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primaryColor font-[500]"
                >
                  Léo Prado
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
