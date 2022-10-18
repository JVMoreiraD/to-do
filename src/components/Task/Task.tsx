import { Trash } from "phosphor-react";
import { useState } from "react";
import { CheckBox } from "../Checkbox/Checkbox";
import { Text } from "../Text/Text";

interface ITaskProps {
    textContent: string;
    taskId: string;
    onDeleteTask: (id: string) => void;
    onCheckTask: (id: string, status: boolean) => void
}

export function Task({ textContent, onDeleteTask, onCheckTask, taskId }: ITaskProps) {
    const [isTaskChecked, setTaskChecked] = useState(false)
    function handleCheckTask() {
        setTaskChecked(prevState => {
            onCheckTask(taskId, !prevState)
            return !prevState;
        })
    }
    return (
        <div className="flex items-start justify-between bg-gray-500 border-solid border-gray-400 rounded-lg ">
            <div className="flex gap-3 p-4">
                <div>
                    <CheckBox onCheckedChange={handleCheckTask} />
                </div>
                <Text className={
                    isTaskChecked ? "text-gray-300 line-through" : ""
                }>
                    <label>
                        {textContent}
                    </label>
                </Text>
            </div>
            <button className="flex mt-4 mr-4" onClick={() => onDeleteTask(taskId)}>
                <Trash size={20} className="text-gray-300 hover:text-danger"></Trash>
            </button>
        </div>

    )
}