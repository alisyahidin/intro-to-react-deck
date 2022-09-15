import { FC, PropsWithChildren } from "react"

const Span: FC<{ color: string } & PropsWithChildren> = ({ children, color }) => <span style={{ color }}>{children}</span>

export default Span