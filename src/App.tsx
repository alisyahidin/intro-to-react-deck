import {
  Deck, Heading, Slide
} from 'spectacle';
import Intro from './slides/1-intro';
import WhatReact from './slides/2-react';
import Features from './slides/3-jsx';
import Component from './slides/4-component';
import State from './slides/5-state';
import ReactProps from './slides/6-props';
import ConditionalRendering from './slides/7-conditional-rendering';
import Looping from './slides/8-looping';

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
      <ConditionalRendering />
      <Looping />
      <Slide>
        <Heading color="#FFF">Life Cycle Methods in React</Heading>
      </Slide>
    </Deck>
  );
}

export default App;