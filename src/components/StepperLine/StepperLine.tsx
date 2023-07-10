import { useMemo } from "react"
import { StepperLineProps } from "./stepsLine"
import styles from "./StepperLine.module.scss"

export const StepperLine = ({ step, total }: StepperLineProps) => {
  const steps: number[] = useMemo(
    () => Array.from({ length: total }, (_, i) => i),
    [total],
  )

  return (
    <div className={styles.container}>
      {steps.map((el, i) => {
        return (
          <div className={styles.bit} key={el * i}>
            {i !== 0 && (
              <div
                className={step > i ? styles.line_contain : styles.line_outline}
              ></div>
            )}
            <div
              className={
                step === el + 1
                  ? styles.circle_outline
                  : step > el
                  ? styles.circle_contain
                  : styles.circle_default
              }
            ></div>
          </div>
        )
      })}
    </div>
  )
}
