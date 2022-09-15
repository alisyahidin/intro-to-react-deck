import {
  Deck, FlexBox, Heading, Quote, Slide, Text
} from 'spectacle';
import Intro from './slides/1-intro';
import WhatReact from './slides/2-react';
import Features from './slides/3-jsx';
import Component from './slides/4-component';
import State from './slides/5-state';
import ReactProps from './slides/6-props';


const transition = {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
};

function App() {
  return (
    <Deck transition={transition}>
      <Intro />
      <WhatReact />
      <Features />
      <Component />
      <State />
      <ReactProps />
      <Slide>
        <Heading color="#FFF">Conditional Rendering</Heading>
      </Slide>
      <Slide>
        <FlexBox flexDirection="column" height="100%">
          <Heading color="#FFF">List and Key in React</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexDirection="column" height="100%">
          <Heading color="#FFF">Life Cycle Methods in React</Heading>
        </FlexBox>
      </Slide>
    </Deck>
  );
}

export default App;