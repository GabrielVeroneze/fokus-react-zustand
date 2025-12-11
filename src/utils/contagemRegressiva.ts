import { useCronometroStore } from '@/store'

export const computarContagemRegressiva = () => {
    const tempoAtual = useCronometroStore.getState().tempoEmSegundos

    if (tempoAtual > 0) {
        // diminuir o tempo
    } else {
        // pausar e redefinir
    }
}
