import React from 'react'
import Transactions from './components/Transactions/Transactions'
import Blocks from './components/Block Array/Blocks'
import BlockDets from './components/Block details/BlockDets'

const App = () => {
  return (
    <>
      <Blocks />
      <BlockDets />
      <Transactions />
    </>
  )
}

export default App
