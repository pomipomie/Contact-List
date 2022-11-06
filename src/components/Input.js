export const Input = ({name, label, value, onChange, text}) => {

    return(
        <>
            <label htmlFor={name}>{label} :</label>
            <input placeholder={label} name={name} className="form-control" value={value} onChange={e => onChange(e)}>{value}</input>
        </>
    )
}