import { useState } from "react";

export function useMultiStepForm(steps) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function next() {
        setCurrentStepIndex(prev => {
            if (prev >= steps.length - 1) return prev
            return prev + 1
        })
    }

    function back() {
        setCurrentStepIndex(prev => {
            if (prev <= 0) return prev
            return prev - 1
        })
    }

    function goTo(index) {
        setCurrentStepIndex(index)
    }

    return {
        currentStepIndex,
        currentStep: steps[currentStepIndex],
        goTo, next, back, steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1
    }
}