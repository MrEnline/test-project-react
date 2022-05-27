import dataContext from './context';
import { useContext } from 'react';

const InputComponent = () => {
    const context = useContext(dataContext);

    return (
        <input
            value={context.mail}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onFocus={context.forceChangeMail}
        />
    );
};

export default InputComponent;
