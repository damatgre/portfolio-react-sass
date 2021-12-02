import {React, useState} from 'react'
import './work.scss'

export default function Work() {

    const [ currentSlide, setCurrentSlide ] = useState(0)

    const data = [
        {
            id: 1,
            title: "What's For Dinner?",
            desc: "A front end application that makes the difficult decision of what’s for dinner into a simple one. Users choose between our Eat-In and Eat-Out options to obtain a recipe, or the information of local restaurants.",
            img: "https://i0.wp.com/visualmeringue.com/wp-content/uploads/2018/02/WhatsForDinner_MealPlanner_Flat_8236.jpg?resize=800%2C534&ssl=1"
        },
        {
            id: 2,
            title: "What I Had For Dinner",
            desc: "A recipe blog that engages the user to find new and exciting recipes. Users can check out posts from the community, and create their own posts to store recipes they want to use again!",
            img: "https://media.istockphoto.com/photos/taking-a-photo-of-food-picture-id815617372?k=20&m=815617372&s=612x612&w=0&h=x7kqqTz0aKYSVulHEN-4LkBqUtjWKrl3PKGv0B1m46s="
        },
        {
            id: 3,
            title: "Be Our Guest",
            desc: "A full stack web application that allows users to write reviews about local restaurants. Users are able to post their reviews, post reactions to reviews made by other users, and to add friends to their profiles.",
            img: "https://st2.depositphotos.com/2672741/8676/i/600/depositphotos_86765614-stock-photo-gallant-chandelier-with-light-candles.jpg"
        }
    ]

    const handleClick = (way)=>{
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1: 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className='work' id='work'>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map(d => (
                
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    {/* <img src={d.img} alt=""/> */}
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                   {d.desc}
                                    
                                    </p>
                                    <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img 
                            src={d.img} 
                            alt="" />
                        </div>
                    </div>
                </div>))}
            </div>
            <img src="assets/white-arrow-removebg-preview.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/white-arrow-removebg-preview.png" className="arrow right" alt="" onClick={() => handleClick()}/>

        </div>
    )
}
