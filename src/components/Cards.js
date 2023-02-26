import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import images9 from '../images copy/img-9.jpg'
import images2 from '../images copy/img-1.jpg'
import images3 from '../images copy/img-2.jpg'
import images4 from '../images copy/img-3.jpg'
import images8 from '../images copy/img-8.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                        <CardItem
                            src={images9}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/trvl-react-app/services'
                        />
                        <CardItem
                            src={images2}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/trvl-react-app/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={images3}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/trvl-react-app/services'
                        />
                        <CardItem
                            src={images4}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/trvl-react-app/services'
                        />
                        <CardItem
                            src={images8}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/trvl-react-app/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;