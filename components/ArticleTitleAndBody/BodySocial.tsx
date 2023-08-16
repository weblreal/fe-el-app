// Modules
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

// Components
import Container from "../UI/Container/Container";
import Grid from "../UI/Grid/Grid";
import Icon from "../UI/Icon/Icon";
import Text from "../UI/Text/Text";
import BodyTags from "./BodyTags";

type IBodySocialProps = {
  tagList: string[];
  shareText: string;
};

const BodySocial: React.FC<IBodySocialProps> = ({ tagList, shareText }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Container>
      {/* Tags */}
      <BodyTags tagList={tagList} />

      {/* Label */}
      <Text fontSize="16px" color="#6d6e71" mt={2} mb={2}>
        {shareText}
      </Text>

      {/* Social Icons */}
      <Grid gridGap={2} gridTemplateColumns="24px 24px 24px 24px">
        <FacebookShareButton url={`${window.location.href}`}>
          <Icon type="facebook" size={24} />
        </FacebookShareButton>
        <LinkedinShareButton url={`${window.location.href}`}>
          <Icon type="linkedin" size={24} />
        </LinkedinShareButton>
        <TwitterShareButton url={`${window.location.href}`}>
          <Icon type="twitter" size={24} />
        </TwitterShareButton>
        <EmailShareButton url={`${window.location.href}`}>
          <Icon type="mail" size={24} />
        </EmailShareButton>
      </Grid>
    </Container>
  );
};

export default BodySocial;
