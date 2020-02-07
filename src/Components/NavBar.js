import React from 'react';

const NavBar = (props) => {
    return (
        <div className="nav">
            <li>
                <img className="logoDoc" src='https://www.docplanner.com/img/logo-default-group-en.svg?v=' />
            </li>
            <ul className="menu">


                {
                    props.navelements.map(el => (
                        <li className="list-nav">
                            <a>{el.title}</a>
                            {el.subMenu ? <ul className='list-subMenu'>{el.subMenu.map(el => <li className="hovli"> <span>{el}</span> </li>)}</ul> : null}
                        </li>
                    )
                    )
                }
            </ul>
        </div>






    );
}

export default NavBar;