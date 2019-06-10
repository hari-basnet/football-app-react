import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom'

import mcitylogo from '../../Resources/images/logos/manchester_city_logo';



export const CityLogo = (props) => {
    const template = <div>Logo</div>

    if (props.link) {
        return (
            <Link to={props.linkTo} className="link_logo">
                {template}
            </Link>
        )
    } else {
        return template;
    }
}

