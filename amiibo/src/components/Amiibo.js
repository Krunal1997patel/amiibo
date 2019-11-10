import React from 'react';

import { css } from '@emotion/core';

import { DotLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    color: #A445CA;
`;

const Amiibo = props => {

    const figure = props.amiibo

    return (

        !figure

    ?
    
        <div className='sweet-loading'>
            <DotLoader
            css={override}
            sizeUnit={"px"}
            size={80}
            color={'#A445CA'}
            loading={props.gettingData}
            />
        </div> 

    :

        <div>
            <img src={figure.image} alt={figure.name}  />
            <h2>{figure.name}</h2>
            <h3>{figure.gameSeries}</h3>
        </div>
    )
}

export default Amiibo