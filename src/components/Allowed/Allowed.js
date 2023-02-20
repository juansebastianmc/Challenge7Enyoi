import { useState } from 'react';
const Allowed =() => {

const [isAllowed, setIsAllowed] = useState(false)

  const functionToGetchildData = (validateRouteLogin) => {
    if (validateRouteLogin === '') {
      setIsAllowed(true)
    } else {
      setIsAllowed(false)
    }
    console.log('isAllowed', isAllowed)
  }
}
 export default Allowed;
    