// src/components/Card/Card.tsx
import * as React from 'react'

export interface CardProps {
  children: React.ReactNode
  imgSrc?: string
  title?: string
  actions?: React.ReactNode | Array<React.ReactNode>
}

export const Card = ({
  children,
  imgSrc,
  title,
  actions,
}: CardProps): JSX.Element => {
  return (
    <div className="card shadow">
      {imgSrc && (
        <figure>
          <img src={imgSrc} alt="card hero" />
        </figure>
      )}
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        {children}
        {actions && <div className="card-actions">{actions}</div>}
      </div>
    </div>
  )
}
