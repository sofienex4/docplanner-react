import React from 'react';




const Places = (props) => {
    return (
        <div className="Places">
           
           
            <ul className="offices">
               {
                  props.placeselem.map(el => (
                        <li className="office" >
                          <img className="office__image" src= {el.figure}/>
                          <div className="space">
                          <h3 className="office__desc">{el.name}</h3>
                          <span className="btn btn--small">{el.btn}</span>
                         </div>
                        </li>
                    )
                    )
                  }
            </ul>

        </div>






    );
}

export default Places;