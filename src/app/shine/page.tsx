import Landing from "@manhattanlabs/features/landing/landing";
import ModelDetail from "@manhattanlabs/features/model-detail/model-detail";
import { useContext } from "react";
import { LayoutContext } from "@manhattanlabs/components/layout/context/layout-context";

export default async function Home() {
  return (
    <>
      <ModelDetail modelId={0} />
    </>
  );
}
