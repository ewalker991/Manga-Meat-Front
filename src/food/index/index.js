import React from 'react'

export default function Index(props) {
    // console.log("in food index")
    return (
        <div className="foods">
            {props.currentFood && props.currentFood.map(food => (
                <div className="food" onClick={() => props.setFoodDetail(food, food.Name)} key={food._id}>
                    {food.Name}
                </div>
            ))}
        </div>
    )
}

//<img src={food.Picture} alt="pic" />