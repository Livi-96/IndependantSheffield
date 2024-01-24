

export default function Button() {

function apiCall(){


  async function fetchData(){

    const response = await fetch('http://localhost:7002')
    let data = await response.json()
    data = data.data
    console.log(data)
  }

  fetchData()
}


  return (
    <>
    <div >
      <button onClick={apiCall} >click me</button>
    </div>
    </>
  )
}

