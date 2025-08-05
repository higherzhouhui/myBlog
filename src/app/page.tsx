import HomeComp from "@/components/Home";
import SEO from "@/components/SEO";
import { Metadata } from "next";
import { generateSEOMetadata } from "@/utils/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "风中追风的BLOG！",
  description: "致力于分享互联网技术、人生、生活、推荐以及求职机会",
  keywords: ["web", "html", "css", "nextjs", "nuxtjs", "telegram mini app", "javascript", "vue", "前端", "react", "博客", "技术分享", "生活记录", "etherjs", "web3js", "uniapp", "nodejs"],
});

export default function Home() {
  return (
    <>
      <SEO 
        type="website" 
        data={{
          name: "风中追风的博客",
          description: "致力于分享互联网技术、人生、生活、推荐以及求职机会"
        }} 
      />
      <HomeComp />
    </>
  );
}
