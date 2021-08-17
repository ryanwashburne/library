// src/components/Button/Button.tsx
import * as React from 'react'
import classnames from 'classnames'

import { Sizes } from 'src/utils/types'

export interface ButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  role?: React.AriaRole
  size?: Sizes
  variant?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'link'
  state?: 'info' | 'success' | 'warning' | 'error'
  shape?: 'square' | 'circle'
  disabled?: boolean
  loading?: boolean
  outlined?: boolean
  onClick?: () => void
  fullWidth?: boolean
  className?: string
}

export const Button = ({
  children,
  type = 'button',
  role,
  size,
  variant = 'neutral',
  state,
  shape,
  disabled,
  loading,
  outlined,
  onClick,
  fullWidth,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      role={role}
      onClick={onClick}
      className={classnames(
        'btn',
        size && `btn-${size}`,
        variant && `btn-${variant}`,
        state && `btn-${state}`,
        shape && `btn-${shape}`,
        outlined && `btn-outline`,
        fullWidth && `btn-block`,
        loading && `loading`,
        className,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
