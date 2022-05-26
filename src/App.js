import { useState, memo, PureComponent } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

function propsCompare(prevprops, nextprops) {
    return (
        prevprops.mail.name === nextprops.mail.name &&
        prevprops.text === nextprops.text
    );
}

const Form = memo((props) => {
    console.log('render');
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
                    <input
                        value={props.mail.name}
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                    />
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
}, propsCompare);

//PureComponent производит поверхностное копирование как и memo
//поэтому лучше использовать componentDidUpdate и в нем уже проверять пропсы
//и если они изменились, то выполнять перерендер
// class Form extends PureComponent {

//componentDidUpdate(prevProps) {
// if (prevProps.mail.name === props.mail.name) {
//     return false
// }return true
//}

//     render() {
//             console.log('render');
//             return (
//                 <Container>
//                     <form className="w-50 border mt-5 p-3 m-auto">
//                         <div className="mb-3">
//                             <label
//                                 htmlFor="exampleFormControlInput1"
//                                 className="form-label mt-3"
//                             >
//                                 Email address
//                             </label>
//                             <input
//                                 value={props.mail.name}
//                                 type="email"
//                                 className="form-control"
//                                 id="exampleFormControlInput1"
//                                 placeholder="name@example.com"
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label
//                                 htmlFor="exampleFormControlTextarea1"
//                                 className="form-label"
//                             >
//                                 Example textarea
//                             </label>
//                             <textarea
//                                 value={props.text}
//                                 className="form-control"
//                                 id="exampleFormControlTextarea1"
//                                 rows="3"
//                             ></textarea>
//                         </div>
//                     </form>
//                 </Container>
//             );
//     }
// }

function App() {
    const [data, setData] = useState({
        mail: {
            name: 'name@example.com',
        },
        text: 'some text',
    });

    return (
        <>
            <Form mail={data.mail.name} text={data.text} />
            <button
                onClick={() =>
                    setData({
                        mail: { name: 'second@example.com' },
                        text: 'another text',
                    })
                }
            >
                Click me
            </button>
        </>
    );
}

export default App;
