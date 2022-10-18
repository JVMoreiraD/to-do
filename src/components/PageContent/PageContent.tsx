import { ClipboardText, Icon } from "phosphor-react";
import { useState } from "react";
import { ITask } from "../../pages/Home/Home";
import { Task } from "../Task/Task";
import { Text } from "../Text/Text";

interface IContentProps {
    tasks: ITask[];
    onDeleteTask: (id: string) => void;
    onCheckTask: (id: string, status: boolean) => void;
}

export function PageContent({ tasks, onDeleteTask, onCheckTask }: IContentProps) {
    const tasksLength = tasks.length;
    const numberOfCompletedTasks = tasks.reduce((count, task) => {
        if (task.isCompleted) {
            count++;
        }

        return count;
    }, 0);

    console.log(numberOfCompletedTasks)

    return (
        <div className="max-w-[46rem] mt-16 m-0 mr-auto ml-auto">
            <header className="flex justify-between">
                <Text asChild size="md" className="text-blue-normal font-bold flex items-center gap-2">
                    <p>
                        Tarefas Criadas
                        <Text className="bg-gray-400 rounded-full text-gray-200 py-0 px-2">
                            {tasksLength}
                        </Text>
                    </p>
                </Text>
                <Text asChild size="md" className="text-purple-normal font-bold flex items-center gap-2">
                    <p>
                        Concluídas
                        <Text className="bg-gray-400 rounded-full text-gray-200 py-0 px-2">
                            {`${numberOfCompletedTasks} de ${tasksLength}`}
                        </Text>
                    </p>
                </Text>
            </header>
            {tasksLength === 0 ? (
                <div className="flex flex-col mt-6 rounded-lg border-t-2 border-t-gray-400 text-gray-300 text-center items-center p-16">
                    <ClipboardText size={56} />
                    <Text size="lg" className="font-bold text-gray-300 mt-4">
                        Você ainda não tem tarefas cadastradas
                    </Text>
                    <Text size="lg" className="text-gray-300">
                        Crie tarefas e organize seus itens a fazer
                    </Text>
                </div>
            ) : (
                <div className="flex flex-col mt-6 gap-3">
                    {tasks.map(task => (
                        <Task key={task.id} taskId={task.id} textContent={task.description} onDeleteTask={onDeleteTask} onCheckTask={onCheckTask} />
                    ))}
                </div>
            )}
        </div>
    )
}