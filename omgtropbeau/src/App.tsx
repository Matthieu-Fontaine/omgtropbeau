import Cards from './components/Cards'
import NavBar from './components/NavBar'
import Headers from './components/Header'

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Headers name='sasss' />
      <div className='flex flex-grow'>
        <NavBar />
        <div className='flex justify-center items-center flex-wrap gap-4 mt-6 overflow-auto'>
          <Cards name='Example' description='test' />
          <Cards name='Example' description='test' />
          <Cards name='Example' />
          <Cards name='Example' />
          <Cards name='Example' />
          <Cards name='Example' />
          <Cards name='Example' />
          <Cards name='Example' />
          <Cards name='Example' />
        </div>
      </div>
    </div>
  )
}

export default App