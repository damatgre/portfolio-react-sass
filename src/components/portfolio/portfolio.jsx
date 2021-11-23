
import { React, useEffect, useState } from 'react';
import './portfolio.scss';
import PortfolioList from '../portfolioList/portfoliolist';
import {
    featuredPortfolio,
    frontendPortfolio,
    backendPortfolio,
    fullstackPorfolio
} from "../../data";

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: 'featured',
            title: 'Featured',
        },
        {
            id: 'front-end',
            title: 'Front-End',
        },
        {
            id: 'back-end',
            title: 'Back-End',
        },
        {
            id: 'full-stack',
            title: 'Full-Stack',
        },
        
    ];

    useEffect(()=>{

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "front-end":
                setData(frontendPortfolio);
                break;
            case "back-end":
                setData(backendPortfolio);
                break;
            case "full-stack":
                setData(fullstackPorfolio);
                break;
                default: 
                setData(featuredPortfolio);

        }

    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className='container'>
                {data.map(d=> (
                    <div className='item'>
                    <img src={d.img}
                        alt='' />
                    <h3>{d.title}</h3>
                </div>
                ))}
                
            </div>
        </div>
    )
}
