import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

type SizeButton = 'small' | 'medium' | 'large'

interface Props {
  children?: React.ReactNode
  widthIcon?: boolean
  background?: string
  size?: SizeButton
}

export default function AppButton({ children, widthIcon = true, background = 'bg-primary' }: Props) {
  return (
    <button
      className={`${background} hover:opacity-90 hover:shadow-md group ease duration-300 text-xs px-[24px] py-[10px] rounded-full text-wrap text-white flex items-center gap-2`}
    >
      <span>{children}</span>
      {widthIcon && (
        <span className=' flex items-center justify-start duration-300 transform translate-x-0 group-hover:translate-x-1 ease'>
          <IoArrowForward size={18} />
        </span>
      )}
    </button>
  )
}
