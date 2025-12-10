import { getAllModels } from "@/app/lib/models"
import ModelsGrid from "../components/ModelGrid"

export default async function ModelsPage() {
    const models = await getAllModels()
    return <ModelsGrid title="3D Models" models={models}/>
}