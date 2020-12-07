import React from 'react'
const api = {
  key: "6f330a447effe8dd770d8142aa319c4c",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
       <main>
         <div className="search-box">
           <input
            type="text"
            className="search-bar"
            placeholder="Search..."
           />
         </div>
       </main>
    </div>
  )
}

export default App