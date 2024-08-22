import images from './assets/img/maintenance.jpg'

const App = () => {
  return (
    <div className='flex justify-center items-center flex-col space-y-10'>
      <h1 className="text-3xl font-bold underline text-white text-center mt-20">Sitio Web en Mantenimiento</h1>
      <p>Estamos Trabajando, Gracias</p>
      <img className='w-1/4'  src={images} alt="" />

    </div>
  )
}

export default App