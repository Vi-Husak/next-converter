import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="grow">
        <Banner />
        {children}
      </main>
      <Footer />
    </>
  );
}
