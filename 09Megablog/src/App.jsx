import { useState ,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'

function App() {
  
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((useData) => {
      if (useData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

return !loading ? (
  <div className=' min-h-screen flex text-center bg-slate-400 px-5 py-5 '>
  <div className=' w-full block border-2 px-3 '>
    <Header />
    <main>
      TODO: {}
    </main>
    <Footer />
  </div>
  </div>
) : null
  
}

export default App
