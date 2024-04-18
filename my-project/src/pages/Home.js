import { Layout } from "@/layout/layout";
import Home from "@/templates/Home";
import { El } from "@/utils/create-element";

export default function HomePage() {
  return El({
    element: "div",
    children: [Layout(Home)],
  });
}
