import Landing from "@manhattanlabs/features/landing/landing";
import ModelDetail from "@manhattanlabs/features/model-detail/model-detail";
import { useContext } from "react";
import { LayoutContext } from "@manhattanlabs/components/layout/context/layout-context";
import ModelDetailRich6 from "@manhattanlabs/features/rich6/model-detail";

export default async function Home() {
  return (
    <>
      <ModelDetailRich6 modelId={0} />
    </>
  );
}
