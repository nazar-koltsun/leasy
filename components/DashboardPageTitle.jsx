import { cn } from "@/lib/utils";

const DashboardPageTitle = ({title, className}) => {
  return (
    <h1 className={cn("text-xl font-bold text-chineseBlack", className)}>
      {title}
    </h1>
  )
}

export default DashboardPageTitle;