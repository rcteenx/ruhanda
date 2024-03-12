import HeaderInfo from "@/components/ui/header/Info";
import HeaderLogo from "@/components/ui/header/Logo";
import HeaderNav from "@/components/ui/header/Nav";

export default function HeaderStaticIndex() {
  return (
    <header id="header">
      <HeaderInfo />
      <HeaderLogo />
      <HeaderNav />
    </header>
  );
}
