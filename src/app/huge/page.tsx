import Landing from "@manhattanlabs/features/landing/landing";
import ModelDetail from "@manhattanlabs/features/model-detail/model-detail";
import { useContext } from "react";
import { LayoutContext } from "@manhattanlabs/components/layout/context/layout-context";
import ModelDetailRich6 from "@manhattanlabs/features/rich6/model-detail";
import ModelDetailHuge from "@manhattanlabs/features/huge/model-detail";

export default async function Home() {
  return (
    <>
      <ModelDetailHuge modelId={0} />
    </>
  );
}
