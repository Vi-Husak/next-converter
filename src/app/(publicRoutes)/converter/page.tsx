import SubTitle from "@/components/Heading/SubTitle";
import ConverterForm from "./ConverterForm";
import ConverterHistory from "./ConverterHistory";

export default function Converter() {
  return (
    <>
      <section className="bg-greyBg py-20">
        <div className="max-w-[962px] m-auto py-12 px-16 bg-white">
          <SubTitle className="mb-16">Конвертер валют</SubTitle>
          <ConverterForm />
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-[962px] m-auto py-12 px-16 bg-greyBg">
          <ConverterHistory />
        </div>
      </section>
    </>
  );
}
