import React from "react";
import './text.css'
class textera extends React.Component{
       constructor(){
        super();
        this.state={
            input:"",
            showParagraph:false
        }
       }
       
    render(){
        return(
            <div className="container">
            <textarea
            placeholder="enter some value"
            className="txt"
            value={this.state.input} 
            onChange={(e)=>this.setState({input:e.target.value})}

            />
            <button
            className="but"
            onClick={() => {
                this.setState({
                    showParagraph:!this.state.showParagraph
                })
            }}
            
            >Display text in UppaerCase</button>
            
            {this.state.showParagraph && <p className="result">{this.state.input.toLocaleUpperCase()}</p>}


            </div>
        )
    }

}

export default textera