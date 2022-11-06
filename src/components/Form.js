import { Input } from "./Input";
import { Link } from 'react-router-dom';

export const Form = ({
                        title,
                        onChangeFirstName,
                        onChangeLastName, 
                        onChangeEmail,
                        firstNameText,
                        lastNameText,
                        emailText,
                        onSave
                    }) => {

    return(
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">{title}t</h3>
                    <div className="card-body">
                        <form className="form-group">
                            <Input name="firstName" label="First Name" text={firstNameText} onChange={onChangeFirstName} />
                            <Input name="lastName" label="Last Name" text={lastNameText} onChange={onChangeLastName} />
                            <Input name="email" label="E-mail" text={emailText} onChange={onChangeEmail} />
                            <button className="btn btn-success" type="submit" onClick={e => onSave(e)}>Save</button>
                            <Link to="/"><button className="btn btn-danger" type="reset" >Cancel</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}