import React from 'react'

export default function Index(props) {
    console.log("in food index")
    return (
        <div>
            <h1>Food Dish</h1>
            {props.currentFood && props.currentFood.map(food => (
                <div onClick={() => props.setFoodDetail(food.Name)} key={food.Name}>
                    {food.Name}
                </div>))}
        </div>
    )
}