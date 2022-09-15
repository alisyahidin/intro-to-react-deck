import { CodePane, Heading, Slide } from 'spectacle'
import { theme } from '../theme'

const Looping = () => {
  return (<>
    <Slide>
      <Heading color="#FFF">Looping</Heading>
      <CodePane language="jsx" theme={theme} showLineNumbers={true} highlightRanges={[2, [7,9], 7, 8]}>
{`function YonkoList() {
  const yonko = ['Shanks', 'Luffy', 'Buggy', 'Kurohige']
  return (
    <div>
      <h1>List of yonko in One Piece</h1>
      <ul>
        {yonko.map((name, index) => {
          return <li key={index}>{name}</li>)
        }}
      </ul>
    </div>
  )
}`}
      </CodePane>
    </Slide>
    <Slide 
      transition={{
        from: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      }}
    >
      <Heading color="#FFF">Looping</Heading>
      <CodePane language="jsx" theme={theme} showLineNumbers={true}>
{`function YonkoList() {
  const yonko = ['Shanks', 'Luffy', 'Buggy', 'Kurohige']
  return (
    <div>
      <h1>List of yonko in One Piece</h1>
      <ul>
        {yonko.map((name, index) => {
          return <li key={index}>{name}</li>)
        }}
      </ul>
    </div>
  )
}`}
      </CodePane>
      <p className='mt-8 pl-2 py-2 border-l-2 border-red-400 text-3xl italic'><strong>Keys</strong> help React identify which items have changed, are added, or are removed. </p>
    </Slide>
  </>)
}

export default Looping