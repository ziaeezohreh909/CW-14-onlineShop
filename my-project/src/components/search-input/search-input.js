import { El } from "@/utils/create-element";

export function SearchInput() {
  return El({
    element: "input",
    type: "search",
    className: "block bg-gray-100 rounded-md items-center px-2 text-sm",
    placeholder: "جستجو",
  });
}
