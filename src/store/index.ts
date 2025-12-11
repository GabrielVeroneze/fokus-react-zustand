import { create } from 'zustand'
import { computarContagemRegressiva } from '@/utils/contagemRegressiva'
import type { Modo, ModoCronometro } from '@/types/ModoCronometro'

export const MODO_CRONOMETRO: Record<Modo, ModoCronometro> = {
    FOCO: {
        id: 'foco',
        nome: 'Foco',
        frase: ['Otimize sua produtividade,', 'mergulhe no que importa.'],
        tempoInicialEmSegundos: 30,
    },
    DESCANSO_CURTO: {
        id: 'descanso-curto',
        nome: 'Descanso curto',
        frase: ['Que tal dar uma respirada?', 'Faça uma pausa curta!'],
        tempoInicialEmSegundos: 5,
    },
    DESCANSO_LONGO: {
        id: 'descanso-longo',
        nome: 'Descanso longo',
        frase: ['Hora de voltar à superfície.', 'Faça uma pausa longa.'],
        tempoInicialEmSegundos: 15,
    },
}

interface CronometroState {
    modoCronometro: ModoCronometro
    tempoEmSegundos: number
    setModoCronometro: (novoModo: ModoCronometro) => void
    intervaloId: number | null
    iniciarCronometro: () => void
}

export const useCronometroStore = create<CronometroState>((set) => ({
    modoCronometro: MODO_CRONOMETRO.FOCO,
    tempoEmSegundos: MODO_CRONOMETRO.FOCO.tempoInicialEmSegundos,
    setModoCronometro: (novoModo) => {
        set({
            modoCronometro: novoModo,
            tempoEmSegundos: novoModo.tempoInicialEmSegundos,
        })
    },
    intervaloId: null,
    iniciarCronometro: () => {
        const novoId = setInterval(computarContagemRegressiva, 1000)
        set({ intervaloId: novoId })
    },
}))
