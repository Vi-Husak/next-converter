import Image from "next/image";

import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <section className="bg-white">
      <div className="max-w-[866px] m-auto py-28 flex justify-between gap-12 items-center">
        <div className="flex flex-col gap-7 items-start">
          <h2 className="font-bold text-4xl text-dark">Конвертер валют</h2>
          <p className="text-primary text-xl">
            Переважна діяльність банківської групи за останні чотири звітні
            квартали становить 50 і більше відсотків.
          </p>
          <Button type="link" href="/converter">
            Конвертувати валюту
          </Button>
        </div>
        <Image
          src="/img01.png"
          width={436}
          height={314}
          alt=""
          className="rounded"
        />
      </div>
    </section>
  );
}
