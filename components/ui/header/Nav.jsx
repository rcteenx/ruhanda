import Link from "next/link";

import { StaticPages } from "@/content/data";

export default function HeaderNav() {
  // const menu = StaticPages.filter((m) => m.id < 5);
  const menu = StaticPages.filter((m) => m.id < 6);
  return (
    <div className="h-12 container-p bg-[#efefef] flex justify-between items-center border-t border-b border-[#cecdcd]">
      <ul className="mx-auto flex justify-center items-center space-x-4">
        {menu.map((p) => (
          <li
            key={p.id}
            className={`text-primary hover:border-b border-primary `}
          >
            <Link href={`/${p.link}`}>{p.title.toLowerCase()}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
