// Modules
import { useState } from "react";
import useResponsive from "../../hooks/useResponsive";
import { AnimatePresence } from "framer-motion";
import AppConfig from "../../logic/configs/AppConfig";
// Components
import Flex from "../UI/Flex/Flex";
import Text from "../UI/Text/Text";
import { ITextImageContent } from "../../models/widgets/ITextImageColumn";
import Picture from "../UI/Picture/Picture";
import Container from "../UI/Container/Container";
import Icon from "../UI/Icon/Icon";
import Row from "../UI/Row/Row";

const TextImageContent = ({ backgroundImage, longText, title }: ITextImageContent) => {
  const [showText, setShowText] = useState<boolean>(false);
  const { is } = useResponsive();
  
  return (
    <Flex
      position="relative"
      width="100%"
      maxWidth={{ _: 340, tablet: 340, desktopS: 416 }}
      overflow="hidden"
      flexDirection={"column"}
    >
      <Container 
        width={{ _: 340, tablet: 340, desktopS: 416 }}
        height={{ _: 240, tablet: 240, desktopS: 416 }}
      >
        <Picture src={backgroundImage} alt={title}/>
      </Container>
      <Container>
      <Text
        fontSize="32px"
        fontFamily="Avenir Bold"
        mt="32px"
      >{title}</Text>
      
        <Text
            fontSize="20px"
            mt={{ _:"24px", tablet:"8px"}}
          >{is("desktopS", ">") ? 
              AppConfig.html(longText) : 
              <AnimatePresence> 
                  {showText ? 
                      <Container
                        variants={AppConfig.setAnimationVariant("EXPAND_VARIANT")}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        overflow="hidden"
                      >
                        <Container
                          variants={AppConfig.setAnimationVariant("SLIDE_DOWN_50_VARIANT")}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          {AppConfig.html(longText)}
                        </Container>
                      </Container>
                    : 
                    AppConfig.html(longText.substring(0,150)+"...")}
              </AnimatePresence>
              }
          </Text>
          </Container>
      {!is("desktopS", ">") &&
        <Row
          style={{ cursor: "pointer", width: "fit-content" }}
          onClick={() => setShowText((prev) => !prev)}
          mt="24px"
        >
          {showText ? <Icon type="close" size={24} /> : <Icon type="plus" size={24} />}
          <Text
            ml="9px"
            fontSize="24px"
          >
            {showText ? "Show less" : "Show more"}
          </Text>
        </Row>
      }
    </Flex>
  );
};

export default TextImageContent;
