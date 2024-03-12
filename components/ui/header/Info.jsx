export default function HeaderInfo() {
  return (
    <div className="h-12 container-p text-white bg-primary flex justify-between items-center">
      <p className="w-48 text-sm">
        <a href="mailto:bilgi@ruhanda.com">bilgi@ruhanda.com</a>
      </p>
      <p className="mx-auto hidden md:block text-center">
        300 TL ve üzeri Ücretsiz Kargo
      </p>
      <h3 className="w-48 flex justify-end">
        <a
          href="https://www.trendyol.com/sr/ruhanda-x-b111006"
          target="_blank"
          className="px-2 py-1 rounded-lg border border-white text-white text-sm hover:bg-white hover:text-primary"
        >
          Satın Al
        </a>
      </h3>
    </div>
  );
}
