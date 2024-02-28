import React from "react";
import ReactDOM from "react-dom";
import HemishphereDisplay from "./HemisphereDisplay";


class App extends React.Component{


    //constructor(props){
   //     super(props)
//
   //     this.state={latitude:null, errorMessage:''}
//
   //     window.navigator.geolocation.getCurrentPosition(
   //         (position)=>{
   //             this.setState({ latitude : position.coords.latitude})
   //         },
   //         (error)=>{
   //             this.setState({ errorMessage:error.message })
   //         }
   //     );
   // }

   state={latitude:null, errorMessage:''}

   componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
                 (position)=>{
                     this.setState({ latitude : position.coords.latitude})
                 },
                 (error)=>{
                     this.setState({ errorMessage:error.message })
                 }
             );
   }



    // componentDidMount() {
    //     console.log("ComponentDidMount");
    // }

    // componentDidUpdate() {
    //     console.log("ComponentDidUpdate");
    // }

    render(){
        if(this.state.errorMessage && !this.state.latitude)
            {
                return <div>{this.state.errorMessage}</div>
            }

        if(!this.state.errorMessage && this.state.latitude)
        {
            return <div><HemishphereDisplay latitude={this.state.latitude}/></div>
        }

        else{
            return <div>Loadinggg.....</div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)