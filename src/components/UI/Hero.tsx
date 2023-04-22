import CountUp from 'react-countup'
// import heroImg from '../../assets/images/hero.svg'
import heroImg from '../../assets/images/LeoPradoFundo.png'

export default function Hero() {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex md:flex-row items-center justify-between sm:flex-col">
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[1rem]"
            >
              Hello Welcome
            </h5>

            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[2.5rem] leading-[35px] sm:leading-[46px] mt-5"
            >
              I&#39;m Léo Prado <br />
              Jr Web Full Stack Developer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1800"
              className="flex items-center gap-6 mt-7"
            >
              <a href="mailto:leonardo.rprado@gmail.com" id="contact">
                <button className="bg-primaryColor text-white font-[500] py-2 px-4 rounded-[8px] hover:font[500] hover:bg-smallTextColor hover:text-white ease-in duration-700 flex items-center gap-2">
                  <i className="ri-mail-line"></i>Hire Me
                </button>
              </a>

              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[1rem] border-b border-solid border-smallTextColor"
              >
                See portfolio
              </a>
            </div>

            <p
              className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta
              cumpadi, sou preto inteiris, inteiris.Quem num gosta di mim que
              vai caçá sua turmis!Viva Forevis aptent taciti sociosqu ad litora
              torquent.Cevadis im ampola pa arma uma pindureta.
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor">Follow me:</span>
              <span>
                <a
                  href="https://github.com/oleoprado"
                  className="text-smallTextColor text-[1.5rem] font-[600]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/leonardo-prado-dev/"
                  className="text-smallTextColor text-[1.5rem] font-[600]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </span>
            </div>
          </div>

          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="" />
            </figure>
          </div>

          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[2rem]">
                <CountUp
                  start={0}
                  end={1.5}
                  decimals={1}
                  duration={2}
                  suffix="+"
                />
              </h2>
              <h4 className="text-headingColor font-[700] text-[1.125rem]">
                Year of experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[2rem]">
                <CountUp start={0} end={40} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[700] text-[1.125rem]">
                Projects completed
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
