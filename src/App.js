import {useEffect, useRef, useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const Form = () => {
    //const myRef = useRef(null)  //изменение ref'а не вызывает перерендер, но ссылка на объект в DOM сохраняется при каждом рендере

    const [text, setText] = useState('');

    const myRef = useRef(1);

    //не будет выполняться при нажатии на область textarea, т.к. перерендеринг при useRef не происходит
    //но в myRef.current можно сохранять много важных вещей без перерендера компонента
    //например можем посчитать количество перерендеров компонента(myRef.current++)
    //либо можем сохранять предыдущее состояние например state
    useEffect(() => {
        // myRef.current++;
        // console.log(myRef.current)
        myRef.current = text;
    })

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input onChange={(e) => setText(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    {/* <textarea onClick={() => myRef.current++} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
                    <textarea value={myRef.current} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}

function App() {
    return (
        <Form/>
    );
}

export default App;
