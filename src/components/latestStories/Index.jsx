import React from 'react';
import JobImg from '../../assets/dream-job.jpg';
import LearnImg from '../../assets/learn.jpg';
import Image from '../../assets/Image.png';
import { useTranslation } from 'react-i18next';

function LatestStories() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-wrap items-center justify-evenly bg-blue-800 md:py-16 py-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <header className="px-16 my-4 text-center text-white w-full">
          <h2 className="font-bold text-white text-3xl text-center">
            {t('home.stories-section.title')}
          </h2>
          <p className="pb-10 xl:w-2/3 xl:mt-2 mx-auto text-center">
            {t('home.stories-section.subtitle')}
          </p>
        </header>

        <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg">
          <a href="/">
            <img className="w-full object-cover" src={LearnImg} alt="" />
          </a>
          <div className="px-6 py-4">
            <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
              {t('home.stories-section.cat-label.language')}
            </span>
            <div className="font-bold text-gray-800  text-xl mb-2">
              How I Learned Turkish Quickly, And What Are The Best Places To Learn
              From.
            </div>

            <p className="text-gray-600 text-base">
              When learning a language, you need motivation and methods. If you don’t
              have a goal, there’s no point learning. If you don’t have a method, you
              won’t advance...
            </p>
          </div>

          <div className="px-6 pt-1 pb-6">
            <ul className="flex center-items">
              <li>
                <img
                  className="w-10 h-10 rounded-full mr-4 object-cover"
                  src={Image}
                  alt=""
                />
              </li>
              <div className="text-sm xl:mt-1">
                <li>
                  <p className="text-gray-500 leading-none font-semibold pt-2">
                    {' '}
                    Ahmad Al-Faysal{' '}
                  </p>
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg">
          <a href="/">
            <img className="w-full object-cover" src={JobImg} alt="" />
          </a>
          <div className="px-6 py-4">
            <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
              {t('home.stories-section.cat-label.jobs')}
            </span>
            <div className="font-bold text-gray-800 text-xl mb-2">
              How To Find a Job in Lebanon as a Refugee, here are my experiences and
              advices.
            </div>
            <p className="text-gray-600 text-base">
              Lebanon is a country located in the East Mediterranean. The official
              language is Arabic. I love Lebanese cuisine. Below is a selection of
              resources for searching for employment...
            </p>
          </div>
          <div className="px-6 pt-1 pb-6">
            <ul className="flex center-items">
              <li>
                <img
                  className="w-10 h-10 rounded-full mr-4 object-cover"
                  src={Image}
                  alt=""
                />
              </li>
              <div className="text-sm xl:mt-1">
                <li>
                  <p className="text-gray-500 leading-none font-semibold pt-2 text">
                    {' '}
                    Rami Al-Barudi{' '}
                  </p>
                </li>
                <br></br>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default LatestStories;
