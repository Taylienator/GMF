import React from 'react'

export default class FoodChoice extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.foodchoice}</h1>
            </div>
        )
    }
}