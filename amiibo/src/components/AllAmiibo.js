import React,{ useEffect } from 'react'

import { connect } from 'react-redux'

import { allAmiibo } from '../action'

import Amiibo from './Amiibo'

import { css } from '@emotion/core';

import { SyncLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 10% auto;
    color: #A445CA;
`;

const AllAmiibo = props => {

    useEffect(()=>{
        props.allAmiibo()
    },[])

    if(props.gettingData){
        return (
            <div className='sweet-loading'>
                <SyncLoader
                css={override}
                sizeUnit={"px"}
                size={80}
                color={'#A445CA'}
                loading={props.gettingData}
                />
            </div> 
        )
    }

    return(
        <div>
            {
                props.data.map((amiibo, i) => (
                    <Amiibo key={i} amiibo={amiibo}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = state => {
    return{
        data: state.data,
        gettingData: state.gettingData,
        error: state.error
    }
}

export default connect(mapStateToProps, { allAmiibo })(AllAmiibo)