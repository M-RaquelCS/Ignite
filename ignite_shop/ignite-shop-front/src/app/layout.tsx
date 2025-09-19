import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { getCssText } from "./styles";
import { globalStyles } from "./styles/global";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ignite Shop",
  description: "Generated on Ignite module 04",
};

globalStyles();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/** biome-ignore lint/correctness/useUniqueElementIds: <explanation> */}
        {/** biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body className={`${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
