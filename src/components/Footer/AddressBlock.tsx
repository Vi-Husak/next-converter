import SmallText from "./SmallText";

export default function AddressBlock() {
  return (
    <div>
      <address className="not-italic">
        <SmallText>04128, м.Київ, вул. Хрещатик, 19</SmallText>
      </address>
      <SmallText>Ліцензія НБУ №156</SmallText>
      <SmallText>Ⓒ ПАТ ЧіпЧендж, 2019-2023</SmallText>
    </div>
  );
}
