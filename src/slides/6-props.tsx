import { useState } from 'react'
import { CodePane, Grid, Heading, Slide, Stepper } from 'spectacle'
import { theme } from '../theme'

function SayHelloByName(props: { name: string }) {
  return (
    <h1 className='text-4xl'>Hello {props.name}</h1>
  )
}

function Hello() {
  const [name, setName] = useState('Luffy')

  return (
    <div>
      <input 
        className='p-2 text-neutral-800 mb-4'
        onChange={e => setName(e.target.value)} 
        value={name}
      />
      <SayHelloByName name={name} />
    </div>
  )
}

const ReactProps = () => {
  return (
    <Slide>
      <Heading color="#FFF">React Props</Heading>
      <p className='text-4xl mb-8'>Props is short for properties and they are used to pass data between React components</p>
      <Stepper tagName="div" alwaysVisible values={[1, 2, 3, 4]}>
        {(_, step, isActive) => isActive && <>
          <Grid gridTemplateColumns="1fr 1fr" gridGap="2rem">
            {step >= 0 && <CodePane language="jsx" theme={theme} showLineNumbers={false}>
{`function Hello() {
  const [name, setName] = React.useState('Luffy')

  return (
    <div>
      <input 
        onChange={e => setName(e.target.value)} 
      />
      <SayHelloByName name={name} />
    </div>
  )
}`}
            </CodePane>}
            {step >= 1 && <div>
              {step < 3 && <CodePane language="jsx" theme={theme} showLineNumbers={false}>
{`function SayHelloByName(props) {
  return (
    <h1>Hello {props.name}</h1>
  )
}`}
              </CodePane>}
              {step >= 3 && <CodePane language="jsx" theme={theme} showLineNumbers={false}>
{`class SayHelloByName extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.name}</h1>
    )
  }
}`}
              </CodePane>}
              {step >= 2 && <div className='mt-8'>
                <Hello />
              </div>}
            </div>}
          </Grid>
        </>}
      </Stepper>
    </Slide>
  )
}

export default ReactProps