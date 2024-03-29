import smd from "@/content/data/siteMetaData";
import { gy1, gy2, gy3, gy4 } from "@/public/assets/images";
import IconComponent from "@/components/ui/icons/icons";

export async function generateMetadata() {
  return {
    title: smd.title,
  };
}

export default function Home() {
  return (
    <main>
      <section className="relative bg-[url('/assets/images/ruhanda-slider-1.jpeg')] bg-center bg-cover h-[300px]">
        <div className="flex flex-col justify-center">
          <h1 className=" m-auto mt-6 px-4 py-2 text-white text-xl md:text-4xl border rounded-xl">
            RUHANDA HANDMADE THERAPY
          </h1>
          <div className="mx-auto mt-40 md:mt-36 flex flex-row space-x-4 justify-center">
            <a
              href="https://wa.me/905306407372"
              target="_blank"
              className="btn-hero bg-primary text-white"
            >
              <IconComponent name="whatsapp" size={24} color="white" />
              WhatsApp
            </a>
            <a
              href="/urunler"
              className="btn-hero bg-white text-primary hover:border-b"
            >
              <div className="bg-primary rounded-full p-1 mr-2">
                <IconComponent name="regfilealt" size={18} color="white" />
              </div>
              Bilgi
            </a>
          </div>
        </div>
      </section>
      <section className="mx-auto container container-p my-12 md:my-24 text-center text-primary ">
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
      <section className="py-12 my-12 md:my-24 text-center bg-primary text-white">
        <div className="p-4 mx-auto">
          <h2 className="">BİZ KİMİZ?</h2>
          <p className="">
            Öz ile buluşmak için çıkılan ruhsal yolculukta, “
            <strong>Nasıl dingin, anda ve dengede kalabilirim?</strong>” sorusu
            ile başladı bu serüven.
          </p>
          <p>
            İçeriye iyi gelenin dışarı ile paylaşılması gerektiğine inanan Aslı
            Mursaloğlu, bu yolculuk esnasında kendisine destek olan göz yastığı
            fikrini geliştirip, özel tasarımları ile modernize etti.
          </p>
          <p>Aldığı bu ilhamla Ruhanda markası için aşkla çalışıyor.</p>
        </div>
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
