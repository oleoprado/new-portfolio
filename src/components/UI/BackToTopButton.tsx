import React from 'react'

const BackToTopButton: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={handleClick}
      className="fixed text-primaryColor top-[95%] left-[95%] text-[2rem]"
    >
      <i className="ri-arrow-up-line"></i>
    </button>
  )
}

export default BackToTopButton
