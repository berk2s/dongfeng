import type { Metadata } from "next";
import Header from "@manhattanlabs/components/layout/header";
import { Libre_Franklin, Poppins } from "next/font/google";
import "@manhattanlabs/styles/main.scss";
import c from "@manhattanlabs/utils/class-name-helper";
import Style from "@manhattanlabs/styles/layout.scss";

// If loading a variable font, you don't need to specify the font weight
const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dongfeng",
  description: "Donnngfeng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={c(inter.className, Style.mainLayout)}>
        {/*<Header />*/}

        <main>{children}</main>
      </body>
    </html>
  );
}
