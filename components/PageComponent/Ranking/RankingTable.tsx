import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { Music } from '../../../api/search'

const Table = dynamic(() => import('../../Table/index'))

const RankingTable: React.FC = () => {
  const TableData: Array<Music> = [
    {
      updatedAt: '2020-01-24T20:06:11.165Z',
      createdAt: '2020-01-24T20:06:11.165Z',
      id: 1,
      name: '빌었어',
      order: 1,
      type: 'youtube',
      isTitle: false,
      album: {
        updatedAt: '2020-01-24T20:06:11.101Z',
        createdAt: '2020-01-24T20:06:11.101Z',
        id: 1,
        name: 'Boyhood',
        photo:
          'https://image.bugsm.co.kr/album/images/200/202917/20291742.jpg?version=20191225120000.0',
      },
      file: {
        updatedAt: '2020-01-24T20:06:11.165Z',
        createdAt: '2020-01-24T20:06:11.133Z',
        id: 1,
        url: 'QIlzgNozXKw',
        read: 0,
      },
      artist: {
        updatedAt: '2020-01-24T20:06:11.101Z',
        createdAt: '2020-01-24T20:06:11.101Z',
        id: 1,
        name: 'Boyhood',
        photo:
          'https://image.bugsm.co.kr/album/images/200/202917/20291742.jpg?version=20191225120000.0',
      },
    },
  ]
  return (
    <>
      <Table data={TableData} isRanking={true} />
    </>
  )
}

export default RankingTable
