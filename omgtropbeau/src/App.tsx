import Cards from './components/Cards'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='w-full h-screen'>
      {/* <h1 className='text-3xl border-2 border-cyan-900 h-auto p-4'>
        Hello World
      </h1> */}
      <NavBar />
      {/* <div className='flex justify-center items-center flex-wrap gap-4 mt-6' >
        <Cards name='Example' description='test' />
        <Cards name='Example' description='test' />
        <Cards name='Example'/>
        <Cards name='Example'/>
        <Cards name='Example'/>
        <Cards name='Example'/>
        <Cards name='Example'/>
        <Cards name='Example'/>
        <Cards name='Example'/>
      </div> */}
    </div>
  )
}

export default App
