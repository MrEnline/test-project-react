import { useState } from 'react';
import './App.css';
import dataContext from './context';
import Form from './Form';

const { Provider } = dataContext;

function App() {
    const [data, setData] = useState({
        mail: 'name@example.com',
        text: 'some text',
        forceChangeMail: forceChangeMail,
    });

    //с помощью этой функции можем изменять состояние пропса, которое передается через контекст
    //важно добавить ссылку на эту функцию в само состояние, чтобы потом можно было вызвать
    //ее в дочерних компонентах
    function forceChangeMail() {
        setData({ ...data, mail: 'test@mail.ru' });
    }

    //если не указать в Provider value, то будет передано значение по умолчанию из context.js
    return (
        <Provider value={data}>
            <Form text={data.text} />
            <button
                onClick={() =>
                    setData({
                        mail: 'second@example.com',
                        text: 'another text',
                        forceChangeMail: forceChangeMail,
                    })
                }
            >
                Click me
            </button>
        </Provider>
    );
}

export default App;
