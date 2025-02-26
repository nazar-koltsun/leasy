import { cn } from "@/lib/utils";

const SocialMedia = ({ networks, className }) => {
  return (
    <ul className={cn("flex", className)}>
      {networks.map((network) => (
        <li key={network.title}>
          <a
            href={network.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={network.title}
            className="group flex justify-center items-center w-7 h-8"
          >
            {network.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;