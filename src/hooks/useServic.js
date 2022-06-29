import { useEffect, useState } from "react"

const useServic=() =>{
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://infinite-waters-38341.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services,setServices]
}
export default useServic;