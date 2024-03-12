import smd from "@/content/data/siteMetaData";
import { gy1, gy2, gy3, gy4 } from "@/public/assets/images";

export async function generateMetadata() {
  return {
    title: smd.title,
  };
}

export default function Home() {
  return (
    <main>
      <section className="relative bg-[url('/assets/images/ruhanda-slider-1.jpeg')] bg-center bg-cover h-[300px]">
        <div className="flex justify-center">
          <h1 className="px-4 py-2 text-white text-xl md:text-4xl border rounded-xl">
            RUHANDA EL YAPIMI ÜRÜNLER
          </h1>
        </div>
      </section>
      <section className="container container-p my-12 md:my-24 text-center text-primary ">
        <h2 className="text-2xl md:text-6xl">LAVANDER EYE PILLOW</h2>
        <h3 className="md:text-3xl">LAVANTALI GÖZ YASTIĞI</h3>
        <p className="text-blacky">
          Yaşamın içerisinde bir çok duygu ile birlikteyiz. Duygularımıza
          kapılıp gittiğimiz zamanlarda kimi zaman anda-kendimizden
          uzaklaşabiliyoruz. Böyle zamanlarda ihtiyacımız olan; kendimize dönmek
          ve içimize bakmak. İşte aşkla yapılan Ruhanda göz yastıklarımız sizin
          huzurlu ve dingin bir yaşam sürebilmeniz için destek bir ürün olarak
          ortaya çıktı. Ruhanda göz yastıkları dinlenme sırasında ışığı ağırlığı
          ile engeller ve lavantanın rahatlatıcı etkisi ile kendinize zaman
          ayırmanızı sağlar.
        </p>
        <p>
          Lavantalı Ruhanda göz yastığı aşkla tasarlanmış olup, lavantalar
          Isparta'nın yerli üreticilerinden alınarak çevre dostu kumal ile
          desteklenmiştir.
        </p>
      </section>
      <section className="my-12 md:my-24 text-center bg-primary h-48 "></section>

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
