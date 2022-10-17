import { Trash } from "phosphor-react";
import { CheckBox } from "../Checkbox/Checkbox";
import { Text } from "../Text/Text";

interface ITaskProps {
    textContent: string;
}

export function Task({ textContent }: ITaskProps) {

    return (
        <div className="flex items-start justify-between bg-gray-500 border-solid border-gray-400 rounded-lg ">
            <div className="flex gap-3 p-4">
                <div>
                    <CheckBox />
                </div>
                <Text><label>{textContent}</label></Text>
            </div>
            <button className="flex mt-4 mr-4">
                <Trash size={16} className="text-gray-300 hover:text-danger"></Trash>
            </button>
        </div>
    )
}