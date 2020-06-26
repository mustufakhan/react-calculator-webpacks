import React, { Component } from 'react';

import './App.css'
 
class App extends Component {
    constructor(){
        super();
        this.state={
            count:"0"
        }

    }
    
    reset(){
        this.setState({
          count:'0'
        })
      }
    
      addDot(){
        const {count}=this.state
        if(count.indexOf('.'=== -1))
        {
          this.setState({
            count:count+'.'
          })
        }
      }
    
      
    
      handle(digit){
        const {count}=this.state
    this.setState({
      count:count==='0'?String(digit):count+digit
    })
    
      }
   calculate(){
        const {count}=this.state
        this.setState({
          count:eval(count)
        })
      }
    backspace(){
        this.setState({
            count: this.state.count.slice(0, -1)
        })
    };
    render() { 
        return (
            <div className="App">
              
                <div className="calc">
                <div className="row">
                   <input type="text" value={this.state.count}/>
               </div>
                    <div className="row">
                        <button onClick={()=>this.handle(7)}>7</button>
                        <button onClick={()=>this.handle(8)}>8</button>
                        <button onClick={()=>this.handle(9)}>9</button>
                        <button onClick={()=>this.handle("/")}>/</button>

                    </div>
                    <div className="row">
                        <button onClick={()=>this.handle(4)}>4</button>
                        <button onClick={()=>this.handle(5)}>5</button>
                        <button onClick={()=>this.handle(6)}>6</button>
                        <button onClick={()=>this.handle('*')}>*</button>

                    </div>
                    <div className="row">
                        <button onClick={()=>this.handle(1)}>1</button>
                        <button onClick={()=>this.handle(2)}>2</button>
                        <button onClick={()=>this.handle(3)}>3</button>
                        <button onClick={()=>this.handle('+')}> +</button>

                    </div>
                    <div className="row">
                        <button onClick={()=>this.addDot()}>.</button>
                        <button onClick={()=>this.handle(0)}>0</button>
                        <button onClick={()=>this.calculate()}>=</button>
                        <button onClick={()=>this.handle('-')}>-</button>

                    </div>
                    <div className="row" style={{marginLeft:110}}>
                        <button onClick={()=>this.reset()}>Reset</button>
                        <button onClick={()=>this.backspace()}>Backspace</button>
                        

                    </div>
                   
                   

                </div>
            
            </div>
        );
    }
}
 
export default App;



