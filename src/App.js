import React, { useState } from 'react'

const Square = ({symbol, setSymbol}) => {

  return (
    <button onClick={setSymbol} class='square' className={'grid grid-rows-3 gap-2 text-4xl p-4  sm:size-16 size-24 border-2 border-pink-500'}>{symbol}</button>
  )
}

const calculateWinner=(squares)=>{

   const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  for (let x = 0; x < lines.length; x++) {
    const [a, b, c] = lines[x];
    if (squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
 
}



const Board = () => {
  const [squares, setSquares]=useState(Array(9).fill(null));
  const [isX, setIsX]=useState(true);

  const handleButton=(x)=>{
    if (squares[x] || calculateWinner(squares)){
      return;
    }
    const nextMove=squares.concat();
    isX? nextMove[x]="X" : nextMove[x]="O";
    setSquares(nextMove);
    setIsX(!isX);
  }

  const handleReset=()=>{
    setSquares(Array(9).fill(null))
    setIsX(true)
    
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = winner + " is winner";
  }else if(squares.every((e)=>e!==null)){
      status="It's a tie"
  }
  else {
    status =   (isX ? "X" : "O") + "'s Turn ";
  }

  return (
    <div className='flex items-center flex-col bg-pink-950  text-white min-h-screen'>
    
    
    <div className={'flex justify-center  items-center sm:mt-48 mt-20 sm:mb-6 mb-12  p-2 sm:text-2xl text-4xl  '} >{status}
    </div>

    <div className=' mt-0 mb-0 flex   '>
    <div>
      <Square setSymbol={()=>handleButton(0)} symbol={squares[0]}>1</Square>
      <Square setSymbol={()=>handleButton(1)} symbol={squares[1]}>2</Square>
      <Square setSymbol={()=>handleButton(2)} symbol={squares[2]}/>
    </div>
    <div>
      <Square setSymbol={()=>handleButton(3)} symbol={squares[3]}/>
      <Square setSymbol={()=>handleButton(4)} symbol={squares[4]}/>
      <Square setSymbol={()=>handleButton(5)} symbol={squares[5]}/>
    </div>
    <div>
      <Square setSymbol={()=>handleButton(6)} symbol={squares[6]}/>
      <Square setSymbol={()=>handleButton(7)} symbol={squares[7]}/>
      <Square setSymbol={()=>handleButton(8)} symbol={squares[8]}/>
    </div>
    </div>
    <button className='bg-pink-200 rounded-md px-2 m-2 text-pink-950 text-lg' onClick={handleReset}>
      reset
    </button>
    </div>
  )
}


export default Board














// import React, { useState } from 'react'

// const App = () => {

//   const [isX, setIsX]=useState(false)

//   const handleButton=()=>{
//     setIsX(isX?"X":"O")
//   }

//   return (
//     <div className=''>
//     <div className=''>
//       <button onClick={handleButton} className="text-4xl border-2 p-4 size-16 border-black">{setIsX}</button>
//       <button onClick={handleButton} className='text-4xl border-2 p-4 size-16 border-black'>{isX?"X":"O"}</button>
//       <button className='text-4xl border-2 p-4 size-16 border-black'></button> 
//     </div>
//     <div className='m-'>
//       <button className='text-4xl border-2 p-4 size-16 border-black'></button>
//       <button className='text-4xl border-2 p-4 size-16 border-black'></button>
//       <button className='text-4xl border-2 p-4 size-16 border-black'></button> 
//     </div>
//     <div className='m-'>
//       <button className='text-4xl border-2 p-4 size-16  border-black'></button>
//       <button className='text-4xl border-2 p-4 size-16 border-black'></button>
//       <button className='text-4xl border-2 p-4 size-16 border-black'></button> 
//     </div>
//     </div>

//   )
// }

// export default App