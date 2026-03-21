import LinksData from "../data/links.json";
import { Globe, ArrowUpRight, Mail, Newspaper } from "lucide-react";
import { GitHub } from "../icons/Github";
import { LinkedIn } from "../icons/Linkedin";

function Link({ onOpenModal }) {
  const iconMap = {
    Github: GitHub,
    Linkedin: LinkedIn,
    Globe: Globe,
    Mail: Mail,
    Newspaper: Newspaper,
  };
  return (
    <div className="flex flex-col gap-4 mt-10">
      {LinksData.map((link) => {
        const Icon = iconMap[link.icon];

        const commonClasses = `
          flex justify-between w-full pt-2 pb-2 pl-5 pr-5 items-center
          text-white rounded-xl bg-zinc-900
          hover:scale-[1.02]
          transition-all duration-500 ease-in-out hover:bg-blue-400/20 font-semibold
        `;

        if (link.name === "portfolio") {
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`${commonClasses} bg-linear-to-r from-blue-500/20 to-blue-400/20
              border border-blue-500/30`}
            >
              {Icon && <Icon className="size-6 md:size-8" />}
              <span>{link.title}</span>
              <ArrowUpRight className="size-6 md:size-8" />
            </a>
          );
        }
        if (link.type === "action") {
          return (
            <button
              key={link.id}
              type="button"
              id=""
              onClick={onOpenModal}
              className={`${commonClasses} cursor-pointer`}
            >
              {Icon && <Icon className="size-6 md:size-8" />}
              <span>{link.title}</span>
              <ArrowUpRight className="size-6 md:size-8" />
            </button>
          );
        }

        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className={commonClasses}
          >
            {Icon && <Icon className="size-6 md:size-8" />}
            <span>{link.title}</span>
            <ArrowUpRight className="size-6 md:size-8" />
          </a>
        );
      })}
    </div>
  );
}

export default Link;
<ArrowUpRight />;
