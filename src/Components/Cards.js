import React from 'react';


const TabCountry = [
    { titleC: "Choose country " },
    {
        titleC: "Argentina",

    },
    {
        titleC: "Australia",

    },
    {
        titleC: "Australia",

    },
    {
        titleC: "Brazil",

    },
    {
        titleC: "Chile",

    },
    {
        titleC: "Colombia",

    },
    {
        titleC: "Czech",

    },
    {
        titleC: "France",

    },
    {
        titleC: "Italy",

    },
    {
        titleC: "Mexico",

    },
    {
        titleC: "Peru",

    }
]

const Cards = (props) => {
    return (
        <div className="cards">
            <ul className="cards-elm">
                {
                    props.cardselements.map(el => (
                        <div className={el.title === "For patients" ? "patient" : "doctor"}>

                            <p className="boxTitle">{el.title}<br /></p>
                            <h1 className="boxText">{el.description}<br /></h1>
                                    <div className="sel">  
                                    {el.title === "For patients" ? (
                                        <select className="countries">
                                            {TabCountry.map(ctn => (
                                                <option>{ctn.titleC}</option>
                                            ))}
                                        </select>
                                    ) : <div className="countries"></div>} <br />
                                    
                                    <p ><img className="boxpic" src={el.logocard} /></p>
                                    </div>
                        </div>

                    )
                    )
                }
            </ul>

        </div>






    );
}

export default Cards;