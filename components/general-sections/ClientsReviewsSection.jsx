'use client';

import { cn } from '@/lib/utils';
import useMobileCarousel from '@/hooks/useMobileCarousel';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import classes from './ClientsReviewsSection.module.css';
import SectionTitle from '@/components/pages/SectionTitle';
import Button from '@/components/Button';
import StarsRating from '@/components/StarsRating';

import ArrowRightIcon from '@/components/icons/ArrowRightIcon';

const REVIEWS_DATA = [
  {
    id: 1,
    author_name: 'JAN NOWAK',
    location: 'Poznań',
    rating: 3.6,
    description:
      'Szeroki wybór urządzeń, przejrzyste warunki i szybki proces rezerwacji to tylko niektóre z zalet tej platformy. Niezależnie od tego, czy potrzebuję sprzętu na budowę, czy na.',
  },
  {
    id: 2,
    author_name: 'JAN NOWAK',
    location: 'Poznań',
    rating: 5,
    description:
      'Szeroki wybór urządzeń, przejrzyste warunki i szybki proces rezerwacji to tylko niektóre z zalet tej platformy. Niezależnie od tego, czy potrzebuję sprzętu na budowę, czy na.',
  },
  {
    id: 3,
    author_name: 'JAN NOWAK',
    location: 'Poznań',
    rating: 3.5,
    description:
      'Szeroki wybór urządzeń, przejrzyste warunki i szybki proces rezerwacji to tylko niektóre z zalet tej platformy. Niezależnie od tego, czy potrzebuję sprzętu na budowę, czy na.',
  },
  {
    id: 4,
    author_name: 'JAN NOWAK',
    location: 'Poznań',
    rating: 4.5,
    description:
      'Szeroki wybór urządzeń, przejrzyste warunki i szybki proces rezerwacji to tylko niektóre z zalet tej platformy. Niezależnie od tego, czy potrzebuję sprzętu na budowę, czy na.',
  },
];

const carouselConfig = {
  breakpoints: {
    840: {
      perView: 2,
    },
  },
}

const ClientsReviewsSection = () => {
  const { glideRef, prevRef, nextRef, activeIndex } = useMobileCarousel(1024, carouselConfig);

  return (
    <section className="px-7 py-8 flex flex-col max-620:px-4">
      <SectionTitle>Opinie użytkowników</SectionTitle>
      <p className="mt-2 text-raisinBlack capitalize">
        Sprawdź, co użytkownicy LEASY mówią o nas
      </p>

      <div ref={glideRef} className={cn('glide', classes.glide)}>
        <div className="glide__track" data-glide-el="track">
          <div
            className={cn(
              'glide__slides grid grid-cols-4 gap-5 max-1024:flex max-620:gap-3',
              classes.glideSlides
            )}
          >
            {REVIEWS_DATA.map((review) => (
              <div
                key={review.id}
                className="w-full p-[26px] border-2 border-brightGray rounded-xl bg-gradient-to-br from-white from-45% to-cultured max-1250:p-4"
              >
                <p className='leading-[28px] text-raisinBlack max-620:text-sm max-620:leading-[24px]'>“{review.description}”</p>

                <div className="mt-6 pt-5 flex justify-between items-center gap-4 border-t border-t-brightGray max-620:mt-4 max-620:pt-3 max-620:flex-col max-620:items-start max-620:gap-2">
                  <div className="w-full flex flex-wrap flex-col max-620:flex-row max-620:justify-between max-620:gap-x-4 max-620:gap-y-1">
                    <strong className="text-sm tracking-wider max-620:text-xs">
                      {review.author_name}
                    </strong>
                    <spam className='text-raisinBlack text-sm leading-[28px] max-620:text-xs'>{review.location}</spam>
                  </div>

                  <StarsRating rating={review.rating} />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            ref={prevRef}
            className={cn(
              'hidden absolute -left-2 top-1/2 -translate-y-1/2 z-10  w-8 h-8 p-0 rounded-full bg-gradient-to-r from-green to-castletonGreen hover:opacity-90 max-1024:flex',
              activeIndex === 0 && 'max-1024:hidden'
            )}
          >
            <ArrowRightIcon className="-rotate-[180deg] -ml-1" />
          </Button>

          <Button
            ref={nextRef}
            className={cn(
              'hidden absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 p-0 rounded-full bg-gradient-to-r from-green to-castletonGreen hover:opacity-90 max-1024:flex',
              activeIndex === REVIEWS_DATA.length - 1 && 'max-1024:hidden'
            )}
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientsReviewsSection;
