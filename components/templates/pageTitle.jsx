import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleStyles = cva(" ", {
  variants: {
    bgColor: {
      default: "bg-slate2",
      secondary: "bg-slate",
      danger: "bg-red-600",
    },
  },
  defaultVariants: {
    bgColor: "default",
  },
});

export default function PageTitle({ bgColor, children, ...props }) {
  return (
    <section id="pageBand" className={cn(titleStyles({ bgColor }))}>
      <div className="mx-auto container px-4 md:p-0">
        <h3 className="p-1 my-1 font-light text-white tracking-wider">
          {children}
        </h3>
      </div>
    </section>
  );
}
