import { CodePane, Heading, Slide, Stepper, Text } from 'spectacle'
import { theme } from '../theme'

const ConditionalRendering = () => {
  return (
    <Slide>
      <Heading color="#FFF">Conditional Rendering</Heading>
      <Stepper tagName="div" alwaysVisible values={[1, 2, 3, 4]}>
        {(_, step, isActive) => isActive && <>
          {step === 0 && <>
            <Text>1. If else</Text>
            <CodePane language="jsx" theme={theme} showLineNumbers={false}>
{`function UserPage() {
  if (userAlreadyRegistered()) {
    return <LoginPage />
  } else {
    return <RegisterPage />
  }
}`}
            </CodePane>
          </>}
          {step === 1 && <>
            <Text>2. Ternary operator</Text>
            <CodePane language="jsx" theme={theme} showLineNumbers={false}>
{`function UserPage() {
  return userAlreadyRegistered()
    ? <LoginPage />
    : <RegisterPage />
}`}
            </CodePane>
          </>}
          {step === 2 && <>
            <Text>3. Store component to a variable</Text>
            <CodePane language="jsx" theme={theme} showLineNumbers={false}>
{`function UserPage() {
  let component

  if (userAlreadyRegistered()) {
    component = <LoginPage />
  } else {
    component = <RegisterPage />
  }

  return component
}`}
            </CodePane>
          </>}
          {step === 3 && <>
            <Text>4. Logical operator</Text>
            <CodePane language="jsx" theme={theme} showLineNumbers={false}>
{`function UserPage() {
  const notifications = 10
  return (
    <div>
      <h1>Hello User</h1>
      {notifications && <p>You have {notifications} unread notifications</p>}
    </div>
  )
}`}
            </CodePane>
          </>}
        </>}
      </Stepper>
    </Slide>
  )
}

export default ConditionalRendering