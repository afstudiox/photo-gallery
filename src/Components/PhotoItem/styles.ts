import styled from 'styled-components';

export const ControlContainer = styled.div`
    position: absolute;
    top: 5px;
    right: 15px;
    visibility: hidden;
`;

export const ControlButton = styled.button`
    position: relative;
    background-color: #756DF4;
    color: #FFF;
    border: 0;
    margin: 12px 0 4px ;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;

export const Container = styled.div`
    position: relative;
    display: inline-block;
    background-color: #3D3F43;
    border-radius: 10px;
    padding: 10px;

    &:hover ${ControlContainer} {
        visibility: visible;
    }

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }
`;
