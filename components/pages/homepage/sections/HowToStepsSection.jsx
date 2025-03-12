'use client';

import { cn } from '@/lib/utils';
import useMobileCarousel from '@/hooks/useMobileCarousel';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import classes from './MainCategoriesSections.module.css';
import SectionTitle from '@/components/pages/SectionTitle';
import Button from '@/components/Button';

import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import StepOneHandIcon from '@/components/icons/StepOneHandIcon';
import StepTwoHandIcon from '@/components/icons/StepTwoHandIcon';
import StepThreeHandIcon from '@/components/icons/StepThreeHandIcon';
import StepFourHandIcon from '@/components/icons/StepFourHandIcon';

const STEPS_DATA = [
  {
    id: 1,
    title: 'Znajdź, czego potrzebujesz',
    description:
      'Przeglądaj naszą szeroką ofertę sprzętu z różnych kategorii. Przeglądaj naszą szeroką ofertę sprzętu z różnych.',
    icon: <StepOneHandIcon />,
  },
  {
    id: 2,
    title: 'Wybierz lokalizację i datę',
    description:
      'Sprawdź dostępność sprzętu w wybranej miejscowości i zarezerwuj go na potrzebny okres.',
    icon: <StepTwoHandIcon />,
  },
  {
    id: 3,
    title: 'Zarezerwuj i zapłać online',
    description:
      'Zarezerwuj i zapłać za wypożyczenie w kilku prostych krokach za pośrednictwem naszej intuicyjnej platformy.',
    icon: <StepThreeHandIcon />,
  },
  {
    id: 4,
    title: 'Odbierz i korzystaj',
    description:
      'Sprzęt będzie gotowy do odbioru lub dostarczymy go w wybrane miejsce. Sprzęt będzie gotowy do odbioru.',
    icon: <StepFourHandIcon />,
  },
];

const HowToStepsSection = () => {
  const { glideRef, prevRef, nextRef, activeIndex } = useMobileCarousel();

  return (
    <section className="px-7 flex flex-col max-620:px-4">
      <SectionTitle>Jak wypożyczyć Sprzęt?</SectionTitle>
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
            {STEPS_DATA.map((step) => (
              <div key={step.id} className="w-full p-7 border-2 border-brightGray rounded-xl bg-gradient-to-br from-white from-45% to-cultured max-1250:p-4">
                {step.icon}

                <h3 className="mt-7 text-xl text-chineseBlack font-bold max-1250:mt-4 max-1250:text-lg max-620:text-base">
                  {step.title}
                </h3>

                <p className='mt-4 text-sm text-independence leading-[24px] capitalize max-1250:mt-2'>
                  {step.description}
                </p>
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
              activeIndex === STEPS_DATA.length - 1 && 'max-1024:hidden'
            )}
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToStepsSection;
