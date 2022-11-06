export const Input = ({name, label, value, onChange, text}) => {

    return(
        <>
            <label htmlFor={name}>{label} :</label>
            <input placeholder={label} name={name} className="form-control" onChange={e => onChange(e)}>{text}</input>
        </>
    )
}