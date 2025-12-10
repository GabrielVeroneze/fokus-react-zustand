import play_arrowImg from '@/assets/imgs/play_arrow.png'
import pauseImg from '@/assets/imgs/pause.png'
import audioPlaySom from '@/assets/sons/play.wav'
import audioPauseSom from '@/assets/sons/pause.mp3'
import styles from './styles.module.css'

export default function BotaoCronometro() {
    return (
        <div className={styles['cronometer__primary-button-wrapper']}>
            <button className={styles['cronometer__primary-button']}>
                <img
                    className={styles['cronometer__primary-button-icon']}
                    src={play_arrowImg}
                    alt=""
                />
                <span>Começar</span>
            </button>
        </div>
    )
}
