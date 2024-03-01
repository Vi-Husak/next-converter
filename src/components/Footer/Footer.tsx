import Logo from "@/components/Logo/Logo";

import AddressBlock from "./AddressBlock";
import Navigation from "./Navigation";
import ContactPhoneItem from "./ContactPhoneItem";
import Socials from "./Socials";

import SmartphoneSVG from "@/components/SVGIcons/SmartphoneSVG";
import PhoneSVG from "@/components/SVGIcons/PhoneSVG";

export default function Footer() {
  return (
    <footer className="bg-greyBg px-25 py-14 flex justify-between items-start gap-x-10">
      <div className="flex flex-col gap-y-4">
        <Logo />
        <AddressBlock />
      </div>
      <Navigation />
      <ContactPhoneItem
        phoneNumber="3773"
        Icon={SmartphoneSVG}
        textNode="Цілодобова підтримка"
      />
      <ContactPhoneItem
        phoneNumber="8 800 111 22 33"
        Icon={PhoneSVG}
        textNode={
          <>
            Безкоштовно для дзвінків
            <br />в межах України
          </>
        }
      />
      <Socials />
    </footer>
  );
}
