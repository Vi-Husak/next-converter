import Image from "next/image";

import Button from "@/components/Button/Button";

export default function Banner() {
  return (
    <div className="bg-cover bg-center h-[400px] bg-banner-bgimage flex justify-center items-center">
      <div className="w-[866px] m-auto flex justify-between items-center">
        <div>
          <p className="font-bold text-5xxl text-light">Чіп Чендж</p>
          <p className="font-medium text-accentLight mb-6">
            Обмінник валют - навчальний
          </p>
          <Button type="link" href="/converter" color="light">
            Конвертер валют
          </Button>
        </div>
        <Image
          src="/standard-mastercard-card.jpg"
          alt=""
          width={341}
          height={216}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
