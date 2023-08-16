import { useState } from "react";
import { createGlobalStyle } from 'styled-components';
import { IGalleryItem } from "../../models/components/IGalleryItem";
import { AnimatePresence } from "framer-motion";
import useResponsive from "../../hooks/useResponsive";
import useDownloadFiles from "../../hooks/useDownloadFiles";
import styled from "styled-components";
// Components
import ClientOnlyPortal from "../ClientOnlyPortal/ClientOnlyPortal";
import Container from "../UI/Container/Container";
import Picture from "../UI/Picture/Picture";
import Flex from "../UI/Flex/Flex";
import Column from "../UI/Column/Column";
import Text from "../UI/Text/Text";
import Icon from "../UI/Icon/Icon";
import MotionContainer from "../UI/MotionContainer/MotionContainer";
import Row from "../UI/Row/Row";
import Button from "../UI/Button/Button";
import Hidden from "../UI/Hidden/Hidden";

interface IGalleryComp {
    item: IGalleryItem,
    handleSelect: any,
    isSelected: boolean,
    allSelected: boolean,
    downloadLabel?: string,
    selectedLabel?: string,
}


const GalleryItem = ({ item, handleSelect, isSelected, allSelected, downloadLabel, selectedLabel }: IGalleryComp) => {
  
    const [showModal, setShowModal] = useState<boolean>(false);
    const [hoverItem, setHoverItem] = useState<boolean>(false);
    const [activeDownloads, setActiveDownloads] = useState<
        { url: string; fileName: string; type?: string }[]
    >([]);
    const [isDownloading, start] = useDownloadFiles([
      { fileName: item.title, url: item.media, type: item.mediaFile.type },
    ]);
    const { is } = useResponsive();

    const downloadFileHandler = () => {
        start();
        if (!isDownloading && item?.mediaFile && item?.mediaFile?.url){
            var mediaName = item?.title || "";

            if(item?.mediaFile?.type == "image/jpeg")
                mediaName = mediaName+".jpg";
            
            setActiveDownloads([{
                fileName: mediaName,
                url: item?.mediaFile?.url,
                type: item?.mediaFile?.type,
                },
            ]);
        }
      };

    const handleSelected = () => {
        if(is("tablet",">")){
            if(isSelected || allSelected){
                handleSelect(item, false);
            }else{
                handleSelect(item, true);
            }
        }else{
            handleSelect(item,false);
        }
    }

    return (
        <>
            <Flex
                position="relative"
                width={{_:"100%", desktopS:"322px"}}
                height={{_:"235px", desktopS:"207px"}}
                overflow="hidden"
                alignItems="left"
                flexDirection="column"
                style={{ cursor: "pointer" }}
                className="itemContainer"
                onMouseEnter={() => setHoverItem(true)}
                onMouseLeave={() => setHoverItem(false)}
             >
                <Container
                    height={{_:"200px", desktopS:"180px"}}
                >
                    <Picture 
                        src={item.media} 
                        alt={item.title} 
                        height={200}
                        objectFit="cover"
                    />
                </Container>
                <MediaName 
                    marginTop="8px"
                    fontSize="16px"
                    fontFamily="Avenir Light"
                    onClick={() => setShowModal(true)} 
                    textAlign="left">
                    {item.title}
                </MediaName>

                <AnimatePresence>
                {(hoverItem || isSelected || allSelected) &&
                    <Container
                        position="absolute"
                        onClick={() => handleSelected()}
                        width="100%"
                        height={{_:"200px", desktopS:"180px"}}
                    >
                        <MotionContainer
                            layout
                            initial={{x: "-100%"}}
                            exit={{x: "-100%"}}
                            animate={{x:0}}
                            transition={{
                                duration: 0.3,
                            }}
                        >
                            <Flex
                                backgroundColor="rgba(0, 0, 0, 0.4)"
                                padding="15px"
                                justifyContent="space-between"
                                flexDirection="column"
                                height={{_:"200px", desktopS:"180px"}}
                            >
                                <Column>
                                    <Hidden till="tablet">
                                        <Row mb="26px" height="20px" alignContent="center" flexWrap="wrap">
                                            <Icon type={(isSelected || allSelected) ? "checkboxchecked" : "checkboxempty"} size={16} color="#fff"/>
                                            <Text ml="8px" fontSize="14px" color="#fff" fontFamily="Avenir Light" letterSpacing="0.5px">
                                                {(isSelected || allSelected) ? selectedLabel : ""}
                                            </Text>
                                        </Row>
                                    </Hidden>
                                    <ItemDetails>{item.copyright}</ItemDetails>
                                    <ItemDetails>{item.endofrights}</ItemDetails>
                                </Column>
                                <Column>
                                    <Row  justifyContent="space-between" alignItems="center">
                                        <Row height="20px" flexWrap="wrap">
                                            <Icon type="file" size={14} color="#fff"/>
                                            <SizeDetail ml="8px" 
                                                fontSize="14px" 
                                                color="#fff" 
                                                fontFamily="Avenir Light" 
                                                letterSpacing="0.5px"
                                            >
                                                {item?.mediaFile?.size ? item?.mediaFile?.size?.toFixed(2) : "0"} MB
                                            </SizeDetail>
                                        </Row>
                                        {/* <Hidden from="tablet"> */}
                                            <Button
                                                variant="white"
                                                onClick={() => downloadFileHandler()}
                                            >
                                                <Text 
                                                    fontSize="14px" 
                                                    fontFamily="Avenir Light" 
                                                    letterSpacing="0.5px"
                                                    mr="11px"
                                                >{downloadLabel}</Text>
                                                <Icon type="download" size={20}/>
                                            </Button>
                                        {/* </Hidden> */}
                                    </Row>
                                </Column>
                            </Flex>
                        </MotionContainer>
                    </Container>
                }
                </AnimatePresence>
            </Flex>
            
            <Hidden till="tablet">
                <ClientOnlyPortal selector="#portal" >
                    {showModal &&
                        <>
                            <Modal
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Container
                                    width={{ tabled: "731px", desktopS: "930px" }}
                                    height={{ tablet: "498px", desktopS: "600px" }}
                                    position="relative"
                                >
                                    <BackDrop />
                                    <CloseButton
                                        onClick={() => setShowModal(false)}
                                        style={{ cursor: "pointer" }}>
                                        <Icon type="close" size={40} color="black"></Icon>
                                    </CloseButton>
                                    <Flex
                                        justifyContent="center"
                                        position="relative"
                                        mt="56px"
                                        flexDirection="column" >
                                        <Row
                                            width={{tablet:"730px",desktopS:"930px"}}
                                            height={{tablet:"350px", desktopS:"450px"}}
                                        >
                                            <Picture src={item.media} alt={item.title} objectFit="cover"/>
                                        </Row>
                                        <Row
                                            padding="19px 24px"
                                            justifyContent="space-between"
                                        >
                                            <Column justifyContent="center">
                                                <Text fontSize="18px">{item.title}</Text>
                                                <Text fontSize="12px" color="rgba(0, 0, 0, 0.5);">{item.copyright}</Text>
                                                <Text fontSize="12px" color="rgba(0, 0, 0, 0.5);">{item.endofrights}</Text>
                                            </Column>
                                            <Column justifyContent="center">
                                                <Row>
                                                    <Row 
                                                        alignContent="center" 
                                                        flexWrap="wrap" 
                                                        justifyContent="center"
                                                        mr="24px"
                                                        >
                                                        <Icon type="file" size={14} color="rgba(0, 0, 0, 0.5);"/>
                                                        <SizeDetail ml="8px" 
                                                            fontSize="14px" 
                                                            letterSpacing="0.5px"
                                                            color="rgba(0, 0, 0, 0.5);"
                                                        >
                                                            {item?.mediaFile?.size ? item?.mediaFile?.size?.toFixed(2) : "0"} MB
                                                        </SizeDetail>
                                                    </Row>
                                                    <Button
                                                        variant="primary"
                                                        onClick={() => downloadFileHandler()}
                                                    >
                                                        <Text 
                                                            color="#fff"
                                                            fontSize="14px" 
                                                            fontFamily="Avenir Light" 
                                                            letterSpacing="0.5px"
                                                            mr="11px"
                                                        >{downloadLabel}</Text>
                                                        <Icon type="download" size={20} color="#fff"/>
                                                    </Button>
                                                </Row>
                                            </Column>
                                        </Row>
                                    </Flex>
                                </Container>
                            </Modal>
                        </>
                    }
                </ClientOnlyPortal>
            </Hidden>
            
        </>
    )
}

const Modal = styled(Flex)`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
`
const BackDrop = styled(Container)`
    width: 100%;
    height: 100%;
    position: absolute;
    backdrop-filter: blur(19px);
    background-color: rgb(255, 255, 255);
`

const CloseButton = styled(Container)`
    position: absolute;
    top: 8px;
    right: 8px;
`
const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`
const ItemDetails = styled(Text)`
  font-family: Avenir Light;
  font-size: 12px;
  margin-top: 8px;
  color: white;
  letter-spacing: 0.5px;
`

const SizeDetail = styled(Text)`
  align-self: flex-end;
`

const MediaName = styled(Text)`
  &:hover{
    text-decoration: underline;
  }
`

export default GalleryItem;
