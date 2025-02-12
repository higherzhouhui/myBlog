import HomeComp from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "风中追风的BLOG！",
  description: "致力于分享互联网技术、人生、生活、推荐以及求职机会",
  keywords:
    "web,html, css, nextjs, nustjs, telegram mini app,javascript;vue;前端;react,javascript;博客;技术分享;生活记录,etherjs,wb3js, uniapp, nodejs",
};

export default function Home() {
  return <HomeComp />;
}
