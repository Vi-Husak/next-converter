export default function SectionTitle({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <h3 className="font-medium text-3xl text-dark-100">{children}</h3>;
}
