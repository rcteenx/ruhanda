import smd from "@/content/data/siteMetaData";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="mx-auto container container-p my-12 md:my-24  "
    >
      <div className="flex justify-center md:justify-start">
        <img src={smd.siteLogo} alt={smd.title} className="w-64 my-4" />
      </div>
      <div className="flex flex-col space-y-4 space-x-0 md:flex-row md:space-y-0 md:space-x-4 text-blacky">
        <div className=" w-96 text-center md:text-left">
          <h3 className="font-normal">BİZ KİMİZ?</h3>
          <p className="text-blacky">
            Öz ile buluşmak için çıkılan ruhsal yolculukta, “Nasıl dingin, anda
            ve dengede kalabilirim?” sorusu ile başladı bu serüven. İçeriye iyi
            gelenin dışarı ile paylaşılması gerektiğine inanan Aslı Mursaloğlu,
            bu yolculuk esnasında kendisine destek olan göz yastığı fikrini
            geliştirip, özel tasarımları ile modernize etti. Aldığı bu ilhamla
            spiritüel takılara da yer vererek Ruhanda markası için aşkla
            çalışıyor.
          </p>
        </div>
        <div className="grow">
          <div className="text-center md:text-left">
            <h3>KURUMSAL</h3>
            <ul>
              <li>
                <a href="/about-us">Hakkımızda</a>
              </li>
              <li>
                <a href="/contact"> İletişim</a>
              </li>
              <li>
                <a href="/faq">Sıkça Sorulan Sorular</a>
              </li>
              <li>
                <a href="/privacy-policy">Kullanım ve Gizlilik</a>
              </li>
              <li>
                <a href="/delivery-and-refunds-info">Teslimat ve İade</a>
              </li>
              <li>
                <a href="/distance-selling-contract">
                  Mesafeli Satış Sözleşmesi
                </a>
              </li>
              <li>
                <a href="/personal-data">Kişisel Verilerin Saklanması</a>
              </li>
              <li>
                <a href="iade-talebi-olustur">İade Talebi</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3>SOSYAL MEDYA</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
