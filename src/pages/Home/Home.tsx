import { PlusCircle } from "phosphor-react";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { PageContent } from "../../components/PageContent/PageContent";
import { TextInput } from "../../components/TextInput/Input";

export function Home() {
    return (
        <div className='w-screen h-screen bg-gray-600'>
            <Header />
            <TextInput.button>
                <TextInput.root>
                    <TextInput.input placeholder='Adicione uma nova tarefa'></TextInput.input>
                </TextInput.root>
                <Button>Criar <PlusCircle size={20} /></Button>
            </TextInput.button>
            <PageContent />
        </div>
    )
}