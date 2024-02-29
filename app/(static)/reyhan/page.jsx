import Link from "next/link";

import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";

export default function ReyhanPage() {
  return (
    <>
      <PageTitle>Reyhan Çetin ve Arkadaşları</PageTitle>
      <PageImage bgImage="rMerhaba">Hoşgeldin</PageImage>

      <PageContent h2Title="Reyhan Çetin Kimdir?">
        <p>
          25 yıldır bilinç ve farkındalık çalışmaları yapıyor ve yönetiyorum.
          Binlerce katılımcıya seminer verdim ve yüzlerce çalışma grubu
          yönettim.
        </p>
        <p>Pandemi sonrası uzun bir sessizlik ve …</p>
        <p>
          Şimdi bana benzer arkadaşlardan oluşan bir topluluk oluşturma
          hedefiyle yola çıktım. Kendimiz bulabileceğimiz ve kendimiz
          olabileceğimiz bir sosyal ortam …
        </p>
        <p>Sevgilerle…</p>
      </PageContent>

      <section className="bg-[#f7f7f7] px-4 py-16 md:py-24">
        <div className="container-p">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            REYHANLAR
          </h2>
          <p className="text-center text-sm ">
            Bir "ben" vardır bende, benden içeru<sup>*</sup>
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
              <div className=" my-4 p-8 w-96 text-center max-w-md bg-white border">
                <h3>H12 - REYHAN</h3>
                <ul className="px-4 text-left list-disc">
                  <li>Gerçek Reyhan</li>
                  <li>H12 kaderi</li>
                  <li>Bir bilen</li>
                  <li>Söze döken</li>
                  <li>Kendisinden aktif</li>
                </ul>
              </div>
              <div className=" my-4 p-8 w-96 text-center max-w-md bg-white border">
                <h3>H6 - REYHAN</h3>
                <ul className="px-4 text-left list-disc">
                  <li>Yok Reyhan</li>
                  <li>Kaderin üstünde</li>
                  <li>Bilemeyen</li>
                  <li>Sessiz</li>
                  <li>Dış etkilerle hareket eden</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mx-auto max-w-3xl text-xs">
            <sup>*</sup>Yunus Emre'nin "Bir Ben Vardır Bende" şiirinden alıntı.
          </p>
        </div>
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
                  href="/reyhan/cetin"
                >
                  Reyhan Çetin
                </Link>
              </li>
              <li>
                <Link
                  className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100"
                  href="/reyhan/arkadaslar"
                >
                  Arkadaşları
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
