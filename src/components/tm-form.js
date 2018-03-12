import React from 'react';

export function FormElement(props) {
    return (
        <div className="form-element">
            {props.children}
        </div>
    )
}

export function InputText(field) {

    const { input, meta } = field;
    const { touched, error } = meta;

    return (
        <FormElement>
            <input type="text" {...field} {...input} />
            <span className="message--error">{touched && error}</span>
        </FormElement>
    )
}

export function TextArea(field) {

    const { input, meta } = field;
    const { touched, error } = meta;

    return (
        <FormElement>
            <textarea {...field} {...input}></textarea>
            <span className="message--error">{touched && error}</span>
        </FormElement>
    );
}

export function SelectOne(field) {
    const { input, meta } = field;
    const { touched, error } = meta;

    return (
        <FormElement>
            <select {...field} {...input}>
                <option value="0">{field.placeholder}</option>

                {_.map(field.list, item => {
                    return <option key={item.id} value={item.id}>{item.name}</option>
                })}

            </select>
            <span className="message--error">{touched && error}</span>
        </FormElement>
    );
}