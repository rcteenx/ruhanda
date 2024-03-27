import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaArrowRight,
  FaRegFileAlt,
  FaInfoCircle,
  FaWifi,
  FaStar,
  FaHome,
  FaBlog,
  FaSitemap,
  FaGoogle,
  FaMobileAlt,
  FaRev,
  FaAlignLeft,
} from "react-icons/fa";

const iconTypes = {
  facebook: FaFacebook,
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  whatsapp: FaWhatsapp,
  arrowright: FaArrowRight,
  regfilealt: FaRegFileAlt,
  infocircle: FaInfoCircle,
  wifi: FaWifi,
  star: FaStar,
  home: FaHome,
  blog: FaBlog,
  sitemap: FaSitemap,
  google: FaGoogle,
  mobilealt: FaMobileAlt,
  rev: FaRev,
  alignleft: FaAlignLeft,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
