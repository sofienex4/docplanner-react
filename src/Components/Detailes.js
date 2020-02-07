import React from 'react';

const Details = (props) => {
    return (
        <div className="det">
            <div className="star">
                <h1 className="theworld">
                    The world's
            <br />biggest healthcare platform
		    </h1>
                <p >
                    We work from 6 offices all over the world, bringing Docplanner
                     Group to life in almost 20 countries.
                </p>
                <img src="https://www.docplanner.com/img/logo.png" className="imagedoc">
                </img>
            </div>
            <ul class="statistics">
                {

                    props.detailselem.map(el => (
                        <li className={(el.titlec === "Leader in 10 countries" || el.titlec === "30 million unique patients")  ?"col-2 decalage" : "col-2" }>
                          <img src= {el.logo}/>
                          <h3 className="titlestat" >{el.titlec}</h3>
                          {el.desc}
                        </li>
                    )
                    )

                }
            </ul>



        </div>






    );
}

export default Details;