const Container = props => {
    console.log(props)
    return <div className='componentCtn'>{props.children}</div>
  }
  
  export default Container