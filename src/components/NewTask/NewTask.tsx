import styles from "./NewTask.module.css"
export function NewTask() {
    return (
        <div className={styles.newTask}>
            <form>
                <textarea placeholder="Adicione uma nova tarefa" />
            </form>
            <button>Criar</button>
        </div>
    )
}