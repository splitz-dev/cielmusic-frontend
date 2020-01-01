import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

import { useRouter } from 'next/router'

const SidebarElement = styled.aside`
  position: absolute;
  left: 0;
  background: var(--gray-600);
  width: 210px;
  height: 100vh;
  .section- {
    &Logo {
      height: 55px;
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 18px;
      text-decoration: none;
      color: #000;
      padding: 0 24px;
      .svgElement {
        width: 25px;
        margin-right: 8px;
      }
      span {
        margin-top: -1px;
      }
    }
  }
  .Menu {
    padding: 10px 0;
    a {
      position: relative;
      height: 33px;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #000;
      font-size: 0.88rem;
      padding: 0 24px;
      margin: 5px 0;
      svg {
        color: #333;
        width: 21px;
        height: 30px;
        margin-right: 12px;
      }
      &.active::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 4px;
        background-color: var(--red);
      }
    }
  }
`

interface SMenuItem {
  path?: string
}

const MenuItem: React.FC<SMenuItem> = props => {
  const router = useRouter()
  if (router.pathname === props.path) {
    return (
      <Link href={props.path} passHref>
        <a className="active">{props.children}</a>
      </Link>
    )
  } else {
    return (
      <Link href={props.path} passHref>
        <a>{props.children}</a>
      </Link>
    )
  }
}

const Sidebar: React.FC = () => {
  return (
    <SidebarElement>
      <Link href="/">
        <a className="section-Logo">
          <img src="/assets/logo.svg" alt="Logo" className="svgElement" />
          <span>Ciel Music</span>
        </a>
      </Link>
      <div className="Menu">
        <MenuItem path="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          홈
        </MenuItem>
        <MenuItem path="/ranking">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
          랭킹
        </MenuItem>
        <MenuItem path="/playlist">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          내 재생목록
        </MenuItem>
      </div>
    </SidebarElement>
  )
}

export default Sidebar
