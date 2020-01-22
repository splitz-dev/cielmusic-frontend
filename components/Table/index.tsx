import React from 'react'
import styled from '@emotion/styled'

const StyledTable = styled.table`
  width: 100%;
  border: 0;
  border-collapse: collapse;
  clear: both;
  color: var(--gray-100);
  thead {
    th {
      font-weight: 400;
      font-size: 0.8rem;
      padding: 10px 0.7rem;
      &.song,
      &.artist {
        text-align: left;
      }
    }
    border-top: 1px solid var(--gray-500);
  }
  tbody {
    tr {
      padding: 0;
      text-align: center;
      td {
        padding: 0.7rem;
        border-top: 1px solid var(--gray-500);
      }
      .thumb {
        width: 80px;
        img {
          height: 60px;
          border-radius: 16px;
        }
      }
      .song {
        text-align: left;
        .title {
          display: block;
          font-weight: 700;
          font-size: 1.06rem;
        }
      }
      .artist {
        text-align: left;
      }
      .rankNum {
        width: 70px;
        font-weight: 700;
        font-size: 1.2rem;
      }
      svg {
        width: 20px;
      }
      .play,
      .playlist {
        width: 100px;
      }
    }
  }
`

const Table: React.FC<TableProps> = props => {
  const TableRowAtData: React.FC<RowData> = props => {
    return (
      <tr>
        {props.rankNum ? <td className="rankNum">{props.rankNum}</td> : <></>}
        <td className="thumb">
          <img src={props.thumb} alt={props.title + ' - ' + props.artist} />
        </td>
        <td className="song">
          <span className="title">{props.title}</span>
        </td>
        <td className="artist">{props.artist.name}</td>
        <td className="play">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </td>
        <td className="playlist">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </td>
      </tr>
    )
  }

  let i = 0

  const RenderTable = props.data.map(item => {
    i++
    return (
      <TableRowAtData
        key={i}
        id={item.id}
        thumb={item.thumb}
        title={item.title}
        artist={item.artist}
        rankNum={props.isRanking ? i : undefined}
      />
    )
  })

  return (
    <StyledTable>
      <thead>
        <tr>
          {props.isRanking ? <th scope="col">#</th> : <></>}
          <th colSpan={1}></th>
          <th scope="col" className="song">
            곡
          </th>
          <th scope="col" className="artist">
            아티스트
          </th>
          <th scope="col">듣기</th>
          <th scope="col">재생목록</th>
        </tr>
      </thead>
      <tbody>{RenderTable}</tbody>
    </StyledTable>
  )
}

interface TableProps {
  data: Array<RowData>
  isRanking?: boolean
}

// TableProps 기본 값 지정
Table.defaultProps = {
  isRanking: false,
}

export interface RowData {
  key?: number
  id: string
  thumb: string
  title: string
  artist: ArtistData
  rankNum?: number
}

interface ArtistData {
  id: number
  name: string
}

export default Table
