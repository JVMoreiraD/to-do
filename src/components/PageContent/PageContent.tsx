import { ClipboardText } from "phosphor-react";
import { Text } from "../Text/Text";
export function PageContent() {
    return (
        <div className="max-w-[46rem] mt-16 left-10 m-0 mr-auto ml-auto">
            <header className="flex justify-between">
                <Text asChild size="md" className="text-blue-normal font-bold flex items-center gap-2">
                    <p>
                        Tarefas Criadas
                        <Text className="bg-gray-400 rounded-full text-gray-200 py-0 px-2">0</Text>
                    </p>
                </Text>
                <Text asChild size="md" className="text-purple-normal font-bold flex items-center gap-2">
                    <p>
                        Concluídas
                        <Text className="bg-gray-400 rounded-full text-gray-200 py-0 px-2">0</Text>
                    </p>
                </Text>
            </header>
            <div className="flex flex-col mt-6 rounded-lg border-t-2 border-t-gray-400 text-gray-300 text-center items-center p-16">
                <ClipboardText size={56} />
                <Text size="lg" className="font-bold text-gray-300 mt-4">
                    Você ainda não tem tarefas cadastradas
                </Text>
                <Text size="lg" className="text-gray-300">
                    Crie tarefas e organize seus itens a fazer
                </Text>
            </div>
        </div>
    )
}