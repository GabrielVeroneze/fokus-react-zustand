import { useCronometroStore } from '@/store'
import audioTempoFinalizadoSom from '@/assets/sons/beep.mp3'

export const computarContagemRegressiva = () => {
    const tempoAtual = useCronometroStore.getState().tempoEmSegundos
    const pausarCronometro = useCronometroStore.getState().pausarCronometro
    const audioTempoFinalizado = new Audio(audioTempoFinalizadoSom)

    if (tempoAtual > 0) {
        decrementarTempo()
    } else {
        pausarCronometro()
        redefinirTempo()
        audioTempoFinalizado.play()
    }
}

const decrementarTempo = () => {
    useCronometroStore.setState((state) => ({
        tempoEmSegundos: state.tempoEmSegundos - 1,
    }))
}

const redefinirTempo = () => {
    useCronometroStore.setState((state) => ({
        tempoEmSegundos: state.modoCronometro.tempoInicialEmSegundos,
    }))
}
