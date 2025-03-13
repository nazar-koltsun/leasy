'use client';

import ProductCard from '@/components/ProductCard';
import SectionTitle from '@/components/pages/SectionTitle';
import Button from '@/components/Button';

import ProductImage1 from '@/assets/products/product_image1.png';
import ProductImage2 from '@/assets/products/product_image2.png';
import ProductImage3 from '@/assets/products/product_image3.png';
import ProductImage4 from '@/assets/products/product_image4.png';
import ProductImage5 from '@/assets/products/product_image5.png';
import ProductImage6 from '@/assets/products/product_image6.png';
import ProductImage7 from '@/assets/products/product_image7.png';
import ProductImage8 from '@/assets/products/product_image8.png';

const PRODUCTS_DATA = [
  {
    id: 1,
    title: 'Koparka Liebherr',
    description: 'Koparka gąsienicowa wersja do wyburzenia',
    location: 'Poznań, Wielkopolska',
    price_per_day: '250 zł',
    images: [ProductImage1, ProductImage2, ProductImage3],
    isInWishlist: false,
    rating: 4.5,
    reviewsCount: 12,
  },
  {
    id: 2,
    title: 'Koparka Liebherr',
    description: 'Koparka gąsienicowa wersja do wyburzenia',
    location: 'Poznań, Wielkopolska',
    price_per_day: '250 zł',
    images: [ProductImage2, ProductImage3, ProductImage4],
    isInWishlist: false,
    rating: 4.2,
    reviewsCount: 8,
  },
  {
    id: 3,
    title: 'Koparka Liebherr',
    description: 'Koparka gąsienicowa wersja do wyburzenia',
    location: 'Poznań, Wielkopolska',
    price_per_day: '250 zł',
    images: [ProductImage3, ProductImage4, ProductImage5],
    isInWishlist: true,
    rating: 3.4,
    reviewsCount: 18,
  },
  {
    id: 4,
    title: 'Koparka Liebherr',
    description: 'Koparka gąsienicowa wersja do wyburzenia',
    location: 'Poznań, Wielkopolska',
    price_per_day: '250 zł',
    images: [ProductImage4, ProductImage5, ProductImage6],
    isInWishlist: false,
    rating: 4.8,
    reviewsCount: 10,
  },
  {
    id: 5,
    title: 'Koparka Liebherr',
    description: 'Koparka gąsienicowa wersja do wyburzenia',
    location: 'Poznań, Wielkopolska',
    price_per_day: '250 zł',
    images: [ProductImage5, ProductImage6, ProductImage7],
    isInWishlist: true,
    rating: 2.6,
    reviewsCount: 2,
  },
  {
    id: 6,
    title: 'Koparka Liebherr',
    description: 'Koparka gąsienicowa wersja do wyburzenia',
    location: 'Poznań, Wielkopolska',
    price_per_day: '250 zł',
    images: [ProductImage6, ProductImage7, ProductImage8],
    isInWishlist: false,
    rating: 4.9,
    reviewsCount: 72,
  },
  {
    id: 7,
    title: 'Koparka Liebherr',
    description: 'Koparka gąsienicowa wersja do wyburzenia',
    location: 'Poznań, Wielkopolska',
    price_per_day: '250 zł',
    images: [ProductImage7, ProductImage8, ProductImage1],
    isInWishlist: false,
    rating: 4.1,
    reviewsCount: 72,
  },
  {
    id: 8,
    title: 'Koparka Liebherr',
    description: 'Koparka gąsienicowa wersja do wyburzenia',
    location: 'Poznań, Wielkopolska',
    price_per_day: '250 zł',
    images: [ProductImage8, ProductImage1, ProductImage2],
    isInWishlist: false,
    rating: 3.8,
    reviewsCount: 22,
  },
];

const NewProductsSection = () => {

  return (
    <section className="px-7 py-8 flex flex-col max-620:p-4">
      <SectionTitle>Nowo dodane</SectionTitle>
      <p className="mt-2 text-raisinBlack capitalize">
        Przeglądaj nowo dodane ogłoszenia
      </p>

      <ul className="mt-6 grid grid-cols-4 gap-x-5 gap-y-8 max-1250:grid-cols-3 max-840:grid-cols-2 max-620:gap-x-3">
        {PRODUCTS_DATA.map(product => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>

      <Button
        path="/products"
        className="inline-flex mx-auto mt-10 min-w-[204px] min-h-[60px] uppercase rounded-xl"
      >
        Zobacz więcej
      </Button>
    </section>
  );
};

export default NewProductsSection;
