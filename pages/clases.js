// Packages
import React from 'react'
import Layout from '../components/layout'

import ClassCard from '../components/classCard'

const videoList = {
  '-LaxpLALHYNrdOKCUuQs': {
    date: '21/03/2019',
    description: 'HTML5 CSS Javascript',
    thumbnail:
      'https://image.mux.com/z00K02atELKTc41T9ioPoTQuD9Lmj1b1Ga/animated.gif?height=356&width=628&start=1076.1413111',
    title: 'Codeando 1',
    videoUrl: 'https://stream.mux.com/z00K02atELKTc41T9ioPoTQuD9Lmj1b1Ga.m3u8'
  },
  '-LbEpvHTOFx6XXmicVhN': {
    date: '22/03/2019',
    description: 'Problemas Logicos',
    thumbnail:
      'https://image.mux.com/z00K02atELKTc41T9ioPoTQuD9Lmj1b1Ga/animated.gif?height=356&width=628&start=1076.1413111',
    title: 'Codeando 2',
    videoUrl: 'https://stream.mux.com/z00K02atELKTc41T9ioPoTQuD9Lmj1b1Ga.m3u8'
  },
  '-LbEq1zjLtr5kJHTPIyB': {
    date: '23/03/2019',
    description: 'Linux console',
    thumbnail:
      'https://image.mux.com/z00K02atELKTc41T9ioPoTQuD9Lmj1b1Ga/animated.gif?height=356&width=628&start=1076.1413111',
    title: 'Codeando 3',
    videoUrl: 'https://stream.mux.com/z00K02atELKTc41T9ioPoTQuD9Lmj1b1Ga.m3u8'
  }
}

const Clases = () => (
  <Layout>
    {Object.entries(videoList).map((item, index) => {
      const isAlt = !(index % 2 === 0)
      const [key, value] = item
      return <ClassCard key={key} thumbnail={value.thumbnail} isAlt={isAlt} />
    })}
  </Layout>
)

export default Clases
