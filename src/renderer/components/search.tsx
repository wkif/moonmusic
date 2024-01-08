// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { MdiMagnify } from './icon'
// import './search.css'
export default function Search(): JSX.Element {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="middle">
      <form className="search-box flex items-center">
        <MdiMagnify onClick={() => setOpen(!open)} />
        <input
          type="text"
          className={`${
            open ? 'w-20rem p-l-7px' : 'w-0'
          } h-2rem border-0 outline-none m-l-1rem rounded-20px bg-#F3F3F3 dark:bg-#F3F3F3`}
          style={{
            transition:
              'width 0.4s ease-in-out, border-radius 0.8s ease-in-out,padding 0.2s, height 0.2s ease-in-out'
          }}
          onFocus={() => {
            setOpen(true)
          }}
          onBlur={() => setOpen(false)}
        />
        {/* <button type="button" className={`btn ${open ? 'inclicked' : ''}`} name="button"></button> */}
      </form>
    </div>
  )
}
