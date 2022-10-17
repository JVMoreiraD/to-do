import { Slot } from "@radix-ui/react-slot"
import { InputHTMLAttributes, ReactNode } from "react"

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
            className="flex items-center h-14 w-[46rem] py-4 px-4 rounded bg-gray-500 focus-within:ring-2 ring-purple-dark"
        >
            {children}
        </div>
    )
}
export function TextInputWrapperButton({ children }: ITextInputRootProps) {
    return (
        <div
            className="flex gap-2 -mt-7 m-0 mr-auto ml-auto max-w-[46rem]"
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
        <input className='bg-gray-500 flex-1 text-gray-100 text-md placeholder:text-gray-300 font-bold outline-none'
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