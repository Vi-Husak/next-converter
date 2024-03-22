"use client";

import Button from "@/components/Button/Button";
import SectionTitle from "@/components/Heading/SectionTitle";
import { useConvertHistoryStore } from "@/stores/converter-store";
import ArrowSVG from "@/components/SVGIcons/ArrowSVG";

export default function ConverterHistory() {
  const convertHistoryArray = useConvertHistoryStore((state) => state.history);
  const clearHistory = useConvertHistoryStore((state) => state.clearHistory);

  const handleClearHistory = () => clearHistory();

  return (
    <>
      <div className="flex justify-between mb-8">
        <SectionTitle>Історія конвертації</SectionTitle>
        <Button type="button" onClick={handleClearHistory}>
          Очистити історію
        </Button>
      </div>
      {convertHistoryArray.length !== 0 ? (
        <ul className="grid grid-cols-2 gap-x-12 gap-y-4">
          {convertHistoryArray
            .slice(0, 10)
            .map(
              ({
                date,
                fromCurrency,
                fromAmount,
                toCurrency,
                toAmount,
                id,
              }) => (
                <li
                  key={id}
                  className="p-4 bg-white rounded text-lg leading-none flex gap-3 items-center"
                >
                  <span className="text-middlegrey ">
                    {date.split("-").reverse().join(".")}
                  </span>
                  <span className="font-medium text-primary text-xl leading-none">
                    {fromCurrency} {fromAmount}
                  </span>

                  <span className="font-medium text-primary text-xl leading-none">
                    {<ArrowSVG />}
                  </span>
                  <span className="font-medium text-primary text-xl leading-none">
                    {toCurrency} {toAmount}
                  </span>
                </li>
              )
            )}
        </ul>
      ) : (
        <div className="flex justify-center items-center min-h-12 text-middlegrey text-xl">
          У вас ще немає історії конвертацій
        </div>
      )}
    </>
  );
}
