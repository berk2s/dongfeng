import data from "./models.json";
import { Model } from "@manhattanlabs/lib/types";
const getModelsData = async (): Promise<Model[]> => {
  return data.models as any;
};

export default getModelsData;
