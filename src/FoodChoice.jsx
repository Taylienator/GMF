import React from 'react'

export default class FoodChoice extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <h2>{this.props.foodchoice}</h2>
                    </div>
                </div>
            </div>
        )
    }
}