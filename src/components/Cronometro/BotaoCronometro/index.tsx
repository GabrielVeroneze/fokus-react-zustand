import { useCronometroStore } from '@/store'
import play_arrowImg from '@/assets/imgs/play_arrow.png'
import pauseImg from '@/assets/imgs/pause.png'
import audioPlaySom from '@/assets/sons/play.wav'
import audioPauseSom from '@/assets/sons/pause.mp3'
import styles from './styles.module.css'

export default function BotaoCronometro() {
    const intervaloId = useCronometroStore((state) => state.intervaloId)
    const iniciarCronometro = useCronometroStore(
        (state) => state.iniciarCronometro,
    )
    const pausarCronometro = useCronometroStore(
        (state) => state.pausarCronometro,
    )

    const audioPlay = new Audio(audioPlaySom)
    const audioPause = new Audio(audioPauseSom)

    const textoBotao = intervaloId ? 'Pausar' : 'Começar'
    const iconeBotao = intervaloId ? pauseImg : play_arrowImg

    const IniciarOuPausar = () => {
        if (!intervaloId) {
            iniciarCronometro()
            audioPlay.play()
        } else {
            pausarCronometro()
            audioPause.play()
        }
    }

    return (
        <div className={styles['cronometer__primary-button-wrapper']}>
            <button
                className={styles['cronometer__primary-button']}
                onClick={IniciarOuPausar}
            >
                <img
                    className={styles['cronometer__primary-button-icon']}
                    src={iconeBotao}
                    alt={intervaloId ? 'Ícone de pausa' : 'Ícone de play'}
                />
                <span>{textoBotao}</span>
            </button>
        </div>
    )
}
