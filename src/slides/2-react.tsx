import { Box, CodePane, Grid, Heading, Quote, Slide, Stepper, Text, UnorderedList } from 'spectacle'
import Span from '../components/Span'
import { theme } from '../theme'

const WhatReact = () => {
  return (
    <Slide>
      <Heading color="#FFF">What is React?</Heading>
      <Stepper tagName="div" alwaysVisible values={[1, 2, 3, 4, 5, 6]}>
        {(_, step, isActive) => isActive && <>
          {step >= 0 && step < 2 && (<>
            <Text textAlign="center">React is a <Span color="#51b6ed">declarative</Span>, <Span color="#db3243">component-based</Span> user interface library created by Meta (Facebook).</Text>
          </>)}
          {step === 1 && <>
            <Quote>
              The declarative approach is when you describe the final state of the desired UI, instead of provide step-by-step DOM mutations until you reach desired UI (Imperative)
            </Quote>
            <p className='mt-8 ml-4'>https://alexsidorenko.com/blog/react-is-declarative-what-does-it-mean/</p>
          </>}
          {step <5 && (<>
            {step >= 2 && (<>
              <h1 className='text-5xl mb-6'><Span color="#51b6ed">Declarative</Span> means:</h1>
              <Grid gridTemplateColumns="50% 50%" height="100%">
                <div>
                  {step >= 3 && <>
                    <h1 className='text-4xl mb-4'>From this (imperative)</h1>
                    <video autoPlay loop src="https://alexsidorenko.com/6d2c5a8c4ff48628b1c86e922cd36375/example-imperative.mp4"></video>
                  </>}
                </div>
                <div className='ml-6'>
                  {step >= 4 && <>
                    <h1 className='text-4xl mb-4'>To this (declarative)</h1>
                    <video autoPlay loop src="https://alexsidorenko.com/1694f57ca8b6e7a770fe6e82ca835fd1/example-declarative-2.mp4"></video>
                  </>}
                </div>
              </Grid>
            </>)}
          </>)}
          {step === 5 && (<>
            <Text><Span color="#db3243">Component-based</Span> means:</Text>
            <div className='ml-16 mb-8 text-4xl space-y-2'>
              <li>We can separate our logic & UI into several components</li>
              <li>We can reuse the existing components without copy paste the code</li>
            </div>
            <Box ml="2rem" width="30%">
              <CodePane language="jsx" theme={theme} showLineNumbers={false}>
{`<App>
  <NavigationBar />
  <Content />
  <Footer />
</App>`.trim()}
                </CodePane>
              </Box>
          </>)}
        </>}
      </Stepper>
    </Slide>
  )
}

export default WhatReact