import styled from 'styled-components';

export const Container = styled.div`
    background-color: #3D3F43;
    border-radius: 10px;
    padding: 10px;
    
    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }
`;

export const ControlContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ControlButton = styled.button`
    background-color: #756DF4;
    color: #FFF;
    border: 0;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;
