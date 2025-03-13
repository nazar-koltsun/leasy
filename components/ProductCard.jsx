import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import styles from './ProductCard.module.css';
import Button from '@/components/Button';
import StarsRating from '@/components/StarsRating';

import Image from 'next/image';
import WishlistHearthIcon from '@/components/icons/WishlistHearthIcon';

const ProductCard = ({ product }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const glideRef = useRef(null);
  const glideInstanceRef = useRef(null);
  const [isInWishList, setIsInWishclassName] = useState(product.isInWishList);

  const toggleIsInWishList = () => {
    setIsInWishclassName((prevValue) => !prevValue);
  };

  useEffect(() => {
    const initializeCarousel = () => {
      glideInstanceRef.current = new Glide(glideRef.current, {
        type: 'carousel',
        gap: 0,
        perView: 1,
      });

      // Update activeSlide state on slide change
      glideInstanceRef.current.on('run.after', () => {
        setActiveSlide(glideInstanceRef.current.index);
      });

      glideInstanceRef.current.mount();
    };

    // Initialize carousel on mount
    initializeCarousel();

    return () => {
      if (glideInstanceRef.current) {
        glideInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-[320px]">
      <div
        ref={glideRef}
        className="relative h-[236px] rounded-xl overflow-hidden"
      >
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides">
            {product.images.map((image, index) => (
              <Image key={index} src={image} alt="" />
            ))}
          </div>
        </div>

        <Button
          onClick={toggleIsInWishList}
          variant="flat"
          className="absolute z-10 top-3 right-3 p-0 w-8 h-8 flex justify-center items-center rounded-full"
        >
          <WishlistHearthIcon
            fill={isInWishList ? '#B6BCC7' : 'transparent'}
            stroke={isInWishList ? '#B6BCC7' : '#FCFCFC'}
            className="drop-shadow-lg"
          />
        </Button>

        {/* Dots Navigation */}
        <div
          className={cn('glide__bullets', styles.bullets)}
          data-glide-el="controls[nav]"
        >
          {product.images.map((_, index) => (
            <button
              key={index}
              className={cn(
                'glide__bullet',
                styles.bullet,
                index === activeSlide && styles.bulletActive
              )}
              data-glide-dir={`=${index}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <div className='flex justify-between gap-4 text-chineseBlack'>
          <h3 className='font-bold'>{product.title}</h3>
          <StarsRating rating={product.rating} reviewsCount={product.reviewsCount} />
        </div>
        <p className='mt-1'>{product.description}</p>
        <p className='mt-1 text-independence'>{product.location}</p>
        <div className='mt-1 flex gap-4 justify-between items-end'>
          <p className='text-lg font-bold'>{product.price_per_day} <span className='text-base text-independence font-normal'>/dzień</span></p>
          <Button path='/rent' className='py-1 rounded-lg text-lotion'>Wypożycz</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
