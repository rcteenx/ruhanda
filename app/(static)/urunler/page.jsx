import smd from "@/content/data/siteMetaData";
import { gy1, gy2, gy3, gy4 } from "@/public/assets/images";
import IconComponent from "@/components/ui/icons/icons";

export async function generateMetadata() {
  return {
    title: smd.title,
  };
}

export default function Urunler() {
  return (
    <main>
      <section className="mx-auto container container-p my-12 md:my-24 text-center text-primary ">
        <h2 className="text-2xl md:text-6xl">ÜRÜNLERİMİZ</h2>
        <h3 className="md:text-3xl">GÖZ BANTI VE GÖZ YASTIĞI</h3>
        <p className="text-blacky">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          facilis, mollitia consectetur, repellat ab distinctio perferendis
          laborum harum voluptatem quis, impedit alias iste laboriosam ipsam
          praesentium? Dolore beatae quas amet? Aperiam id provident quo
          mollitia enim voluptate illo dolore totam pariatur exercitationem rem
          tempora unde est, quas, vitae harum suscipit qui delectus quos sit
          iusto molestiae! Quas pariatur est eum!
        </p>
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
