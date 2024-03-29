import Image from "next/image";

import Button from "@/components/Button/Button";
import SubTitle from "@/components/Heading/SubTitle";

export default function Home() {
  return (
    <section className="bg-white">
      <div className="max-w-[866px] m-auto py-28 flex justify-between gap-12 items-center">
        <div className="flex flex-col gap-7 items-start">
          <SubTitle>Конвертер валют</SubTitle>
          <p className="text-primary text-xl">
            Переважна діяльність банківської групи за останні чотири звітні
            квартали становить 50 і більше відсотків.
          </p>
          <Button type="link" href="/converter">
            Конвертувати валюту
          </Button>
        </div>
        <Image
          src="/img/img01.png"
          width={436}
          height={314}
          alt=""
          className="rounded"
        />
      </div>
    </section>
  );
}
