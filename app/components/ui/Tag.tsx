const Tag = ({state, text}: {state: boolean, text: string}) => {
  return (
    <p className={`${state ? 'bg-neutral-500 text-white hover:bg-neutral-600' : 'border border-neutral-400 text-neutral-400 hover:bg-neutral-200'} cursor-default text-sm rounded-4xl inline-block px-5 py-1 text-center`}>{text}</p>
  )
}

export default Tag