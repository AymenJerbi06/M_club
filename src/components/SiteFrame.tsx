import GGChatBubble from "@/components/GGChatBubble";
import GGCookieBar from "@/components/GGCookieBar";
import GGFooter from "@/components/GGFooter";
import GGNav from "@/components/GGNav";
import ScrollReveal from "@/components/ScrollReveal";

type InnerPageStyle = "spa" | "classes" | "coaches" | "kids" | "sports" | "cantine" | "events" | "membership" | "facilities" | "about" | "location" | "contact";

export default function SiteFrame({ children, innerPage = false, pageStyle }: {
  children: React.ReactNode;
  innerPage?: boolean;
  pageStyle?: InnerPageStyle;
}) {
  return (
    <>
      <GGNav />
      <ScrollReveal />
      <main className={`site-main${innerPage ? ` club-page${pageStyle ? ` club-page--${pageStyle}` : ""}` : ""}`}>{children}</main>
      <GGFooter />
      <GGChatBubble />
      <GGCookieBar />
    </>
  );
}
