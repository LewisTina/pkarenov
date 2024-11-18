import Chart from '@/components/Chart'
import ContactUs from '@/components/ContactUs'
import Cover from '@/components/Cover'
import Introduction from '@/components/Introduction'
import Layout from '@/components/Layout'
import Prestations from '@/components/Prestations'
import Realizations from '@/components/Realizations'
import { useEffect, useRef, useState } from 'react'


export default function Home() {
  const [ coverFrameRef, setCoverFrameRef ] = useState<HTMLElement>()
  const _coverFrameRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
      if(_coverFrameRef.current){
          setCoverFrameRef(_coverFrameRef.current)
      }
  }, [_coverFrameRef])

  return (
    <Layout>
        <Cover coverRef={_coverFrameRef}/>
        <Introduction coverFrame={coverFrameRef}/>
        <Chart/>
        <Prestations/>
        <Realizations/>
        <ContactUs/>
    </Layout>
  )
}
