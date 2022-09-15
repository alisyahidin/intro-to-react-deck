import { Box, CodePane, FlexBox, Grid, Heading, Slide, Stepper, Text } from 'spectacle'
import { theme } from '../theme'

const Component = () => {
  return (
    <Slide>
      <Heading color="#FFF">How we create component?</Heading>
      <Stepper tagName="div" alwaysVisible values={[1, 2, 3, 4, 5]}>
        {(_, step, isActive) => isActive && <>
          <Grid gridTemplateColumns="1fr 1fr" gridGap="2rem">
            <div>
              {step >= 0 && <p className='text-4xl mb-8'>Class Component</p>}
              {step >= 1 && (
                <CodePane language="jsx" theme={theme} showLineNumbers={false}>
{`import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}`}
                </CodePane>
              )}
            </div>
            <div>
              {step >= 2 && <p className='text-4xl mb-8'>Functional Component</p>}
              {step >= 3 && (
                <CodePane language="jsx" theme={theme} showLineNumbers={false}>
{`function HelloWorld() {
  return (
    <h1>Hello World</h1>
  )
}`}
                </CodePane>
              )}
            </div>
          </Grid>
          {step >= 4 && (
            <FlexBox mt="1rem">
              <Box mr={32}>
                <CodePane language="jsx" theme={theme} showLineNumbers={false}>
                  {'<HelloWorld />'}
                </CodePane>
              </Box>
              <Text>{'->'}</Text>
              <Text>Hello world</Text>
            </FlexBox>
          )}
        </>}
      </Stepper>
    </Slide>
  )
}

export default Component