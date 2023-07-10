import { useForm, useFieldArray } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setAdvantages, setCheckbox, setRadio } from "../../store/rootSlice"
import { joiResolver } from "@hookform/resolvers/joi"
import { schema } from "./constants"
import {
  FormContainer,
  ButtonsGroup,
  LinkButton,
  StepperLine,
  Button,
} from "../../components"
import type { InitialStateTypes, formValueTypes } from "../../store/StoreTypes"

import styles from "./StepTwo.module.scss"

export default function StepTwo() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const advantages = useSelector(
    (state: InitialStateTypes) => state.formValue.advantages,
  )
  const checkbox = useSelector(
    (state: InitialStateTypes) => state.formValue.checkbox,
  )
  const radio = useSelector((state: InitialStateTypes) => state.formValue.radio)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formValueTypes>({
    defaultValues: {
      advantages,
      checkbox,
      radio,
    },
    mode: "onBlur",
    resolver: joiResolver(schema),
  })
  const { fields, append, remove } = useFieldArray({
    name: "advantages",
    control,
  })
  const onSubmit = (data: formValueTypes) => {
    dispatch(setAdvantages(data.advantages))
    dispatch(setCheckbox(data.checkbox))
    dispatch(setRadio(data.radio))
    navigate("/steptree")
  }

  return (
    <FormContainer>
      <StepperLine step={2} total={3}></StepperLine>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <legend className={styles.legend}>{"Advantages"}</legend>
          {fields.map((field: { id: string }, index: number) => {
            return (
              <div key={field.id}>
                <section key={field.id}>
                  <div className={styles.input_container}>
                    <input
                      placeholder="Placeholder"
                      {...register(`advantages.${index}.field` as const, {
                        required: true,
                      })}
                      className={
                        errors?.advantages?.[index]?.field ? "error" : ""
                      }
                    />
                    <div
                      onClick={() => remove(index)}
                      className={styles.waste}
                    ></div>
                  </div>
                </section>
              </div>
            )
          })}
          <p className={styles.errors}>{errors?.advantages?.message}</p>
          <div
            onClick={() =>
              append({
                field: "",
              })
            }
            className={styles.append}
          ></div>
          <fieldset className={styles.container_group}>
            <legend className={styles.legend}>Checkbox group</legend>
            <div>
              <label htmlFor={"field-checkbox-group-option-1"}>
                <input
                  type="checkbox"
                  id={"field-checkbox-group-option-1"}
                  {...register("checkbox.one" as const)}
                  name="checkbox.one"
                  value={1}
                />
                1
              </label>
            </div>
            <div>
              <label htmlFor={"field-checkbox-group-option-1"}>
                <input
                  type="checkbox"
                  id={"field-checkbox-group-option-2"}
                  {...register("checkbox.two" as const)}
                  name="checkbox.two"
                  value={2}
                />
                2
              </label>
            </div>
            <div>
              <label htmlFor={"field-checkbox-group-option-3"}>
                <input
                  type="checkbox"
                  id={"field-checkbox-group-option-3"}
                  {...register("checkbox.tree" as const)}
                  name="checkbox.tree"
                  value={3}
                />
                3
              </label>
            </div>
          </fieldset>
          <p className={styles.errors}>{errors?.checkbox?.message}</p>
          <fieldset className={styles.container_group}>
            <legend className={styles.legend}>Radio group</legend>
            <div>
              <label htmlFor="radio-1">
                <input
                  {...register("radio")}
                  type="radio"
                  name="radio"
                  value="1"
                  className="form-check-input"
                  id="radio-1"
                />
                1
              </label>
            </div>
            <div>
              <label htmlFor="radio-2">
                <input
                  {...register("radio")}
                  type="radio"
                  name="radio"
                  value="2"
                  className="form-check-input"
                  id="radio-2"
                />
                2
              </label>
            </div>
            <div>
              <label htmlFor="radio-3">
                <input
                  {...register("radio")}
                  type="radio"
                  name="radio"
                  value="3"
                  className="form-check-input"
                  id="radio-3"
                />
                3
              </label>
            </div>
          </fieldset>
          <p className={styles.errors}>{errors?.radio?.message}</p>
        </div>
        <ButtonsGroup>
          <LinkButton
            name="Назад"
            route="/stepone"
            fill={false}
            id="button-back"
          ></LinkButton>
          <Button
            name="Далее"
            fill={true}
            id="button-start"
            type={"submit"}
          ></Button>
        </ButtonsGroup>
      </form>
    </FormContainer>
  )
}
