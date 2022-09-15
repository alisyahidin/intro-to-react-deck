import {
  FlexBox,
  FullScreen, Heading,
  Image, Slide
} from 'spectacle';
import logo from '../logo.svg';

const Intro = () => {
  return (
    <Slide>
      <FlexBox flexDirection="column" height="100%">
        <Image size={320} src={logo} alt="React logo" />
        <Heading color="#FFF">Introduction to React</Heading>
      </FlexBox>
      <FlexBox justifyContent="flex-end">
        <FullScreen />
      </FlexBox>
    </Slide>
  )
}

export default Intro;