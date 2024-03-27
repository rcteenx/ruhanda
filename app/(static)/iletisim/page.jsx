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
