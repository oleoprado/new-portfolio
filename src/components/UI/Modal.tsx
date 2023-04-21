import projects from '../../assets/data/mockPortfolioData'

export default function Modal({ activeID, setShowModal }: any) {
  const project = projects.find((project) => project.id === activeID)

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className="w-11/12 max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img className="rounded-[8px]" src={project?.imgUrl} alt="" />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-5">
            {project?.title}
          </h2>
          <p className="text-[15px] leading-7 text-smallTextColor">
            {project?.description}
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[18px] font-[700]">
              Technologies:
            </h4>
            {project?.technologies.map((item) => (
              <span
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px]"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            <a href={project?.siteUrl}>
              <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
                Live Demo
              </button>
            </a>
            <a href="#">
              <button className="text-white py-2 px-4 my-8 rounded-[8px] font-[500] bg-headingColor hover:bg-primaryColor ease-in duration-300">
                View Code
              </button>
            </a>
          </div>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px]"
        >
          &times;
        </button>
      </div>
    </div>
  )
}
