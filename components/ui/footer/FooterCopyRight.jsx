const FooterCopyRight = () => {
  return (
    <div className="mt-8 px-2 py-4 flex justify-between text-white-400 border-t">
      <p className="text-xs">
        &copy; {new Date().getFullYear()} - All rights reserved.
      </p>
      <p className="text-xs">
        <span className=" text-red-700">♥</span>&nbsp; by &nbsp;
        <a
          href="https://github.com/rcteenx"
          className="underline"
          target="_blank"
        >
          rcteenx
        </a>
      </p>
    </div>
  );
};

export default FooterCopyRight;
