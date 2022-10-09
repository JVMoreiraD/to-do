import { PlusCircle } from "phosphor-react"
import { NewTaskContainer } from "./styles"
export function NewTask() {
    return (
        <NewTaskContainer>
            <form>
                <textarea placeholder="Adicione uma nova tarefa" />
            </form>
            <button>Criar <PlusCircle size={20} /></button>
        </NewTaskContainer>
    )
}