import PageTitle from "@/components/templates/pageTitle";
import PageContent from "@/components/templates/pageContent";
import SubLinks from "@/components/sections/sub-links";
import { subPages } from "@/content/data";

export default function ReyhanPage() {
  return (
    <>
      <PageTitle>Reyhan Çetin ve Arkadaşları</PageTitle>
      <section className="bg-space p-4">
        <div className="mx-auto p-0 w-[400px] h-[400px] relative bg-merhaba  bg-no-repeat bg-center border-4 border-secondary shadow-2xl "></div>
      </section>
      <PageContent>
        <h3 className="text-center">Klasik Tanıtım</h3>
        <div className="border mx-auto max-w-xs text-center bg-gray-50">
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
      <SubLinks subPage={subPages[0]} id="2" />
    </>
  );
}
