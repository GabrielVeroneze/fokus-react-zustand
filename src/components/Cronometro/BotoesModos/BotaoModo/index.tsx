import { useCronometroStore } from '@/store'
import type { ModoCronometro } from '@/types/ModoCronometro'
import styles from './styles.module.css'

interface BotaoModoProps {
    children: React.ReactNode
    modoBotao: ModoCronometro
}

export default function BotaoModo({ children, modoBotao }: BotaoModoProps) {
    const modoCronometro = useCronometroStore((state) => state.modoCronometro)
    const setModoCronometro = useCronometroStore(
        (state) => state.setModoCronometro,
    )

    const ativo = modoBotao.id === modoCronometro.id

    const handleClick = () => {
        setModoCronometro(modoBotao)
    }

    return (
        <button
            className={`
                ${styles['cronometer-modes__button']}
                ${ativo ? styles['cronometer-modes__button--active'] : ''}
            `}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}
