import React from 'react'

const InputText = (field) => {

    const { touched, error } = field.meta

    return (
        <div className="input-group">
            <input type={field.type} placeholder={field.placeholder} {...field.input} className="form-control" />
            <span className="message--error">{touched && error}</span>
        </div>
    )
}

export default InputText