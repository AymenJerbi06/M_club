import GGHero from "@/components/GGHero";
import GGFlexDeal from "@/components/GGFlexDeal";
import HPImpressions from "@/components/HPImpressions";

import HPJoinNow from "@/components/HPJoinNow";
import HPSpaHammam from "@/components/HPSpaHammam";
import HomeExplorer from "@/components/HomeExplorer";
import SiteFrame from "@/components/SiteFrame";

export default function Home() {
  return (
    <SiteFrame>
        <GGHero />
        <HomeExplorer />
        <GGFlexDeal />
        <HPJoinNow />

        <HPSpaHammam />
        <HPImpressions />
    </SiteFrame>
  );
}
