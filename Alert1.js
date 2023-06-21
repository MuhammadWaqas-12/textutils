

function Alert1(props) {
  return (
   
     props.Alert1 && <div class={`alert alert- ${props.Alert1.type}warning alert-dismissible fade show`} role="alert">
     <strong>{props.Alert1.type}</strong>:{props.Alert1.msg}
</div>
   
  )
}

export default Alert1
