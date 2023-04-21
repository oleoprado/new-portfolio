import { useState, useEffect } from 'react'
import data from '../../assets/data/mockPortfolioData'
import Modal from './Modal'

interface IProject {
  id: string
  imgUrl: string
  title: string
  description: string
  technologies: string[]
  siteUrl: string
}

export default function Portfolio() {
  const [nextItems, setNextItems] = useState(6)
  const [projects, setProjects] = useState(data)
  const [filterProjects, setFilterProjects] = useState('all')
  const [showModal, setShowModal] = useState(false)
  const [activeID, setActiveID] = useState<string | null>(null)

  function handleLoadMore() {
    setNextItems((prev) => prev + 3)
  }

  function handleShowModal(id: string) {
    setShowModal(true)
    setActiveID(() => id)
  }

  useEffect(() => {
    if (filterProjects === 'all') {
      setProjects(data)
    }
    if (filterProjects === 'Frontend') {
      setProjects(data.filter((project) => project.category === 'Frontend'))
    }
    if (filterProjects === 'Backend') {
      setProjects(data.filter((project) => project.category === 'Backend'))
    }
  }, [filterProjects])

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My recent projects
            </h3>
          </div>

          <div className="flex gap-3">
            <button
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
              onClick={() => setFilterProjects('all')}
            >
              All
            </button>
            <button
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
              onClick={() => setFilterProjects('Frontend')}
            >
              Frontend
            </button>
            <button
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
              onClick={() => setFilterProjects('Backend')}
            >
              Backend
            </button>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-4 mt-12">
          {projects?.slice(0, nextItems)?.map((project: IProject) => (
            <div
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%]relative z-[1]"
              key={project.id}
            >
              <figure>
                <img className="rounded-[8px]" src={project.imgUrl} alt="" />
              </figure>

              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => handleShowModal(project.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems < projects.length && data.length > 6 && (
            <button
              onClick={handleLoadMore}
              className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  )
}
