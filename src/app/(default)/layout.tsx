import { Header } from "@/components/header/Header";


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ILayout extends Readonly<{ children: React.ReactNode }> { }

export default function Layout({ children }: ILayout ) {
  return (
    <>
        <Header />

        {children}
    </>
  );
}