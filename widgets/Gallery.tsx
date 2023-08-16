import { useState, useEffect } from "react";
import styled from "styled-components";
import GalleryItem from "../components/Gallery/GalleryItem";
import Container from "../components/UI/Container/Container";
import Grid from "../components/UI/Grid/Grid";
import { IGallerySection } from "../models/components/IGallerySection";
import Text from "../components/UI/Text/Text";
import { IGallery } from "../models/widgets/IGallery";
import { IGalleryItem } from "../models/components/IGalleryItem";
import Row from "../components/UI/Row/Row";
import Column from "../components/UI/Column/Column";
import useDownloadFiles from "../hooks/useDownloadFiles";
import Hidden from "../components/UI/Hidden/Hidden";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";

const Gallery = ({ gallerySection, downloadLabel, selecLabel, deselectLabel, selectedLabel }: IGallery) => {

    const [activeMenu, setActiveMenu] = useState<string | undefined>(undefined);
    const [selectedMedia, setSelectedMedia] = useState<IGalleryItem[]>([]);
    const [allIsSelected, setAllIsSelected] = useState<boolean>(false);
    const [activeDownloads, setActiveDownloads] = useState<
        { url: string; fileName: string; type?: string }[]
    >([]);
    const [isDownloading, startDownload] = useDownloadFiles(activeDownloads);

    // const downloadFileHandler = () => {
    //     if (!isDownloading && singleFile && singleFile?.url)
    //       setActiveDownloads([
    //         {
    //           fileName: singleFile?.label || "",
    //           url: singleFile?.url,
    //           type: singleFile?.type,
    //         },
    //       ]);
    //   };

    const handleSelect = (media:IGalleryItem, isSelected: boolean) =>{
        if (isSelected) {
            if(!selectedMedia.includes(media)){
                setSelectedMedia(prev => [...prev, media]);
            }
        } else {
            setSelectedMedia(selectedMedia.filter(asset => asset !== media));
            setAllIsSelected(false);
        }
    }

    const handleSelectAll = () => {
        var mediaArr: IGalleryItem[] = [];
        gallerySection?.map((itemP) => {
            itemP?.galleryItems?.map((itemC) => {
                mediaArr = [...mediaArr, itemC];
            })
        });

        if(allIsSelected) {
            setSelectedMedia([]);
            setAllIsSelected(false);
            return;
        }

        setSelectedMedia(mediaArr);
        setAllIsSelected(true);
    }

    // Effect
    useEffect(() => {
        var files : { url: string; fileName: string; type?: string }[] = [];
        
        selectedMedia.map((item) => {
            if (item?.mediaFile && item?.mediaFile?.url){
                var mediaName = item?.title || "";

                if(item?.mediaFile?.type == "image/jpeg")
                    mediaName = mediaName+".jpg";

                files = [ ... files, {
                    url: item?.mediaFile?.url,
                    fileName: mediaName,
                    type: item?.mediaFile?.type
                }];
            }
        });
        if (!isDownloading){
            setActiveDownloads(files);
        }
    }, [selectedMedia]);
    
    const renderSection = (key: number, title?:string, galleryItems?:IGalleryItem[]) => {return (
            <Container
                key={key}
                mt="40px"
                mb="32px"
                id={title?.replace(" ", "-")}
            >
                
                <Row
                    justifyContent="space-between"
                    mb="24px"
                    >
                    <Text
                        fontSize="32px"
                        fontFamily="Avenir Medium"
                    >
                        <Hidden till="tablet">
                            {title} ({galleryItems?.length})
                        </Hidden>
                        <Hidden from="tablet">
                            {galleryItems?.length} {title} 
                        </Hidden>
                    </Text>

                    {key == 0 &&
                    <Hidden till="tablet">
                        <Row>
                            {selectedMedia.length > 0 && 
                            <ColText justifyContent="center" color="#5c8db8" mr="24px" onClick={()=>startDownload()}>
                                <LinkAngle 
                                    label={`${downloadLabel} (${selectedMedia.length})`} 
                                    url="#"
                                    color="#5c8db8"
                                    fontSize="18px"
                                    iconType="download"
                                    gap={1}
                                    loading={isDownloading}
                                    iconVerticalAlign="bottom"
                                />
                            </ColText>}
                            <ColText justifyContent="center" onClick={() => handleSelectAll()}><Text fontSize="18px">{!allIsSelected && selecLabel} {allIsSelected && deselectLabel}</Text></ColText>
                        </Row>
                    </Hidden>}
                </Row>
                
                <Grid gridTemplateColumns={{_:"1fr", tablet:"1fr 1fr 1fr",desktopS:"322px 322px 322px 322px"}} gridGap="16px 8px">
                    {galleryItems && 
                        galleryItems.map((media, i) => {
                            return(
                                <GalleryItem
                                    item={media}
                                    key={i}
                                    handleSelect={handleSelect}
                                    isSelected={selectedMedia.includes(media)}
                                    allSelected={allIsSelected}
                                    downloadLabel={downloadLabel}
                                    selectedLabel={selectedLabel}
                                />
                            )
                        })
                    }
                </Grid>
            </Container>
        )};
    
    const handleActive = (activeTitle: string, id:string) => {
        if(activeTitle != activeMenu){
            setActiveMenu(activeTitle);
            var element = document.getElementById(id);
            if(element){
                element.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
            }
        }else if(activeTitle != undefined && activeTitle == activeMenu){
            setActiveMenu(undefined);
            var element = document.getElementById('top');
            if(element){
                element.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
            }
        }
    }

    return (
        <Container
            margin={{_:"0px 16px",desktopS:"auto"}}
            width={{_:"calc(100vw-100%)", desktopS:"1312px"}}
        >
            <Hidden till="tablet">
                <Row position="sticky" top="0" zIndex={2} pt="64px" pb="5px">
                    {gallerySection && gallerySection.map((item:IGallerySection, i:number) => {
                        if(item.title){
                        return (<LinkText
                                    fontFamily="Avenir Bold"
                                    fontSize="20px"
                                    height="48px"
                                    padding="8px 8px 16px 8px"
                                    onClick={() => handleActive(item.title ? item.title : "", item.title ? item.title.replace(" ", "-") : "")}
                                    active={activeMenu == item.title}
                                    key={i}
                                    mr="12px"
                                >
                                    <Text>{item.title} ({item.galleryItems?.length})</Text>
                                </LinkText>);
                        }
                        return "";
                    })}
                </Row>
                <Container id="top"/>
            </Hidden>
            {gallerySection && gallerySection.map((item:IGallerySection, i:number) => {
                return renderSection(i, item.title, item.galleryItems);
            })}
        </Container>
    )
}

const LinkText = styled(Text)<{ active?: boolean }>`
  position: relative;
  user-select: none;
  cursor: pointer;
  background-color: transparent;
  color: black;

  &:before {
    content: "";
    width: 100%;
    height: 3px;
    background-color: black;

    position: absolute;
    left: 0;
    bottom: 0;

    transform: scale(${(props) => (props.active ? 1 : 0)});
    transition: 250ms ease;
  }

  &:hover {
    &:before {
      transform: scale(1);
    }
  }
`;

const ColText = styled(Column)`
  cursor:pointer;
  &:hover{
    text-decoration: underline;
  }
`
export default Gallery;
