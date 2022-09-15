import { useState } from "react";
import { Box, CodePane, Grid, Heading, Quote, Slide, Stepper, Text } from "spectacle";
import { theme } from "../theme";

const Counter = ({ updatable }: { updatable: boolean }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-start">
      <button 
        className="bg-blue-500 hover:bg-blue-600 text-5xl px-6 py-3 rounded-lg"
        onClick={() => updatable && setCount(count + 1)}
      >
        Increase
      </button>
      <h1 className="text-7xl ml-12">{count}</h1>
    </div>
  )
}

const State = () => {
  return (<>
    <Slide>
      <Heading color="#FFF">React State</Heading>
      <Stepper tagName="div" alwaysVisible values={[1, 2, 3]}>
        {(_, step, isActive) => isActive && <>
          {step >= 0 && <Quote><strong>State</strong> is an object variable where you store property values that belongs to the component. When the state object changes, the component re-renders.</Quote>}
          {step >= 1 && (
            <Box p="2rem" py="4rem">
              <Grid gridTemplateColumns="50% 50%">
                <div>
                  <button className="bg-purple-600 hover:bg-purple-700 text-5xl px-6 py-3 rounded-lg">Hover me!</button>
                </div>
                <div>
                  {step >= 2 && (
                    <Counter updatable />
                  )}
                </div>
              </Grid>
            </Box>
          )}
        </>}
      </Stepper>
    </Slide>
    <Slide>
      <Text textAlign="center">Class component</Text>
      <Stepper className="h-3/4" tagName="div" alwaysVisible values={[1, 2, 3, 4, 5, 6]}>
        {(_, step, isActive) => isActive && <>
          <Grid gridTemplateColumns="50% 50%" height="100%">
            <div className="overflow-y-auto">
              <CodePane language="jsx" theme={theme} showLineNumbers={false} highlightRanges={[[2,5], 4, [7,11], [16,16]]}>
{`class Counter extends React.Component {${step >= 5 ? `
  state = { count: 0 }
` : step >= 2 ? `
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
` : ''}${step >= 3 ? `
  increase() {
    this.setState({
      count: this.state.count + 1
    });
  }
` : ''}
  render() {
    return (
      <div>
        <button${step >= 4 ? ' onClick={() => this.increase()}' : ''}>
          Increase
        </button>
        <h1>${step >= 4 ? '{this.state.count}' : '0'}</h1>
      </div>
    )
  }
}`}
              </CodePane>
            </div>
            <div className="ml-12">
              {step >= 1 && <Counter updatable={step >= 4} />}
            </div>
          </Grid>
        </>}
      </Stepper>
    </Slide>
    <Slide>
      <Text textAlign="center">Functional component</Text>
      <Stepper className="h-3/4" tagName="div" alwaysVisible values={[1, 2, 3, 4, 5, 6]}>
        {(_, step, isActive) => isActive && <>
          <Grid gridTemplateColumns="50% 50%" height="100%">
            <div className="overflow-y-auto">
              <CodePane language="jsx" theme={theme} showLineNumbers={false} highlightRanges={[[2,5], 4, [7,11], [16,16]]}>
{`function Counter() {${step >= 2 ? `
  const [count, setCount] = React.useState(0);
` : ''}${step >= 3 && step < 5 ? `
  function increase() {
    setCount(count + 1);
  }
` : ''}
  return (
    <div>
      <button${step >= 5 ? ' onClick={() => setCount(count + 1)}': step >= 4 ? ' onClick={() => increase()}' : ''}>
        Increase
      </button>
      <h1>${step >= 4 ? '{count}' : '0'}</h1>
    </div>
  )
}`}
              </CodePane>
            </div>
            <div className="ml-12">
              {step >= 1 && <Counter updatable={step >= 4} />}
            </div>
          </Grid>
        </>}
      </Stepper>
    </Slide>
  </>)
}

export default State