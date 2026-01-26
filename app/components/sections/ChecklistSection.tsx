import { CircleCheck } from "lucide-react"

const ChecklistSection = () => {
    return (
    <div className="mt-4">
        <h4 className="text-xl font-bold">Checklist de Aplicação</h4>
        <ul className="flex flex-col gap-2 my-4 text-neutral-400">
            <li className="items-center flex flex-row gap-2">
                <CircleCheck size={16}/>
                <p>Aplicar quando...</p>
            </li>
            <li className="items-center flex flex-row gap-2">
                <CircleCheck size={16}/>
                <p>Aplicar quando...</p>
            </li>
            <li className="items-center flex flex-row gap-2">
                <CircleCheck size={16}/>
                <p>Aplicar quando...</p>
            </li>
            <li className="items-center flex flex-row gap-2">
                <CircleCheck size={16}/>
                <p>Aplicar quando...</p>
            </li>
        </ul>
    </div>
  )
}

export default ChecklistSection