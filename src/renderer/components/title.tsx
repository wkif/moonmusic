// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

export default function Title(props: { data: string }): JSX.Element {
  const { data } = props
  return <div className="fixed bottom-20px right-10px rotate-330 z-10">{data}</div>
}
