import React from 'react';
import {
  OurProductsCarouselSettings,
  ourPartnersInfo,
} from '../../consts/TestimonialsConsts';
import Carousel from '../carousel/Index';
import WorldMap from '../../assets/world_map1.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
const testimonialsCarouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 2,
};

function Testimonials() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:pt-0 xl:pl-56 sm:pt-64  pt-20 space-y-6  ">
        <div className="w-auto sm:w-1/2 md:w-full lg:w-32 xl:w-2/4 pt-10">
          <img alt="world Map" src={WorldMap} />
        </div>
        <div className="w-auto text-center sm:w-1/2 md:w-full lg:w-32 xl:w-2/4 pt-10 ">
          <Slider {...testimonialsCarouselSettings}>
            <div>
              <h3 className="text-gray-600 pt-2">
                {t('home.testimonials.first.text')}
              </h3>
              <p className="text-gray-600 pt-2">
                <strong>{t('home.testimonials.first.whoSay')}</strong>
                <br></br> {t('home.testimonials.first.position')}
              </p>
            </div>
            <div>
              <h3 className="text-gray-600 pt-2">
                {t('home.testimonials.second.text')}
              </h3>
              <p className="text-gray-600 pt-2">
                <strong>{t('home.testimonials.second.whoSay')}</strong>
                <br></br> {t('home.testimonials.second.position')}
              </p>
            </div>
            <div>
              <h3 className="text-gray-600 pt-2">
                {t('home.testimonials.second.text')}
              </h3>
              <p className="text-gray-600 pt-2">
                <strong>{t('home.testimonials.second.whoSay')}</strong>
                <br></br> {t('home.testimonials.second.position')}
              </p>
            </div>
          </Slider>
        </div>
      </div>
      <div className="grid grid-cols-1 ">
        <div className="pt-16 pl-18 pb-20 sm:pl-10 lg:pl-34">
          <h2 className="capitalize text-center text-blue-700 font-bold text-3xl">
            our partners
          </h2>
        </div>
        <div className="pl-4 pb-6">
          <Carousel
            settings={OurProductsCarouselSettings}
            carouselData={ourPartnersInfo}
          ></Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
