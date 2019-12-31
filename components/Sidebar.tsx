import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

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
      justify-content: center;
      align-items: center;
      font-weight: 700;
      font-size: 18px;
      text-decoration: none;
      color: #000;
      .svgElement {
        width: 25px;
        margin-right: 8px;
      }
      span {
        margin-top: -1px;
      }
    }
  }
`

const Sidebar: React.FC = () => {
  return (
    <SidebarElement>
      <Link href="/">
        <a className="section-Logo">
          <img src="/assets/logo.svg" alt="Logo" className="svgElement" />
          <span>Ciel Music</span>
        </a>
      </Link>
      <div className=""></div>
    </SidebarElement>
  )
}

export default Sidebar
