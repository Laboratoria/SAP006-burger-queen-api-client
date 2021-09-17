import Routes from './services/routes';

function App() {
  return(
    <div>
      <Routes/>
    </div>
  )
}

export default App;
/*  export default function App() {
const [page, setPage] = useState;

useEffect(
  ()=> {
    const url = window.location.href;
    const res = url.split('?')
    setPage(res[1])
  }
)

const linksPage = (p) => {
  if(p===1){
    window.open('http://localhost:300?1','_self')
  }
  else if(p===2) {
    window.open('http://localhost:300?2','_self')
  }
}

const returnPage = () => {
  if(page===1){
    return <Login />
  }
  else if (page===2) {
    return <CreateUser/>
  }
  else { return <div>
                  <button onclick={()=> linksPage(1)}>
                  Criar conta
                  </button>
                  <button onclick={()=> linksPage(2)}>
                  Login
                  </button>
                </div>}
  }

return (
  <>
    {returnPage()}
  </>
)
}
*/


//<Button variant='secondary'onclick=''>
//Login
//</Button>