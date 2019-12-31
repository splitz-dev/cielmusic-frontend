import React from 'react'
import styled from '@emotion/styled'

const SidebarElement = styled.aside`
  position: absolute;
  left: 0;
  background: var(--gray-600);
  width: 210px;
  height: 100vh;
  padding: 15px 10px;
  .section- {
    &Logo {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      font-size: 18px;
      .svgElement {
        width: 30px;
        margin-right: 12px;
      }
    }
  }
`

const Sidebar: React.FC = () => {
  return (
    <SidebarElement>
      <div className="section-Logo">
        <img src="/assets/logo.svg" alt="Logo" className="svgElement" />
        <span>Ciel Music</span>
      </div>
      <div className=""></div>
    </SidebarElement>
  )
}

export default Sidebar
