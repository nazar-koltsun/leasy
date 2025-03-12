'use client';

import { cn } from '@/lib/utils';
import useMobileCarousel from '@/hooks/useMobileCarousel';
import Link from 'next/link';
import Image from 'next/image';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import classes from './MainCategoriesSections.module.css';

import SectionTitle from '@/components/pages/SectionTitle';
import Button from '@/components/Button';

import CategoryOneImage from '@/assets/category_1_image.png';
import CategoryTwoImage from '@/assets/category_2_image.png';
import CategoryThreeImage from '@/assets/category_3_image.png';
import CategoryFourImage from '@/assets/category_4_image.png';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';

const CATEGORIES_DATA = [
  {
    id: 1,
    title: 'Sprzęt budowlany i przemysłowy',
    quantity: 245,
    image: CategoryOneImage,
    url: '/category-1',
  },
  {
    id: 2,
    title: 'Pojazdy i transport',
    quantity: 453,
    image: CategoryTwoImage,
    url: '/category-2',
  },
  {
    id: 3,
    title: 'Sprzęt imprezowy',
    quantity: 567,
    image: CategoryThreeImage,
    url: '/category-3',
  },
  {
    id: 4,
    title: 'Sprzęt medyczny i rehabilitacyjny',
    quantity: 134,
    image: CategoryFourImage,
    url: '/category-4',
  },
];

const MainCategoriesSection = () => {
  const {glideRef, prevRef, nextRef, activeIndex} = useMobileCarousel();

  return (
    <section className="p-7 flex flex-col max-620:px-4">
      <SectionTitle>Główne kategorie</SectionTitle>
      <p className="mt-2 text-raisinBlack capitalize">
        Przeglądaj naszą szeroką ofertę sprzętu z różnych kategorii
      </p>

      <div ref={glideRef} className={cn('glide', classes.glide)}>
        <div className="glide__track" data-glide-el="track">
          <div
            className={cn(
              'glide__slides grid grid-cols-4 gap-5 max-1024:flex max-620:gap-3',
              classes.glideSlides
            )}
          >
            {CATEGORIES_DATA.map((category) => (
              <div key={category.id} className="w-full">
                <Link
                  href={category.url}
                  className="relative flex flex-col justify-end min-h-[420px] text-lotion bg-auroMetal rounded-xl overflow-hidden max-1250:min-h-[350px] max-620:min-h-[280px]"
                >
                  <div
                    className="relative z-10 px-7 py-4 
                    bg-gradient-to-b from-transparent to-chineseBlack max-1250:p-4"
                  >
                    <h3 className="text-xl font-bold drop-shadow-md">
                      {category.title}
                    </h3>
                    <span className="drop-shadow-md">
                      Ilość: {category.quantity}
                    </span>
                  </div>

                  <Image
                    src={category.image}
                    width={321}
                    height={420}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            ref={prevRef}
            className={cn("hidden absolute -left-2 top-1/2 -translate-y-1/2 z-10  w-8 h-8 p-0 rounded-full bg-gradient-to-r from-green to-castletonGreen hover:opacity-90 max-1024:flex",
              activeIndex === 0 && 'max-1024:hidden'
            )}
          >
            <ArrowRightIcon className='-rotate-[180deg] -ml-1' />
          </Button>

          <Button
            ref={nextRef}
            className={cn("hidden absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 p-0 rounded-full bg-gradient-to-r from-green to-castletonGreen hover:opacity-90 max-1024:flex", 
              activeIndex === CATEGORIES_DATA.length - 1 && 'max-1024:hidden'
            )}
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </div>

      <Button
        path="/categories"
        className="inline-flex mx-auto mt-7 min-w-[204px] min-h-[60px]"
      >
        Zobacz więcej
      </Button>
    </section>
  );
};

export default MainCategoriesSection;
