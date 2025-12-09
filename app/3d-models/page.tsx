import { getAllModels } from "@/app/lib/models"
import type { Model } from "../types"
import ModelCard from "../components/ModelCard"

export default async function ModelsPage() {
    const models = await getAllModels()
    return (
        <div>
            <h1>All Models</h1>
            <div>
                {models.map((model: Model) => (
                    <ModelCard key={model.id} model={model} />
                ))}
            </div>
        </div>
    )
}