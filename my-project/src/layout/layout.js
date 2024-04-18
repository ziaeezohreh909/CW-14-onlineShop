import { El } from "@/utils/create-element";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

export function Layout(main) {
  return El({
    element: "div",
    children: [Header(), main(), Footer()],
  });
}
