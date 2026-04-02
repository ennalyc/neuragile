import { ReactElement } from 'react'

const CustomButton = ({state, text, icon, color}: {state: boolean, text: string, icon: ReactElement, color: string}) => {
  return (
    <button className={`${state ? `text-white ${color} font-medium` : 'border border-neutral-400 text-neutral-400'} hover:bg-neutral-200 gap-3 min-h-24 rounded-2xl text-sm flex flex-row items-center justify-center py-5 px-6`} type='button'>
        {icon}
        {text}
    </button>
  )
}

export default CustomButton