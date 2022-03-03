// import logo from './logo.svg';
import './App.css';

function App() {
  const list = [
    {
      "Heading":"Mobile Operating System",
      "data":["Android","Blackberry","ios","Windows Phone"]
    }
    ,
    {
      "Heading":"Mobile Manufacturers",
      "data":["Samsung","HTC","Micromax","Apple"]
    }
  ]
  return <div>
    {list.map((el)=>(
      <MobileComponent data={el}/>
    ))}
  </div>
}

function MobileComponent({data}){
  return (
    <div className='mobile'>
      <h2>{data['Heading']}</h2>
      {data['data'].map((el)=>(
        <li>{el}</li>
      ))}
    </div>
  )
}
export default App;
