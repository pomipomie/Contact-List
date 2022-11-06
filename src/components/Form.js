import { Input } from "./Input";
import { Link } from 'react-router-dom';

export const Form = ({
                        title,
                        firstName,
                        lastName,
                        email,
                        onChangeFirstName,
                        onChangeLastName, 
                        onChangeEmail,
                        onSave
                    }) => {

    return(
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">{title}t</h3>
                    <div className="card-body">
                        <form className="form-group">
                            <Input name="firstName" label="First Name" value={firstName} onChange={onChangeFirstName} />
                            <Input name="lastName" label="Last Name" value={lastName} onChange={onChangeLastName} />
                            <Input name="email" label="E-mail" value={email} onChange={onChangeEmail} />
                            <button className="btn btn-success" type="submit" onClick={e => onSave(e)}>Save</button>
                            <Link to="/"><button className="btn btn-danger" type="reset" >Cancel</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}