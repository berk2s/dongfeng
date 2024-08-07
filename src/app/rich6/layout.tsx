import type { Metadata } from "next";
import Header from "@manhattanlabs/components/layout/header";
import { Libre_Franklin, Poppins } from "next/font/google";
import "@manhattanlabs/styles/main.scss";
import c from "@manhattanlabs/utils/class-name-helper";
import Style from "@manhattanlabs/styles/layout.scss";
import LayoutProvider from "@manhattanlabs/components/layout/context/layout-context";
import getModelsData from "@manhattanlabs/lib/get-models-data";
import data from "../../lib/models.json";

// If loading a variable font, you don't need to specify the font weight
const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dongfeng Rich6 - Arazinin Kaplanı",
  description: "Donnngfeng",
};

export default async function RootLayout(props: any) {
  const models = await getModelsData();

  return (
    <html lang="en">
      <body className={c(inter.className, Style.mainLayout)}>
        {/*<Header />*/}
        <LayoutProvider value={{ models: models, brands: data.brands }}>
          <main>{props.children}</main>
        </LayoutProvider>
      </body>
    </html>
  );
}
