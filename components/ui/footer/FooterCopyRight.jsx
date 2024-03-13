export default function FooterCopyRight() {
  return (
    <div className="mt-2 py-2 flex justify-between  border-t">
      <p className="text-xs">
        &copy; {new Date().getFullYear()} - All rights reserved.
      </p>
      <p className="font-montserrat text-xs">
        <span className=" text-red-700">♥</span>&nbsp; by &nbsp;
        <a href="https://rcteenx.com" className="underline" target="_blank">
          rcteenx
        </a>
      </p>
    </div>
  );
}
