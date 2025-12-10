import styles from './styles.module.css'

interface BotaoModoProps {
    children: React.ReactNode
    modoBotao: {
        id: string
        nome: string
        frase: string[]
        tempoInicialEmSegundos: number
    }
}

export default function BotaoModo({ children, modoBotao }: BotaoModoProps) {
    return (
        <button
            className={`
                ${styles['cronometer-modes__button']}
                ${styles['cronometer-modes__button--active']}
            `}
        >
            {children}
        </button>
    )
}
