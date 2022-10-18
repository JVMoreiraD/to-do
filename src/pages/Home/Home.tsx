import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { PageContent } from "../../components/PageContent/PageContent";
import { TextInput } from "../../components/TextInput/Input";

export interface ITask {
    id: string;
    description: string;
    isCompleted: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<ITask[]>([]);

    const [newTaskInput, setNewTaskInput] = useState('');

    function handleInputTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskInput(event.target.value)
    }

    function handleCreateNewTask() {
        if (!(newTaskInput.length === 0)) {
            const newTask: ITask = {
                id: new Date().getUTCMilliseconds().toString(),
                description: newTaskInput,
                isCompleted: false
            }
            setTasks([...tasks, newTask])
        }
    }

    function onDeleteTask(id: string) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    function onCheckTask(id: string, status: boolean) {
        const newTaskList = [...tasks]
        newTaskList.map(task => {
            if (task.id === id) {
                task.isCompleted = status
            }
        })
        setTasks(newTaskList)
    }

    return (
        <div className='w-screen min-h-screen bg-gray-600'>
            <Header />
            <TextInput.button>
                <TextInput.root>
                    <TextInput.input placeholder='Adicione uma nova tarefa' value={newTaskInput} onChange={handleInputTaskChange} />
                </TextInput.root>
                <Button onClick={handleCreateNewTask}>
                    Criar
                    <PlusCircle size={20} />
                </Button>
            </TextInput.button>
            <PageContent tasks={tasks} onDeleteTask={onDeleteTask} onCheckTask={onCheckTask} />
        </div>
    )
}