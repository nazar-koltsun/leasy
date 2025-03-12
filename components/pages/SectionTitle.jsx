import { cn } from "@/lib/utils";

const SectionTitle = ({ className, children }) => {
  return (
    <h2 className={cn("text-chineseBlack text-2xl font-bold", className)}>
      {children}
    </h2>
  )
}

export default SectionTitle;