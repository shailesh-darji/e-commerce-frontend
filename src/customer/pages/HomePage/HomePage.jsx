import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurtas } from '../../../Data/mens_kurtas'

const HomePage = () => {
  return (
    <div>
        <MainCarousel />
        <div className='space-y-10 flex flex-col justify-center lg:px-10'>
            <HomeSectionCarousel data={mens_kurtas} sectionName="Men's Kurta"/>
            <HomeSectionCarousel data={mens_kurtas} sectionName="Men's Jeans"/>
            <HomeSectionCarousel data={mens_kurtas} sectionName="Men's Shirt"/>
            <HomeSectionCarousel data={mens_kurtas} sectionName="Women's Saree"/>
            <HomeSectionCarousel data={mens_kurtas} sectionName="Women's Dress"/>
        </div>
    </div>
  )
}

export default HomePage