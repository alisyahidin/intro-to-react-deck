import { CodePane, Heading, Slide } from 'spectacle'
import { theme } from '../theme'

const JSXFeatures = () => {
  return (
    <Slide>
      <Heading color="#FFF">JSX</Heading>
      <p className='text-4xl mb-8'>JSX is a syntax that looks like HTML but also has the power of JavaScript</p>
      <CodePane language="jsx" theme={theme} showLineNumbers={true} highlightRanges={[3, [4, 6], 8]}>
{`<div>
  <h1>Holla</h1>
  {console.log('test')}
  {isLoggin()
    ? <Dashboard />
    : <LoginForm />}
  <button 
    onClick={() => console.log('test')}
    onHover={() => console.log('hover')}
  >
    Holla!
  </button>
</div>`}
      </CodePane>
    </Slide>
  )
}

export default JSXFeatures