import React from 'react'

export default function Index(props) {
    console.log("in food index")
    return (
        <div className="foods">
            {props.currentFood && props.currentFood.map(food => (
                <div className="food" onClick={() => props.setFoodDetail(food._id, food.Name)} key={food._id} test={food.Name}>
                    {food.Name}
                </div>
            ))}
        </div>
    )
}