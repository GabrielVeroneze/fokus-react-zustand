import { useCronometroStore } from '@/store'

export const computarContagemRegressiva = () => {
    const tempoAtual = useCronometroStore.getState().tempoEmSegundos

    if (tempoAtual > 0) {
        decrementarTempo()
    } else {
        redefinirTempo()
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
