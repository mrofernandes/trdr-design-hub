'use client'

import { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import { generatePrompt } from './promptTemplate'
import styles from './PromptWizard.module.css'

export interface WizardState {
  step: 1 | 2 | 3 | 4
  projectType: string
  projectTypeLabel: string
  context: string
  contextLabel: string
  selectedComponents: string[]
  generatedPrompt: string
}

const initial: WizardState = {
  step: 1,
  projectType: '',
  projectTypeLabel: '',
  context: '',
  contextLabel: '',
  selectedComponents: [],
  generatedPrompt: '',
}

const stepLabels = ['Tipo de projeto', 'Contexto', 'Componentes', 'Prompt gerado']

export default function PromptWizard() {
  const [state, setState] = useState<WizardState>(initial)

  function selectProjectType(type: string, label: string) {
    setState(s => ({ ...s, projectType: type, projectTypeLabel: label, step: 2 }))
  }

  function selectContext(ctx: string, label: string) {
    setState(s => ({ ...s, context: ctx, contextLabel: label, step: 3 }))
  }

  function toggleComponent(slug: string) {
    setState(s => ({
      ...s,
      selectedComponents: s.selectedComponents.includes(slug)
        ? s.selectedComponents.filter(c => c !== slug)
        : [...s.selectedComponents, slug],
    }))
  }

  function generateAndAdvance() {
    const prompt = generatePrompt({
      projectType: state.projectType,
      projectTypeLabel: state.projectTypeLabel,
      context: state.context,
      contextLabel: state.contextLabel,
      selectedComponents: state.selectedComponents,
    })
    setState(s => ({ ...s, generatedPrompt: prompt, step: 4 }))
  }

  function reset() {
    setState(initial)
  }

  function goBack() {
    setState(s => ({ ...s, step: Math.max(1, s.step - 1) as WizardState['step'] }))
  }

  return (
    <div className={styles.wizard}>
      {/* Progress */}
      <div className={styles.progress}>
        {stepLabels.map((label, i) => {
          const stepNum = (i + 1) as 1 | 2 | 3 | 4
          const isDone = state.step > stepNum
          const isActive = state.step === stepNum
          return (
            <div key={label} className={`${styles.step} ${isActive ? styles.stepActive : ''} ${isDone ? styles.stepDone : ''}`}>
              <div className={styles.stepDot}>
                {isDone ? (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : stepNum}
              </div>
              <span className={styles.stepLabel}>{label}</span>
            </div>
          )
        })}
      </div>

      {/* Content */}
      <div className={styles.content}>
        {state.step === 1 && (
          <StepOne onSelect={selectProjectType} />
        )}
        {state.step === 2 && (
          <StepTwo
            projectType={state.projectType}
            onSelect={selectContext}
            onBack={goBack}
          />
        )}
        {state.step === 3 && (
          <StepThree
            selected={state.selectedComponents}
            onToggle={toggleComponent}
            onGenerate={generateAndAdvance}
            onBack={goBack}
          />
        )}
        {state.step === 4 && (
          <StepFour
            prompt={state.generatedPrompt}
            onReset={reset}
          />
        )}
      </div>
    </div>
  )
}
