import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const imageStyles = cva(
  "mx-auto h-48 max-w-xl relative bg-no-repeat bg-center bg-gray-500 rounded-2xl shadow-2xl ",
  {
    variants: {
      bgImage: {
        default: "bg-rMerhaba",
        fMerhaba: "bg-fMerhaba",
        tMerhaba: "bg-tMerhaba",
        kMerhaba: "bg-kMerhaba",
      },
    },
    defaultVariants: {
      bgImage: "default",
    },
  }
);
const h1Styles = cva("absolute -bottom-4 left-8 font-light ", {
  variants: {
    h1Color: {
      default: "text-gray-800",
      white: "text-white",
    },
  },
  defaultVariants: {
    h1Color: "default",
  },
});

export default function PageTitle({ bgImage, h1Color, children, ...props }) {
  return (
    <section className="mx-auto container-p my-8">
      <div className={cn(imageStyles({ bgImage }))}>
        <h1 className={cn(h1Styles({ h1Color }))}>{children}</h1>
      </div>
    </section>
  );
}
