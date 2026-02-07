import { RippleButton } from "./ui/ripple-button";
import { BorderBeam } from "./ui/border-beam";
import Link from "next/link";

const Cta = () => {
   const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative overflow-hidden rounded-lg">
      
        <RippleButton onClick={scrollToContact} rippleColor="#ADD8E6">Let's Connect</RippleButton>
  
      <BorderBeam colorFrom="#C9CCD6" colorTo="#C9CCD6" borderWidth={2} />
    </div>
  );
};

export default Cta;
