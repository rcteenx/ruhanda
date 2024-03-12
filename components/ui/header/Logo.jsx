import Link from "next/link";
import smd from "@/content/data/siteMetaData";

export default function HeaderLogo() {
  return (
    <div className="h-18 container-p flex justify-center items-center">
      <h3 className="mx-auto">
        <Link id="ruhanda" href="/" className="">
          <img src={smd.siteLogo} alt={smd.title} className="mx-auto w-36" />
        </Link>
      </h3>
    </div>
  );
}
