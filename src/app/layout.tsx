import type { Metadata } from "next";
import Header from "@manhattanlabs/components/layout/header";
import { Libre_Franklin, Poppins } from "next/font/google";
import "@manhattanlabs/styles/main.scss";
import c from "@manhattanlabs/utils/class-name-helper";
import Style from "@manhattanlabs/styles/layout.scss";
import LayoutProvider from "@manhattanlabs/components/layout/context/layout-context";
import getModelsData from "@manhattanlabs/lib/get-models-data";
import data from "../lib/models.json";

// If loading a variable font, you don't need to specify the font weight
const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dongfeng Türkiye Resmi Sayfası",
  description: "Donngfeng",
};

export default async function RootLayout(props: any) {
  const models = await getModelsData();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/cropped-fvcn-32x32.png" sizes="32x32" />
        <meta
          meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={c(inter.className, Style.mainLayout)}>
        {/*<Header />*/}
        <LayoutProvider value={{ models: models, brands: data.brands }}>
          <main>{props.children}</main>
        </LayoutProvider>
      </body>
    </html>
  );
}
