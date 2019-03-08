import React from 'react'

export default class FoodChoice extends React.Component{
    render(){
        return(
            <div className='container'>
                <h1 className="jumbotron">What you you like to eat?</h1>
                    <h2>{this.props.foodchoice}</h2>
            </div>
        )
    }
}