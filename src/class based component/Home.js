import React from "react";

class Home extends React.Component{
    constructor(){
        super()
    }

    render(){
        return <>
                <h1> Home Class based Component  {this.props.name} {this.props.age} </h1>
            </>
    }

}

export default Home