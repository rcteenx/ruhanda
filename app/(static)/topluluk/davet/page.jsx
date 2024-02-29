import Link from "next/link";
import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";

export default function ToplulukPage() {
  return (
    <>
      <PageTitle>Reyhan Çetin ve Arkadaşları - Topluluk Daveti</PageTitle>
      <PageImage bgImage="tMerhaba">Topluluk Daveti</PageImage>
      <PageContent h2Title="Arkadaş Topluluğu">
        <p>Reyhan Çetin ve arkadaşları</p>
        <p>
          Toplulukların büyük bölümü, ne yazık ki ortak bir amaç ve değeri
          olmayan kişilerden oluştuğu için, katılımcıların, kendileri olarak
          nefes alabilecekleri sosyal ortamı sağlayamıyor.
        </p>
        <p>...</p>
        <p>Bekliyoruz.</p>
      </PageContent>

      <section className="px-4 py-12 md:py-24">
        <div className="container-p">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            İLGİLİ SAYFALAR
          </h2>
          <div className="mt-12">
            <ul className="flex flex-wrap justify-center gap-4">
              <li>
                <Link
                  className=" w-64 border px-12 py-8 text-center  transition ease-in hover:bg-gray-100 block"
                  href="/topluluk/davet"
                >
                  Topluluk Daveti
                </Link>
              </li>
              <li>
                <Link
                  className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100 block"
                  href="/topluluk/yapi"
                >
                  Topluluk Yapısı
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
