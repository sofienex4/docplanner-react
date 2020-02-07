import React from 'react';




const Header = (props) => {
    return (
        <div className="header">
            <li>
                <img className="logoheader" src='https://www.docplanner.com/img/sygnet.png'/>
            </li>
            <li>
            <h1 class="making">
                Making the healthcare experience more human
            </h1>
            </li>
            <ul className="header-parag">
                {
                    props.headerelements.map(el => (
                        <li className="paragraphes">
                            <p>{el.parag}</p>
                        </li>
                    )
                    )
                }
            </ul>
        </div>






    );
}

export default Header;