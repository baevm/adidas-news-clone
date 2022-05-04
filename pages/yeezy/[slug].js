import React from 'react'
import { useRouter } from 'next/router'

const NewsPage = () => {
  const router = useRouter()
  const query = router.query
  
  return <div>{query.slug}</div>
}

export default NewsPage
