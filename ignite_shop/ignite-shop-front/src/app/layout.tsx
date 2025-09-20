import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Header } from "@/components/Header";
import { Container } from "@/styles/pages/app";
import { getCssText } from "../styles";
import { globalStyles } from "../styles/global";
import { ReactQueryProvider } from "./providers/ReactQueryProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ignite Shop",
  description: "Generated on Ignite module 04",
};
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  globalStyles();
  return (
    <html lang="en">
      <head>
        {/** biome-ignore lint/correctness/useUniqueElementIds: <explanation> */}
        {/** biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <Container className={`${roboto.variable}`}>
        <ReactQueryProvider>
          <Header />
          {children}
        </ReactQueryProvider>
      </Container>
    </html>
  );
}
