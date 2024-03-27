import smd from "@/content/data/siteMetaData";
import { gy1, gy2, gy3, gy4 } from "@/public/assets/images";
import IconComponent from "@/components/ui/icons/icons";

export async function generateMetadata() {
  return {
    title: smd.title,
  };
}

export default function Iletisim() {
  return (
    <main>
      <section className="mx-auto container container-p my-12 md:my-24 text-center text-primary ">
        <h2 className="text-2xl md:text-6xl">İLETİŞİM</h2>
        <h3 className="md:text-3xl">Bize Ulaşın</h3>
        <ul>
          <li className="mt-1 font-montserrat text-sm leading-normal  hover:text-slate-gray">
            <a href="https://wa.me/905306407372" target="_blank">
              whatsapp mesajı
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
      </section>

      <section className="mx-auto container container-p my-12 md:my-24  ">
        <h2 className="text-center text-primary text-3xl border-b  border-primary">
          Popüler Göz Yastıkları
        </h2>
        <div className="flex flex-col space-y-4 space-x-0 md:flex-row md:space-y-0 md:space-x-4 items-center justify-between gap-0">
          <div>
            <img src={gy1.src} className="w-96" />
          </div>
          <div>
            <img src={gy2.src} className="w-96" />
          </div>
          <div>
            <img src={gy3.src} className="w-96" />
          </div>
          <div>
            <img src={gy4.src} className="w-96" />
          </div>
        </div>
      </section>
    </main>
  );
}
