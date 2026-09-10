import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import { ThemeBtn, Card } from './components'

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  // actual change in theme\
 
  useEffect(() => {
   document.querySelector('html').classList.remove('dark', 'light');
   document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return (
    < ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="py-4 px-2">
        <h1 className="bg-emerald-700 text-3xl p-2 text-center shadow-gray-700 shadow-lg text-white">Theme Switcher</h1>
      </div>

      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>

    </ ThemeProvider>
  )
}

export default App
