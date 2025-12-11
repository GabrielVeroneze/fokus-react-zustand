import { MODO_CRONOMETRO } from '@/store'
import type { ModoCronometro } from '@/types/ModoCronometro'
import BotaoModo from './BotaoModo'
import styles from './styles.module.css'

export default function BotoesModos() {
    const modos: ModoCronometro[] = [
        MODO_CRONOMETRO.FOCO,
        MODO_CRONOMETRO.DESCANSO_CURTO,
        MODO_CRONOMETRO.DESCANSO_LONGO,
    ]

    return (
        <ul className={styles['cronometer-modes']}>
            {modos.map((modo) => (
                <li key={modo.id}>
                    <BotaoModo modoBotao={modo}>{modo.nome}</BotaoModo>
                </li>
            ))}
        </ul>
    )
}
