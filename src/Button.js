const Button =()=>{

   const onClick = ()=>{
      alert('Clicked')
    }

    return(
        <div>
            <button onClick={onClick}>Click Me</button>
        </div>
    )
}

export default Button;