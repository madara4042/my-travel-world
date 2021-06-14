import { useState } from 'react'
import PortfolioItem from "../PortfolioItem/PortfolioItem"

const Promotion = () => {
  const [portfolioFilter, setPortfolioFilter] = useState('all')

  const countries = [
    { src: '/my-travel-world/assets/img/china.jpg', name: 'china' },
    { src: '/my-travel-world/assets/img/usa.jpg', name: 'usa' },
    { src: '/my-travel-world/assets/img/japan.jpg', name: 'japan' },
    { src: '/my-travel-world/assets/img/gdansk.jpg', name: 'gdansk' },
    { src: '/my-travel-world/assets/img/germany.jpg', name: 'germany' },
    { src: '/my-travel-world/assets/img/hawai.jpg', name: 'hawai' },
    { src: '/my-travel-world/assets/img/italia.jpg', name: 'italia' },
    { src: '/my-travel-world/assets/img/newzealand.jpg', name: 'new zealand' },
    { src: '/my-travel-world/assets/img/texas.jpg', name: 'texas' },
  ]

  const countriesElements = countries
    .filter((el) => el.name === portfolioFilter || portfolioFilter === 'all')
    .map((el) => (
     <PortfolioItem src={el.src}/>
    ))

  let galleryNav = countries.map((el) => el.name)
  galleryNav = [...new Set(galleryNav)].map((el) => (
    <button
      className="hover:text-gray-600 focus:text-gray-50
         focus:bg-gray-900 rounded-md p-2 outline-none"
      type="button"
      data-country={el}
      key={el}
    >
      {el.toUpperCase()}
    </button>
  ))

  const imgHandler = (e) => {
    const categoryNav = e.target.getAttribute('data-country') ?? 'all'
    setPortfolioFilter(categoryNav)
  }

  return (
    <div className="py-1 w-full">
      {/* gallery-navigation-box */}
      <div
        onClick={imgHandler}
        className="font-bold text-xs w-1/4 mx-auto flex flex-wrap  justify-between items-center tracking-wider "
      >
        <button
          className="hover:text-gray-600 focus:text-gray-50 focus:bg-gray-900 rounded-md p-2 outline-none"
          type="button"
        >
          ALL
        </button>
        {galleryNav}
      </div>

      {/* gallery-countries-box */}
      <div className="flex  flex-wrap mt-4 justify-center p-3  bg-black">
        {countriesElements}
      </div>
    </div>
  )
}
export default Promotion
