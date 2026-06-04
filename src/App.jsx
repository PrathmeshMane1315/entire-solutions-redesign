import React, { useState, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@components/layout/Layout/Layout'
import Loader from '@components/common/Loader/Loader'

const Home = lazy(() => import('@pages/Home/Home'))

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}

export default App
