import React from 'react';

const Company = (props) => {
    return (
        <div className="comp">

            <h1 className="golb">
                We are a global
                company
			    <br />with local culture
		    </h1>

            <ul class="logocom">
                {
                    props.companyelem.map(el => (
                        <li class="hovercolor">
                            <a href={el.link}>
                                <svg xmlns={el.link2} width={el.widthimg} height="32" viewBox={el.viewbox}>
                                    <path d={el.pathimg} />
                                </svg>
                            </a>

                        </li>

                    )
                    )
                }
            </ul>



        </div>






    );
}

export default Company;