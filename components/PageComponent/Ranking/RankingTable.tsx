import React from 'react'
import styled from '@emotion/styled'

const StyledRankingTable = styled.table`
  width: 100%;
  border: 0;
  border-collapse: collapse;
  clear: both;
  color: var(--gray-100);
  thead {
    th {
      font-weight: 400;
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
    }
  }
`

const RankingTable: React.FC = () => {
  return (
    <>
      <StyledRankingTable>
        <thead>
          <tr>
            <th scope="col">#</th>
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
        <tbody>
          <tr>
            <td className="rankNum">1</td>
            <td className="thumb">
              <img
                src="https://cdn.music-flo.com/image/album/026/281/04/04/404281026_5de0be5f.jpg?1575009888883/dims/resize/140x140/quality/90"
                alt="METEOR - 창모"
              />
            </td>
            <td className="song">
              <span className="title">METEOR</span>
            </td>
            <td className="artist">창모</td>
            <td className="play">play</td>
            <td className="playlist">playlist</td>
          </tr>
        </tbody>
      </StyledRankingTable>
    </>
  )
}

export default RankingTable
