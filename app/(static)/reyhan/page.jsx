import Link from "next/link";

import PageTitle from "@/components/templates/pageTitle";
import PageImage from "@/components/templates/pageImage";
import PageContent from "@/components/templates/pageContent";
import SubPages from "@/components/sections/sub-menu";
import { StaticPages } from "@/content/data";

export default function ReyhanPage() {
  return (
    <>
      <PageTitle>Reyhan Çetin ve Arkadaşları</PageTitle>
      <PageImage bgImage="rMerhaba">Hoşgeldin</PageImage>

      <PageContent h2Title="Merhaba">
        <p>
          25 yıldır bilinç ve farkındalık çalışmaları yapıyor ve yönetiyorum.
          Binlerce katılımcıya seminer verdim ve yüzlerce çalışmayı yönettim.
        </p>
        <p>
          Kişisel yolculuğum pandemi ile birleşti. Sessizlik dönemine ve kendim
          sandığım bilinçten vazgeçmeye yol açtı.
        </p>
        <p>
          Şimdi kendimizi bulabileceğimiz ve kendimiz olabileceğimiz bir alan
          oluşturuyoruz. Sadece "<strong>çalışma</strong>" değil; aynı zamanda
          sanat, şefkat, sevgi, muhabbet ve arkadaşlık için.
        </p>
        <p>Sevgilerle ...</p>
      </PageContent>

      <SubPages subPage={StaticPages[0]} />
    </>
  );
}
