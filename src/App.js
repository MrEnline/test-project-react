import { useState, Component, createContext } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

const dataContext = createContext({
    mail: 'name@example.com',
    text: 'some text',
});

const { Provider, Consumer } = dataContext;

const Form = (props) => {
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label mt-3"
                    >
                        Email address
                    </label>
                    <InputComponent />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                    >
                        Example textarea
                    </label>
                    <textarea
                        value={props.text}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
            </form>
        </Container>
    );
};

//классовый компонент
class InputComponent extends Component {
    //3-й способ работы с контектсом, аналогичный 2-му, но более продвинутый
    static contextType = dataContext;

    render() {
        return (
            // <Consumer>
            //     {(value) => {
            //         return (
            //             <input
            //                 value={value.mail}
            //                 type="email"
            //                 className="form-control"
            //                 id="exampleFormControlInput1"
            //                 placeholder="name@example.com"
            //             />
            //         );
            //     }}
            // </Consumer>
            <input
                value={this.context.mail}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
            />
        );
    }
}
//2-й способ работы с контекстом
//вместо Consumer можно использовать данное свойство классового компонента
//InputComponent.contextType = dataContext;

function App() {
    const [data, setData] = useState({
        mail: 'name@example.com',
        text: 'some text',
    });

    return (
        <Provider value={data}>
            <Form mail={data.mail} text={data.text} />
            <button
                onClick={() =>
                    setData({
                        mail: 'second@example.com',
                        text: 'another text',
                    })
                }
            >
                Click me
            </button>
        </Provider>
    );
}

export default App;
