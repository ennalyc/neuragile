const Tag = ({state, text, style, type}: {state: boolean, text: string, style: string, type: string}) => {
  
  return (
    <p className={`${state ? style : 'border border-neutral-400 text-neutral-400 hover:bg-neutral-200'} ${type} cursor-default text-sm inline-block max-w-40 truncate px-5 py-1 text-center`}>{text}</p>
  )
}

export default Tag