import { useCronometroStore } from '@/store'

export const computarContagemRegressiva = () => {
    const tempoAtual = useCronometroStore.getState().tempoEmSegundos
    const pausarCronometro = useCronometroStore.getState().pausarCronometro

    if (tempoAtual > 0) {
        decrementarTempo()
    } else {
        pausarCronometro()
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
