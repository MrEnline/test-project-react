import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

class Form extends Component {

    myRef = React.createRef();
    mySecondRef = React.createRef();    //можно создавать сколько угодно рефов для использования

    //ref получает ссылку на dom-элемент в структуре
    //ref можно вешать и на компоненты(например на Container) для того, чтобы была возможность вызывать методы
    //у этих компонентов. Свойство current будет иметь ссылку на компонент.
    //ref лучше использовать в хуке componentDidMount, т.к. он вызывается после render(отрисовки dom-дерева)
    
    // componentDidMount(){
    //     this.myRef.current.focus();
    // }

    focusFirstTI = () => {
        if (this.myRef)
            this.myRef.focus();
    }

    setInputRef = elem => {
        this.myRef = elem;
    }

    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input ref={this.setInputRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea onClick={this.focusFirstTI} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </Container>
        )
    }
}

function App() {
    return (
        <Form/>
    );
}

export default App;
