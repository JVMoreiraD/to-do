import { Envelope, Lock } from "phosphor-react";
import { Button } from "../../components/Button/Button";
import { CheckBox } from "../../components/Checkbox/Checkbox";
import { Logo } from "../../components/Logo";
import { Text } from "../../components/Text/Text";
import { TextInput } from "../../components/TextInput/Input";
export function SignIn() {
    return (
        <div className='w-screen h-screen bg-gray-600 flex flex-col items-center justify-center '>
            <header className='flex flex-col items-center'>
                <Logo />
                <Text size='lg' className='text-gray-300 mt-2'>
                    Faça login e comece a usar!
                </Text>
            </header>
            <form className='flex flex-col items-center w-full mt-10 gap-4'>
                <label htmlFor='email' className='flex flex-col gap-3'>
                    <Text className='font-semibold'>
                        Endereço de Email:
                    </Text>
                    <TextInput.root>
                        <TextInput.icon>
                            <Envelope />
                        </TextInput.icon>
                        <TextInput.input id='email' placeholder='Digite seu Email' type={'email'} />
                    </TextInput.root>
                </label>
                <label htmlFor='password' className='flex flex-col gap-3'>
                    <Text className='font-semibold'>
                        Insira sua senha:
                    </Text>
                    <TextInput.root>
                        <TextInput.icon>
                            <Lock />
                        </TextInput.icon>
                        <TextInput.input id='password' placeholder='*******' type={'password'} />
                    </TextInput.root>
                </label>
                <label htmlFor='remember' className='flex gap-2'>
                    <CheckBox id='remember'></CheckBox>
                    <Text size='sm' className='text-gray-200'>Lembrar por 30 dias</Text>
                </label>

                <Button type='submit' className='mt-4 w-1/3 py-3 px-4'>
                    Logar
                </Button>
            </form>

            <footer className='flex flex-col items-center gap-4 mt-8'>
                <Text asChild size='sm'>
                    <a className='text-gray-300 underline hover:text-gray-200 cursor-pointer '>Esqueceu a senha ?</a>
                </Text>
                <Text asChild size='sm'>
                    <a className='text-gray-300 underline hover:text-gray-200 cursor-pointer '>Não possui conta ? Crie agora!</a>
                </Text>
            </footer>
        </div>
    )
}