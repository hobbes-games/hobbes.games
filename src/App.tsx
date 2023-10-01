import './App.css'

function App() {

  return (
    <>
        <header
            style={{
                width: "100%",
                backgroundColor: "var(--russian-violet)",
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "2px solid var(--picton-blue)",
            }}
        >
            <h1
                style={{
                    margin: "0.67em 10px",
                }}
            >
                Hobbes Studios
            </h1>
            <h1
                style={{
                    color: "var(--yale-blue)",
                    margin: "0.67em 10px",
                }}
            >
                Big Things Coming
            </h1>
        </header>
        <main style={{
            flexGrow: 1,
            background: 'url(hobbes.jpg)',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            boxShadow: "inset var(--yale-blue) 0 0 10px, inset var(--yale-blue) 0 0 20px, inset var(--yale-blue) 0 0 30px"
        }}>
        </main>
        {/*TODO sticky I guess*/}
        <footer style={{
            width: "100%",
            backgroundColor: "var(--russian-violet)",
            color: "var(--yale-blue)",
            borderTop: "2px solid var(--picton-blue)"
        }}>
            Copyright &copy;2023 Hobbes Studios | edward@auttonberri.es
        </footer>
    </>
  )
}

export default App
