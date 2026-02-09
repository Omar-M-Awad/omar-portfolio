interface Props {
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

const Button = ({ children, variant = "primary" }: Props) => {
  return <button className={`btn ${variant}`}>{children}</button>
}

export default Button
