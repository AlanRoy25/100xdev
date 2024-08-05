import PropTypes from "prop-types"

function UserGreeting(props){

  // if(props.isLoggedIn){
  //   return <h2> Welcome {props.username}</h2>
  // }
  // else{
  //   return <h2>Please Login to continue</h2>
  // }

  //orelse we can use ternary operator

  return (props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please login </h2>  )
}

UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string
}

UserGreeting.defaultProps = {
  isLoggedIn: true,
  username: "aki"
}

export default UserGreeting