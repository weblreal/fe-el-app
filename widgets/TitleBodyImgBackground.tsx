import React from 'react';
import BackgroundImage from '../components/UI/BackgroundImage/BackgroundImage';
import Column from '../components/UI/Column/Column';
import Flex from '../components/UI/Flex/Flex';
import Text from '../components/UI/Text/Text';
import AppConfig from '../logic/configs/AppConfig';
import { ITitleBodyImgBackground } from '../models/widgets/ITitleBodyImgBackground';

const TitleBodyImgBackground = ({ title, text, backgroundImage }: ITitleBodyImgBackground) => {
    return (
        <Flex
            maxWidth="screen"
            width="full"
            height={{ _: "347px", tablet: "413px" }}
            px={2}
            position="relative"
            margin="auto"
            justifyContent="center"
            backgroundColor={backgroundImage ? "" : "rgba(172, 216, 170, 0.8)"}
        >
            {backgroundImage && <BackgroundImage fixed={false} src={backgroundImage} alt="ha" objectFit='cover' zIndex={-1} />}
            <Column
                width="full"
                height="full"
                maxWidth="screen3"
                m="auto"
                mt={{ _: "80px", tablet: "120px" }}
                alignItems="center"
            >
                <Text
                    fontFamily="Avenir Medium"
                    fontSize={{ _: "32px", tablet: "48px" }}
                    fontWeight="500"
                    color="black" mb={{ _: "16px", tablet: "40px" }}
                >
                    {title}
                </Text>
                <Text
                    fontFamily="Avenir Light"
                    fontSize={{ _: "16px", tablet: "21px" }}
                    fontWeight="light"
                    color="black"
                    textAlign="center"
                >
                    {AppConfig.html(text)}
                </Text>
            </Column>
        </Flex>
    )
}

export default TitleBodyImgBackground;
