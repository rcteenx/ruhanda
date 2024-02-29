import Link from "next/link";
import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";

export default function ToplulukPage() {
  return (
    <>
      <PageTitle>Reyhan Çetin Arkadaş Topluluğu</PageTitle>
      <PageImage bgImage="tMerhaba">Seni Bekliyoruz</PageImage>
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

      <section className="bg-[#f7f7f7] px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          TOPLULUK YAPILARI
        </h2>
        <p className="text-center text-sm ">
          Her insanın fiziksel varoluşunun üzerinde, başka benlikler var.
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
            <div className=" my-4 p-8 w-96 text-center max-w-md bg-white border">
              <h3>H12 - ÇALIŞMA GRUBU</h3>
              <ul className="px-4 text-left list-disc">
                <li>Bilinç Çalışmaları</li>
                <li>Kişisel Gözlem Paylaşımı</li>
              </ul>
            </div>
            <div className=" my-4 p-8 w-96 text-center max-w-md bg-white border">
              <h3>H6 - DOST SOHBETİ</h3>
              <ul className="px-4 text-left list-disc">
                <li>Birlikte Sohbet</li>
                <li>Serbest Paylaşım</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-8 md:py-12  text-center">
        <h2 className="text-2xl md:text-4xl font-bold ">Misyonumuz</h2>

        <p className="m-4">
          We are a design-oriented team that cares deeply about nature,
          innovation, and masterful execution.
        </p>
      </section>

      <section className="bg-slate2 px-4 py-8 md:py-12  text-center text-white">
        <h2 className="text-2xl md:text-4xl font-bold ">Değerlerimiz</h2>

        <p className="m-4">
          We are a design-oriented team that cares deeply about nature,
          innovation, and masterful execution.
        </p>
      </section>

      <section className="px-4 py-12 md:py-24">
        <div className="container-p">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            İLGİLİ SAYFALAR
          </h2>
          <div className="mt-12">
            <ul className="flex flex-wrap justify-center  gap-4">
              <li>
                <Link
                  className=" w-64 border px-12 py-8 text-center  transition ease-in hover:bg-gray-100"
                  href="/topluluk/davet"
                >
                  Topluluk Daveti
                </Link>
              </li>
              <li>
                <Link
                  className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100"
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
