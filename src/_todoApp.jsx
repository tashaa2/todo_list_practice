import React from 'react';
import "./App.css";



class TodoApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      myMass: [],
      inputValue: "",
      indexChange: null,
    }
  }

  myHandleAddItem = (myParam) => {

    this.setState((myPrevState) => ({
      myMass: [...myPrevState.myMass, myPrevState.inputValue],
      inputValue: "",      
    }))

    //когда возвращается литеральное выражение объекта, то тело функции помещается в скобки
    
  }

  myHandleDelItem = (myIndex) => {

    const {myMass} = this.state;
    //деструктуризация и для объектов, получаем множество переменных. что значит эта надпись? без нее работает
    
    const myMassnext = [...this.state.myMass.slice(0,myIndex), ...this.state.myMass.slice(myIndex+1)];
    this.setState({myMass: myMassnext})    
  };  

  myHandleInputValue = (e) => {

    this.setState({inputValue: e.target.value})

  };

  myHandleChangeItem = (myEl, myIndex) => {
    this.setState ({inputValue:myEl, indexChange:myIndex})     
  };

  myHandleSaveItem = () => {
    // const newMassSave = [...this.state.myMass.splice(this.state.indexChange, 1, this.state.inputValue)];
    const newMassSave = [...this.state.myMass];
    newMassSave.splice(this.state.indexChange, 1, this.state.inputValue);
    this.setState({myMass: newMassSave, indexChange:null, inputValue: ""})     
  };



  render() {
    return (

      <div>

        <header className="center">

          <h3>
            {`На сегодня у меня ${this.state.myMass.length} цели`}
          </h3>

        </header>

        <div className="line">

          <input className="width1" type="text" value={this.state.inputValue} onChange={this.myHandleInputValue}/>
          <button className="width2" onClick={this.myHandleAddItem}>Добавить</button>
          <button className="width3" onClick={this.myHandleSaveItem}>Сохранить</button>


        </div>


        <ul className="centerSpisok">
          {
            this.state.myMass.map((el, i) => {

              return (
                <div className="li">

                  <li>{`${i + 1}. ${el}`}</li>
                  <button onClick={()=>this.myHandleChangeItem(el, i)}>Изменить</button>
                  <button onClick={()=>this.myHandleDelItem(i)}>Удалить</button>                 
                  
                </div>
              )

              //

            })            
          }
        </ul>        
      </div>

      //переберем массив и вернем каждый элемент в виде li, при переборе рендер должен отличать элементы
      // потому нужно кеу. Для вставки выражений пишем в {}
      // обратные кавычки для встраивания выражения в строку, синтаксис `${}`

    )
  }
}

export default TodoApp;
