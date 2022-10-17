import { Slot } from "@radix-ui/react-slot"
import { PlusCircle } from "phosphor-react"
import { InputHTMLAttributes, ReactNode } from "react"
import { Button } from "../Button/Button"

export interface ITextInputRootProps {
    children: ReactNode
}
export interface ITextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
}
export interface ITextInputIconProps {
    children: ReactNode
}

export function TextInputRoot({ children }: ITextInputRootProps) {
    return (
        <div
            className="flex items-center  gap-2 h-14 w-[46rem] py-4 px-4 rounded bg-gray-500 focus-within:ring-2 ring-purple-dark"
        >
            {children}
        </div>
    )
}
export function TextInputWrapperButton({ children }: ITextInputRootProps) {
    return (
        <div
            className="gap-2 flex mr-auto ml-auto top-40 items-center left-[32rem] p-0 absolute"
        >
            {children}
        </div>
    )
}

function TextInputIcon({ children }: ITextInputIconProps) {
    return (
        <Slot className="w-6 h-6 text-gray-400">
            {children}
        </Slot>
    )
}

function TextInputInput(props: ITextInputInputProps) {
    return (
        <input className='bg-gray-500 flex-1 text-gray-400 text-md placeholder:text-gray-400 font-bold outline-none'
            {...props}
        />

    )
}

export const TextInput = {
    root: TextInputRoot,
    input: TextInputInput,
    icon: TextInputIcon,
    button: TextInputWrapperButton,
}