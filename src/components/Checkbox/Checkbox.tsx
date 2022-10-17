import * as CheckboxRadix from "@radix-ui/react-checkbox"
import { Check } from "phosphor-react"
export interface ICheckBoxProps extends CheckboxRadix.CheckboxProps {

}
export function CheckBox(props: ICheckBoxProps) {
    return (
        <CheckboxRadix.Root
            // className="w-4 h-4 bg-gray-800 rounded-full ring-2 ring-blue-normal hover:bg-blue-dark hover:ring-blue-dark hover:bg-opacity-25 "
            className="w-4 h-4 bg-gray-800 rounded-full ring-2 ring-blue-normal hover:bg-blue-dark hover:ring-blue-dark hover:bg-opacity-25 checked:bg-purple-dark checked:ring-offset-purple-dark"
            {...props}
        >
            <CheckboxRadix.CheckboxIndicator asChild>
                <Check weight="bold" className="h-4 w-4 text-gray-100 bg-purple-dark rounded-full ring-purple-dark ring-2" />
            </CheckboxRadix.CheckboxIndicator>
        </CheckboxRadix.Root>
    )
}