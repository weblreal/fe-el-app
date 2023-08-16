import React, { CSSProperties } from 'react'
import styled from 'styled-components';
import Container from '../UI/Container/Container';
import Row from '../UI/Row/Row';

interface IWizardStepCircle {
    style?: CSSProperties,
    backgroundColor?: string
}

export const WizardStepCircle = ({ style, backgroundColor = "rgba(255, 255, 255, 0.2)" }: IWizardStepCircle) => {
    return (
        <Row position="absolute" top="64px">
            <Circle style={style} backgroundColor={backgroundColor} />
            <Circle style={style} backgroundColor={backgroundColor} />
        </Row>
    )
}

const Circle = styled(Container) <{ backgroundColor: string }>`
    width: 56px;
    height: 56px;
    background-color: ${(props) => (props.backgroundColor)}
    display: ${(props) => (props.backgroundColor ? "flex" : "none")};
    border-radius: 100px;
`

export default WizardStepCircle;