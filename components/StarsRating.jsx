import { cn } from "@/lib/utils";
import RatingStarIcon from "@/components/icons/RatingStarIcon";

const StarsRating = ({rating, reviewsCount, className}) => {
  const starsBlockWidht = (rating / 5) * 100;

  return (
    <div className={cn('flex items-center gap-4', className)}>
      <div className="relative">
        <div className="flex items-center gap-[2px]">
          <RatingStarIcon fill="#E5E7EB" />
          <RatingStarIcon fill="#E5E7EB" />
          <RatingStarIcon fill="#E5E7EB" />
          <RatingStarIcon fill="#E5E7EB" />
          <RatingStarIcon fill="#E5E7EB" />
        </div>

        <div style={{ width: `${starsBlockWidht}%` }} className="absolute top-0 left-0 flex items-center gap-[2px] overflow-hidden">
          <RatingStarIcon className='flex-shrink-0' />
          <RatingStarIcon className='flex-shrink-0' />
          <RatingStarIcon className='flex-shrink-0' />
          <RatingStarIcon className='flex-shrink-0' />
          <RatingStarIcon className='flex-shrink-0' />
        </div>
      </div>

      {reviewsCount && (
        <span>({reviewsCount})</span>
      )}
    </div>
  )
} 

export default StarsRating;