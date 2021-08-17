// src/components/Avatar/Avatar.tsx
import * as React from 'react'
import classnames from 'classnames'

import { Sizes } from 'src/utils/types'

export interface AvatarProps {
  size?: Sizes
  placeholder?: string
  imgSrc?: string
}

export const Avatar = ({
  size,
  placeholder,
  imgSrc,
}: AvatarProps): JSX.Element => {
  let dimension: number
  let fontSize: string
  switch (size) {
    case 'lg': {
      dimension = 24
      fontSize = '3xl'
      break
    }
    case 'md': {
      dimension = 16
      fontSize = '2xl'
      break
    }
    case 'sm': {
      dimension = 12
      fontSize = 'lg'
      break
    }
    default: {
      dimension = 8
      fontSize = 'sm'
      break
    }
  }
  let content: React.ReactNode = imgSrc ? (
    <img
      src={imgSrc}
      alt="avatar"
      className={`object-cover w-${dimension} h-${dimension}`}
    />
  ) : (
    <span className={`text-${fontSize}`}>{placeholder}</span>
  )
  return (
    <div className={classnames('avatar', placeholder && 'placeholder')}>
      <div
        className={classnames(
          `bg-neutral-focus text-neutral-content rounded-full w-${dimension} h-${dimension}`,
        )}
      >
        {content}
      </div>
    </div>
  )
}
