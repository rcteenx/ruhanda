import smd from "@/content/data/siteMetaData";
import FooterCopyRight from "@/components/ui/footer/FooterCopyRight";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="mx-auto container container-p my-12 md:my-24  "
    >
      <div className="flex justify-between items-end">
        <img src={smd.siteLogo} alt={smd.title} className="w-64 my-4" />
        <div>
          <h4 className="mb-2 font-montserrat text-lg leading-normal font-medium border-b">
            İletişim
          </h4>
          <ul>
            <li className="mt-1 font-montserrat text-sm leading-normal  hover:text-slate-gray">
              <a href="https://wa.me/905306407372" target="_blank">
                whatsapp mesaj
              </a>
            </li>
            <li className="mt-1 font-montserrat text-sm leading-normal  hover:text-slate-gray">
              <a href="mailto:bilgi@ruhanda.com" target="_blank">
                bilgi@ruhanda.com
              </a>
            </li>
            <li className="mt-1 font-montserrat text-sm leading-normal  hover:text-slate-gray">
              <a href="tel:+05306407372" target="_blank">
                +90 (530) 6407372
              </a>
            </li>
          </ul>
        </div>
      </div>

      <FooterCopyRight />
    </footer>
  );
}
