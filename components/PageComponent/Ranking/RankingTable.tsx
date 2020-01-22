import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { RowData } from '../../Table/index'

const Table = dynamic(() => import('../../Table/index'))

const RankingTable: React.FC = () => {
  const TableData: Array<RowData> = [
    {
      id: '123',
      title: '빌었어',
      artist: {
        id: 12315,
        name: '창모 (CHANGMO)',
      },
      thumb:
        'https://cdn.music-flo.com/image/album/026/281/04/04/404281026_5de0be5f.jpg?1575009888883/dims/resize/140x140/quality/90',
    },
  ]
  return (
    <>
      <Table data={TableData} isRanking={true} />
    </>
  )
}

export default RankingTable
