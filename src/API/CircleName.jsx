import {React,useState,useEffect} from 'react'
import axios from 'axios';
import { v4 } from 'uuid';
import moment from 'moment/moment';


const CircleName = () => {

    /* Defining Headers for Axios*/

const officeNamesApiURL =  "https://api.postalpincode.in/pincode/600001";
var config = {
                headers: {
                    
                    },
             }  

/* Declaring and Initializing Currency Variable using 
useState*/

const [officeNames, setofficeNames] = useState([])

/* Calling API Values using axios and 
rendering on page loading using useEffect*/
        const FetchCall=()=>{
        axios.get(officeNamesApiURL,config)
        .then(function(res){
        console.log(res.data)
        setofficeNames(res.data)
        })
        }

        useEffect(() => {
        FetchCall();
        }, [])
  return (
    <h1>Circle Name</h1>
  )
}

export default CircleName