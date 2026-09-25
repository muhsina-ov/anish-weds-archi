import { useCallback } from "react";
import FloralShower from "../components/FloralShower";
import IntroJourney from "../components/IntroJourney";
import LotusParallaxScene from "../components/LotusParallaxScene";
import Countdown from "../components/Countdown";
import MusicToggle from "../components/MusicToggle";
import ScrollProgress from "../components/ScrollProgress";
import InviteMessage from "../sections/InviteMessage";
import Couple from "../sections/Couple";
import Events from "../sections/Events";
import Venue from "../sections/Venue";
import Footer from "../sections/Footer";

export default function Home() {
  const onOpened = useCallback(() => {}, []);

  return (
    <main id="main-content" className="relative min-h-screen overflow-x-hidden bg-[#fdfbf7]">
      <a href="#invitation" className="skip-link">Skip to invitation</a>

      <ScrollProgress />
      <FloralShower />
      <LotusParallaxScene />
      <Countdown />
      <InviteMessage />
      <Couple />
      <Events />
      <Venue />
      <Footer />

      <MusicToggle />
      <IntroJourney onOpened={onOpened} />
    </main>
  );
}
