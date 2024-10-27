export type Trait = 'volatility' | 'withdrawal' | 'compassion' | 'politeness' | 'industriousness' | 'orderliness' | 'enthusiasm' | 'assertiveness' | 'intellect' | 'openness'

export interface Question {
  id: number
  text: string
  options: Option[]  
}

export interface Option {
  text: string
  impacts: OptionImpact[]
}

export interface OptionImpact {
  trait: Trait
  value: number
}

export interface ProgrammingLanguageTrait {
  trait: Trait
  value: number
}

export interface ProgrammingLanguage {
  name: string
  traits: ProgrammingLanguageTrait[]
  insights: string[]
}
