import { ClipboardText } from "phosphor-react";
import { PageContentContainer } from "./styles";
export function PageContent() {
    return (
        <PageContentContainer>
            <div>
                <header>
                    <p className="createdShores">
                        Tarefas Criadas
                        <span>0</span>
                    </p>
                    <p className="finishedShores">
                        Concluídas
                        <span>0</span>
                    </p>
                </header>
            </div>
            <div>
                <ClipboardText size={32} />
                <p>
                    Você ainda não tem tarefas cadastradas
                </p>
                <span>
                    Crie tarefas e organize seus itens a fazer
                </span>
            </div>
        </PageContentContainer>
    )
}