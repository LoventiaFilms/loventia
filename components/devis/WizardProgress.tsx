'use client';

import { motion } from 'framer-motion';

interface WizardProgressProps {
    currentStep: number;
    totalSteps: number;
}

const steps = [
    { number: 1, title: 'Les Essentiels' },
    { number: 2, title: 'L\'Histoire' },
    { number: 3, title: 'La Configuration' },
    { number: 4, title: 'Finalisation' },
];

export function WizardProgress({ currentStep, totalSteps }: WizardProgressProps) {
    return (
        <div className="w-full max-w-2xl mx-auto mb-12">
            {/* Step indicators */}
            <div className="flex items-center justify-between relative">
                {/* Progress line background */}
                <div className="absolute left-0 right-0 top-4 h-[2px] bg-loventia-beige" />

                {/* Active progress line */}
                <motion.div
                    className="absolute left-0 top-4 h-[2px] bg-loventia-rose"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                />

                {/* Step circles */}
                {steps.slice(0, totalSteps).map((step) => (
                    <div key={step.number} className="relative z-10 flex flex-col items-center">
                        <motion.div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-serif transition-colors duration-300 ${step.number <= currentStep
                                    ? 'bg-loventia-rose text-white'
                                    : 'bg-loventia-beige text-loventia-charcoal/50'
                                }`}
                            initial={{ scale: 0.8 }}
                            animate={{
                                scale: step.number === currentStep ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {step.number < currentStep ? (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                step.number
                            )}
                        </motion.div>
                        <span className={`mt-2 text-xs font-sans hidden sm:block transition-colors duration-300 ${step.number <= currentStep ? 'text-loventia-charcoal' : 'text-loventia-charcoal/40'
                            }`}>
                            {step.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
