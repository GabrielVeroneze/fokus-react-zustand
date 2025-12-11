export type Modo = 'FOCO' | 'DESCANSO_CURTO' | 'DESCANSO_LONGO'

export interface ModoCronometro {
    id: string
    nome: string
    frase: string[]
    tempoInicialEmSegundos: number
}
