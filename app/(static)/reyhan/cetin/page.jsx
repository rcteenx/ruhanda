import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";
import SubLinks from "@/components/sections/sub-links";
import { subPages } from "@/content/data";

export default function ReyhanPage() {
  return (
    <>
      <PageTitle>Merhaba - Reyhan Çetin</PageTitle>
      <PageImage h1Color="white">Hoşgeldiniz</PageImage>

      <PageContent>
        <h3 className="text-center">Klasik Tanıtım</h3>
        <div className="border mx-auto p-4 max-w-xl text-center bg-gray-50">
          <p className="my-4">
            1976 yılında Biga'da doğdu.
            <br />
            Baba kamyon şoförü, anne ev hanımı.
          </p>
          <p className="my-4">
            Dumlupınar İlkokulu
            <br />
            Çanakkale Anadolu Lisesi ve
            <br />
            Boğaziçi Üniversitesi İşletme mezuniyeti.
          </p>
          <p className="my-4">
            İşletme, satış-pazarlama, muhasebe ve dış ticaret ile başlayan
            kariyeri, girişimcilik ve IT ile devam etti.
          </p>
          <p className="my-4">
            2001 yılında başladığı ezoterik felsefe çalışmalarına,
            <br />
            2010’lu yıllarda eğitmen olarak devam etti.
            <br />
            Pandemiyle (2020) beraber <strong>yapamama</strong> dönemi başladı.
          </p>
          <p className="my-4">
            Halen Çanakkale'nin Biga ilçesinde ikamet ediyor.
            <br />
            Evli ve 3 çocuk babası.
          </p>
        </div>
      </PageContent>
      <section
        id="reyhan"
        className="container mx-auto container-p my-2 md:my-10 lg:mt-16 flex flex-col xl:flex-row justify-center gap-0"
      >
        reyhan
      </section>
      <section id="education" className="bg-[#f7f7f7] px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          BİLİNÇLİ BENLİKLER
        </h2>
        <p className="text-center text-sm text-gray-400">
          İnsanın içinde, üst seviyede benlikler var. Bunların ikisi:
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row gap-4">
            <div className=" my-4 px-4 py-8 text-center max-w-md bg-white  border text-gray-600">
              <h2>GERÇEK BEN</h2>
              <p className="text-sm text-gray-400">
                Next.js, hızlı, SEO dostu web uygulamaları geliştirmenin
                teknoloji harikası aracı
              </p>
              <p className="text-sm text-gray-400">
                Yeniden kullanılabilir ve tekrarlanmayan kod yazmayı
                kolaylaştıran bu sistem, bakım sürecini de kolaylaştırıyor.
              </p>
            </div>
            <div className=" m-4 px-4 py-8 text-center max-w-md bg-white  border  text-gray-600">
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                className="p-2 h-16 block mx-auto"
              /> */}
              <h2>BEN ÖTESİ</h2>
              <p className="text-sm text-gray-400">
                Tailwind CSS, istenen tasarımları, hızlı, mükemmele yakın
                uygulamaya destek olan bir çerçeve.
              </p>
              <p className="text-sm text-gray-400">
                Bu yeni çerçeve, CSS kodlarının karmaşıklığının önüne geçiyor,
                bakım ve güncelleme kolaylığına destek oluyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-24">
        <div className="container-p">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            DİĞER REYHANLAR
          </h2>
          <div className="mt-12">
            <ul className="flex flex-wrap justify-center  gap-4">
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Elif'in Babası
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                İnci'in Babası
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Kaan'in Babası
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Annesinin Oğlu
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Kardeşinin Abisi
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Eski Koca
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                İşletme Mezunu
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Yazılımcı
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Bigalı
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Boğaziçili
              </li>
              <li className=" w-64 border px-12 py-8 text-center transition ease-in hover:bg-gray-100">
                Çanakkaleli
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SubLinks subPage={subPages[0]} id="1" />
    </>
  );
}
