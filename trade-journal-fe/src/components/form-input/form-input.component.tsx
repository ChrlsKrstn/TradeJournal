import { FC, InputHTMLAttributes } from "react";
import { create } from "zustand";
import { shallow } from "zustand/shallow";
import { persist, createJSONStorage } from 'zustand/middleware'

type FormInputProp = {label: string} & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProp> = ({label, ...otherProp}) => {
    
    return (
        <>
            <label>{label}</label>
            <input {...otherProp} />
        </>
    )
}

export default FormInput;