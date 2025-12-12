import { useCronometroStore } from '@/store'
import logoImg from '@/assets/imgs/logo.png'
import focoImg from '@/assets/imgs/foco.png'
import descancoCurtoImg from '@/assets/imgs/descanso-curto.png'
import descancoLongoImg from '@/assets/imgs/descanso-longo.png'
import styles from './styles.module.css'

export default function Cabecalho() {
    const modoCronometro = useCronometroStore((state) => state.modoCronometro)

    const [primeiroTexto, segundoTexto] = modoCronometro.frase

    const renderizarImagem = () => {
        switch (modoCronometro.id) {
            case 'foco':
                return focoImg
            case 'descanso-curto':
                return descancoCurtoImg
            case 'descanso-longo':
                return descancoLongoImg
            default:
                return focoImg
        }
    }

    return (
        <header className="header">
            <figure className={styles['header__logo-figure']}>
                <img src={logoImg} alt="Logotipo do Fokus" />
            </figure>
            <section className={styles['header__section-banner-container']}>
                <h1 className={styles['header__title']}>
                    {primeiroTexto}{' '}
                    <strong className={styles['header__title-strong']}>
                        {segundoTexto}
                    </strong>
                </h1>
                <figure className={styles['header__image-figure']}>
                    <img
                        className={styles['header__image']}
                        src={renderizarImagem()}
                        alt={`Ilustração do modo ${modoCronometro.nome}`}
                    />
                </figure>
            </section>
        </header>
    )
}
