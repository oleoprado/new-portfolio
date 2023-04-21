import { useRef, useEffect } from 'react'

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  function stickyHeader() {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current!.classList.add('sticky__header')
      } else {
        headerRef.current!.classList.remove('sticky__header')
      }
    })
  }

  // function handleClick(e: MouseEvent) {
  //   e.preventDefault()

  //   const targetAttr = (e.target as HTMLAnchorElement).getAttribute('href')
  //   const location = document.querySelector(targetAttr)?.offsetTop

  //   if (location) {
  //     window.scrollTo({
  //       top: location - 80,
  //       left: 0,
  //     })
  //   }
  // }

  function toggleMenu() {
    menuRef.current!.classList.toggle('show__menu')
  }

  useEffect(() => {
    stickyHeader()

    return window.removeEventListener('scroll', stickyHeader)
  }, [])

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              Lp
            </span>

            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                Léo Prado
              </h2>
              <p className="text-smallTextColor text-[0.875rem] font-[500]">
                personal
              </p>
            </div>
          </div>

          <nav className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  className="text-smallTextColor font-[600]"
                  href="#about"
                  // onClick={handleClick}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor font-[600]"
                  href="#services"
                  // onClick={handleClick}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor font-[600]"
                  href="#portfolio"
                  // onClick={handleClick}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor font-[600]"
                  href="#contact"
                  // onClick={handleClick}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="mailto:leonardo.rprado@gmail.com"
              className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 max-h-[40px] rounded-[8px] hover:bg-smallTextColor hover:text-white ease-in duration-300"
            >
              <i className="ri-send-plane-line"></i> Let&#39;s Talk
            </a>

            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
