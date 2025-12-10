import { useEffect, useState } from 'react'
import musicaSom from '@/assets/sons/luna-rise-part-one.mp3'
import styles from './styles.module.css'

export default function SwitchMusica() {
    const [musica] = useState(new Audio(musicaSom))

    function alternarMusica() {
        if (musica.paused) {
            musica.play()
        } else {
            musica.pause()
        }
    }

    useEffect(() => {
        return () => musica.pause()
    }, [musica])

    return (
        <label className={styles['toggle']}>
            <input
                onChange={alternarMusica}
                className={styles['toggle__checkbox']}
                type="checkbox"
                id="alternar-musica"
            />
            <div className={styles['toggle__switch']}></div>
            <label className={styles['toggle__span']} htmlFor="alternar-musica">
                Música
            </label>
        </label>
    )
}
