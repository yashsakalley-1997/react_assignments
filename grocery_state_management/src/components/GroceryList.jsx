export const GroceryList = ({items,pageCounter,deleteFunction})=>{
    return <>
        {items.map((e)=>(
            <div>
                <p>{e.title}</p>
            <button onClick={()=>(
                deleteFunction(e)
            )}>DELETE</button>
            </div>
        ))}

        <button onClick={()=>(
            pageCounter(1)
        )}>Next</button>
        <button onClick={()=>{  
            pageCounter(-1)
        }}>Prev</button>
    </>
}