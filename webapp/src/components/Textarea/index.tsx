export const Textarea = ({
  name,
  label,
  state,
  setState,
}: {
  name: string
  label: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state: Record<string, any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setState: React.Dispatch<React.SetStateAction<any>>
}) => {
  return (
    <div style={{ marginBottom: 10 }}>
      <label htmlFor={name}>{label}</label>
      <br />
      <textarea
        onChange={(e) => {
          setState({ ...state, [name]: e.target.value })
        }}
        value={state[name]}
        name={name}
        id={name}
      />
    </div>
  )
}
