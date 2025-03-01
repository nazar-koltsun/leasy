import { cn } from "@/lib/utils";
import Image from "next/image";
import Card from "@/components/Card";
import Button from "@/components/Button";
import StarsRating from "@/components/StarsRating";

import AvatarImage from '@/assets/avatars/avatar-1.png';
import ShareIcon from '@/components/icons/ShareIcon';

const LenderInfoCard = ({ lenderData, className }) => {
  return (
    <Card className={cn('w-[520px] max-w-full pb-9 pt-14 text-chineseBlack', className)}>
      <h2 className="text-2xl font-bold capitalize">Informacje o Wypożyczającym</h2>

      <div className="mt-5 flex items-center gap-6">
        <Image src={AvatarImage} width={64} height={64} className="w-[64px] h-[64px] object-cover" alt="" />

        <div>
          <p className="font-bold">{lenderData.name}</p>

          <div>
            <StarsRating rating={lenderData.rating_score} reviewsCount={lenderData.reviews_count} 
            className='mt-3' />
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-5">
        <p className="flex gap-1">
          <span className="text-darkSlateGray">Użytkownik Leasy od:</span> 
          <span>{lenderData.used_leasy_from}</span>
        </p>

        <p className="flex gap-1">
          <span className="text-darkSlateGray">Lokalizacja:</span> 
          <span>{lenderData.location}</span>
        </p>

        <p className="flex gap-1">
          <span className="text-darkSlateGray">Języki:</span> 
          <span>{lenderData.languages}</span>
        </p>

        <p className="flex gap-1">
          <span className="text-darkSlateGray">Ilość wystawionych ogłoszeń:</span> 
          <span>{lenderData.number_of_ads_posted}</span>
        </p>
      </div>

      <div className="mt-10 flex gap-5">
        <Button className="min-w-[170px]">Wyślij wiadomość</Button>
        <Button className="w-[52px] h-[52px] rounded-full bg-antiFlashWhite hover:bg-[#d0d0d0]">
          <ShareIcon />
        </Button>
        <Button variant="bordered" className="ml-auto border-chineseBlack px-5 min-w-[148px] font-bold hover:opacity-50">Dodaj opinie</Button>
      </div>
    </Card>
  )
}

export default LenderInfoCard;