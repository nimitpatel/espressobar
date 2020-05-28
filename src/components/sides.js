import React from 'react';

import Cake from '../assets/sides/cake.jpg';
import Eggs from '../assets/sides/eggs.jpg';
import Fries from '../assets/sides/fries.jpg';
import Marble from '../assets/sides/marble.jpg';
import Sandwich from '../assets/sides/sandwich.jpg';
import Wings from '../assets/sides/wings.jpg';
import Image from '../common/image';
import StyledSides from '../styles/styledSides';
import FoodCard from '../UI/foodCard';

import Menu from '../utils/menu';


const Sides = () => {
    return (
        <StyledSides>
            <div>
                <h2>Sides</h2>
            </div>
            <div className="sides-options">
                <FoodCard
                    classname='food-card'
                    src={Cake}
                    caption={'blueberry cheese cake'}
                />

                {
                    Object.keys(Menu.sides).map((item, index) => {
                        // console.log(Menu.sides[item])

                        return <FoodCard
                            key={index}
                            classname='food-card'
                            src={Menu.sides[item].image}
                            caption={item}
                        />
                    })
                }

                {/* <div className='food-card'>
                    <Image src={Marble} />
                    <h4>vanilla marble cake</h4>
                </div>
                <div className='food-card'>
                    <Image src={Fries} />
                    <h4>salted fries</h4>
                </div>
                <div className='food-card'>
                    <Image src={Sandwich} />
                    <h4>egg, chicken and cheese sandwich</h4>
                </div>
                <div className='food-card'>
                    <Image src={Eggs} />
                    <h4>classic scrambled eggs</h4>
                </div>
                <div className='food-card'>
                    <Image src={Wings} />
                    <h4>chicken wings</h4>
                </div> */}
            </div>


        </StyledSides>
    );
}

export default Sides;