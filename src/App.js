import React,{ Component } from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';

import './App.css';

const EmpItem = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
    a {
        display: block;
        margin: 10px 0 10px 0;
        color: ${props => props.active ? 'orange' : 'black'};
    }
    input {
        display: block;
        margin-top: 10px;
    }
`;

const Header = styled.h2`
    font-size: 22px;
`;

export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0,0,0, .2);
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            position: ''
        }
    }

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    commitInputChanges = (e, color) => {
        console.log(color);
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const {name, surname, link} = this.props;
        const {position, years} = this.state;

        return (
            <EmpItem active>
                <Button onClick={this.nextYear}>+++</Button>
                <Header>My name is {name}, surname - {surname}, 
                    age - {years}, 
                    position - {position}</Header>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
                </form>
            </EmpItem>
        )
    }
}

const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
`;

//Колбэк-функция в методе map применяется для всех элементов, которые идут в props.children
//т.к. принцип иммутабельности изменять нельзя, поэтому используем метод cloneElement, которые клонирует старые элементы
//и в новых добавляются новые свойства
const DynamicGreating = (props) => {
    return (
      <div className={'mb-3 p-3 border border-' + props.color}>
          {/* {props.children} */}
          {
              React.Children.map(props.children, child => {
                  return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
              })
          }
      </div>
    )
}

//в данном примере используется композиция вместо наследования
//композиция - возможность использовать внутри одного компонента другие компоненты
//чаще всего используется композиция вместо наследования, потому что удобнее
const HelloGreating = () => {
    return(
        <div style={{'width': '600px', 'margin': '0 auto'}}>
            <DynamicGreating color={'primary'}>
                <h2>Hello Greating</h2>
            </DynamicGreating> 
        </div>
    )
}

//целые структуры с тэгами можно передавать в качестве пропсов - пример left и right ниже
function App() {
  return (
    <Wrapper>
        {/* <DynamicGreating color={'primary'}>
            <h2>Hello, man</h2>
            <h2>Hello Wolrd</h2>
        </DynamicGreating>         */}
        <HelloGreating/>
        <BootstrapTest
            left={
                <DynamicGreating color={'primary'}>
                    <h2>Hello, man</h2>
                    <h2>Hello Wolrd</h2>
                </DynamicGreating> 
            }
            right={
                <DynamicGreating color={'primary'}>
                    <h2>This is Sparta</h2>
                </DynamicGreating>               
            }
        />
        <WhoAmI name='John' surname="Smith" link="facebook.com"/>
        <WhoAmI name='Alex' surname="Shepard" link="vk.com"/>
    </Wrapper>
  );
}

export default App;
