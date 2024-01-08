import React, { SVGProps } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Title from './components/title'
import Darkmode from './components/darkmode'
import { MdiEarth, MdiFormatListNumbered, MdiHomeLightningBolt } from './components/icon'
import Search from './components/search'
import Home from './pages/home'

import Find from './pages/find'
import PlayerCom from './components/playerCom'

function Layout(): JSX.Element {
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState(0)

  return (
    <>
      {/* <Title data={'Moon Music'} /> */}
      <div className="layout flex flex-row w-full h-100vh items-center">
        <div
          className={`w-${
            open ? '10' : '3'
          }vw left bg-#F3F3F3 dark:bg-#202020 h-100%  z-2 p-l-8px p-r-10px flex flex-col items-center justify-around rounded-tr-8px rounded-br-8px`}
          style={{ transition: 'width 0.3s' }}
        >
          {/* 头像 */}
          <div className="avatar">
            <img
              src={
                'https://kifimg.oss-cn-beijing.aliyuncs.com/imgforteachingdemo/20201127203438.png'
              }
              style={{ borderRadius: '50%', width: '2rem', height: '2rem' }}
            />
          </div>
          <div className="list flex flex-col items-center justify-center">
            <div className="line w-100% h-1px bg-#E0E0E0"></div>
            {/* 首页 */}
            <div
              className={`nav-item rounded-10px flex items-center justify-center m-10px ${
                active === 0 ? 'color-#27AE60' : ''
              }`}
              onClick={() => {
                setActive(0)
              }}
            >
              <MdiHomeLightningBolt />
              {open && (
                <div className={`m-l-10px ${open ? 'scale-up-center' : 'flip-out-hor-top'}`}>
                  首页
                </div>
              )}
            </div>
            {/* 发现 */}
            <div
              className={`nav-item rounded-10px flex items-center justify-center m-10px ${
                active === 1 ? 'color-#27AE60' : ''
              }`}
              onClick={() => {
                setActive(1)
              }}
            >
              <MdiEarth />
              {open && (
                <div className={`m-l-10px ${open ? 'scale-up-center' : 'flip-out-hor-top'}`}>
                  发现
                </div>
              )}
            </div>
            <div className="line w-100% h-1px bg-#E0E0E0"></div>
          </div>
          {/* 展开 */}
          <div>
            <div className="m-b-10px rounded-10px">
              <MdiFormatListNumbered onClick={() => setOpen(!open)} />
            </div>
            <Darkmode />
          </div>
        </div>
        <div className="right">
          <div className="search m-l-10px fixed top-10px text-center w-100%">
            <Search />
          </div>
          <div className="m-l-10px">{active === 0 ? <Home /> : <Find />}</div>
          <PlayerCom />
        </div>
      </div>
    </>
  )
}

function App(): JSX.Element {
  return (
    <div
      className="App h-100% dark:bg-gray-800 text-gray-800 dark:text-gray-100"
      style={{ fontFamily: 'MiSansLight' }}
    >
      <Layout />
    </div>
  )
}

export default App
