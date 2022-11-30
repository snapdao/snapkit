import { BaseTransactionInfo } from './base'
import { ActionButton } from '../balance/ActionButton'
import {
  cloneElement,
  FunctionComponent,
  FunctionComponentElement,
  ReactNode
} from 'react'
import { IconProps } from '../icon/types'

export interface TransactionInfoProps {
  icon: FunctionComponentElement<IconProps>
  iconLoading?: boolean
  title: ReactNode
  amount: ReactNode
  label?: string
  content?: string
  loading?: boolean
  datetime: string
  className?: string
  bodyClassName?: string
  onClick?: () => void
}

export function TransactionInfo({
  icon,
  iconLoading = false,
  title,
  label,
  content,
  amount,
  loading = false,
  datetime,
  onClick,
  className,
  bodyClassName
}: TransactionInfoProps) {
  return (
    <BaseTransactionInfo
      icon={
        <ActionButton
          size="48px"
          borderRadius="16px"
          loading={iconLoading}
          icon={!loading ? cloneElement(icon, {
            width: '24',
            height: '24'
          }) : undefined}
        />
      }
      title={title}
      loading={loading}
      label={label}
      content={content}
      amount={amount}
      bodyClassName={bodyClassName}
      className={className}
      datetime={datetime}
      onClick={onClick}
    />
  )
}
