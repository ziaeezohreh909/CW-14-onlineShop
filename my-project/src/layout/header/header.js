import { El } from "@/utils/create-element";
import { Logo, SearchInput } from "@/components";

export function Header() {
  return El({
    element: "div",
    className: "flex justify-between items-center px-2 py-4",
    children: [
      El({
        element: "div",
        className: "flex gap-1",
        children: [Logo(), SearchInput()],
      }),
      El({
        element: "div",
        children: [
          El({
            element: "span",
            className: "icon-[mdi--cart-outline] w-[1.2rem] height-[1.2rem]",
          }),
        ],
      }),
    ],
  });
}
