import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";

const RentItemSelect = ({ selected, setSelected, options, className }) => { 
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const onOptionSelect = (option) => {
    setSelected(option);
    setIsSelectOpen(false);
  }

  return (
    <div className={cn("relative", className)}>
      <button onClick={() => setIsSelectOpen(!isSelectOpen)} className="w-full flex items-center gap-2 px-3 py-2 bg-white border-2 border-[#ddd] rounded-lg font-bold tracking-tight text-left">
        <Image src={selected.image} alt={selected.label} width={70} height={53} 
          className="w-[70px] h-[53px] object-cover" />
        {selected.label}
        <ArrowDownIcon className="stroke-[#888888] ml-auto" />
      </button>

      <ul className={cn("absolute hidden left-0 mt-2 w-full bg-white border border-[#ddd] rounded-md overflow-hidden", isSelectOpen && 'block')}>
        {options.map((option) => (
          <li
            key={option.id}
            className={cn("flex items-center gap-2 p-2 hover:bg-lightSilver cursor-pointer transition duration-300 ease-in-out text-sm font-bold tracking-tight", 
              option.id === selected.id && 'bg-magicMint hover:bg-magicMint'
            )}
            onClick={() => onOptionSelect(option)}
          >
            <Image src={option.image} alt={option.label} width={40} height={24} className="w-10 h-6 object-cover" />
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RentItemSelect;