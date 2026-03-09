const Tag = ({state, text, style}: {state: boolean, text: string, style: string}) => {
  
  return (
    <p className={`${state ? style : 'border border-neutral-400 text-neutral-400 hover:bg-neutral-200'} cursor-default text-sm rounded-4xl inline-block max-w-40 truncate px-5 py-1 text-center`}>{text}</p>
  )
}

export default Tag