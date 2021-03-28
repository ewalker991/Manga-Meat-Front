import React from 'react'

export default function Index(props) {
    console.log("in food index")
    return (
        <div>
            <h1>Food Dish</h1>
            {props.currentFood && props.currentFood.map(food => (
                <div onClick={() => props.setFoodDetail(food._id, food.Name)} key={food._id} test={food.Name}>
                    {food.Name}
                </div>))}
        </div>
    )
}