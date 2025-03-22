function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="container mx-auto p-12 pt-24 md:p-24">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
              Tailwind CSS Works!
            </h1>
            
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-xl text-white font-semibold hover:scale-105 transition-all">
                Hover Me!
              </button>
              
              <button className="bg-gray-800 px-8 py-3 rounded-xl text-white font-semibold hover:bg-gray-700 transition-colors">
                Dark Mode
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
