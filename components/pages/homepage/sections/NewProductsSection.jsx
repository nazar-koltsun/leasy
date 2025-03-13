'use client';

import ProductCard from '@/components/ProductCard';
import SectionTitle from '@/components/pages/SectionTitle';

import ProductImage1 from '@/assets/products/product_image1.png';
import ProductImage2 from '@/assets/products/product_image2.png';
import ProductImage3 from '@/assets/products/product_image3.png';

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
];

const NewProductsSection = () => {

  return (
    <section className="px-7 py-8 flex flex-col max-620:p-4">
      <SectionTitle>Nowo dodane</SectionTitle>
      <p className="mt-2 text-raisinBlack capitalize">
        Przeglądaj nowo dodane ogłoszenia
      </p>

      <ul className="mt-6">
        <li>
          <ProductCard product={PRODUCTS_DATA[0]} />
        </li>
      </ul>
    </section>
  );
};

export default NewProductsSection;
