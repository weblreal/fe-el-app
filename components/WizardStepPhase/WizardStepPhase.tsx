// Modules
import React from 'react'
import AppConfig from '../../logic/configs/AppConfig';
import { IPhase } from '../../models/widgets/IWizardStep';
// Components
import Column from '../UI/Column/Column';
import Container from '../UI/Container/Container';
import Text from '../UI/Text/Text';
import BackgroundImage from '../UI/BackgroundImage/BackgroundImage';
import WizardStepCircle from './WizardStepCircle';

interface IWizardStep extends IPhase {
    index: number
}

const WizardStepPhase = ({ title, date, text, bgImg, index }: IWizardStep) => {
    return <>
        {
            (index == 0) ?
                <Column height={{ _: "348px", tablet: "full" }} width={{ _: "340px", tablet: "full" }} p={{ _: "51px 40px", tablet: "51px 64px 64px" }} position="relative">
                    <Text paddingLeft={{ _: "42px", tablet: "18px" }} fontFamily="Avenir Medium" fontSize="40px" color="#fff">{title}</Text>
                    <Container marginTop="53px">
                        {/* <WizardStepCircle style={{ marginRight: "8px" }} /> */}
                        <Text fontSize="18px" marginBottom="8px" fontFamily="Avenir Medium" color="rgba(255, 255, 255, 0.6)">{date}</Text>
                        <Text fontSize="28px" fontFamily="Avenir Medium" color="#fff">{AppConfig.html(text)}</Text>
                    </Container>
                    <BackgroundImage zIndex={-1} fixed={false} src={bgImg} alt="colorBG" />
                </Column>
                :
                <Column height={{ _: "348px", tablet: "full" }} width={{ _: "340px", tablet: "full" }} p={{ _: "51px 40px", tablet: "51px 64px 64px" }} position="relative">
                    <Text paddingLeft={{ _: "42px", tablet: "18px" }} fontFamily="Avenir Medium" fontSize="40px" color="#000">{title}</Text>
                    <Container marginTop="53px">
                        {/* <WizardStepCircle style={{ marginRight: "8px" }} backgroundColor="rgba(24, 144, 255, 0.1)" /> */}
                        <Text fontSize="18px" marginBottom="8px" fontFamily="Avenir Medium" color="#000">{date}</Text>
                        <Text fontSize="28px" fontFamily="Avenir Medium" color="#000">{AppConfig.html(text)}</Text>
                        <BackgroundImage zIndex={-1} fixed={false} src={bgImg} alt="colorBG" />
                    </Container>
                </Column>
        }
    </>
}

export default WizardStepPhase;
