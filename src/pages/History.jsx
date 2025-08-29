import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI';

function History() {

  //  State to store the resume history data (initially empty array)
  const [resume, setResume] = useState([])


  // useEffect runs automatically when component mounts (first render)
  // [] = empty dependency array → runs only once
  useEffect(() => {
    getHistory()
  }, [resume])

  const getHistory = async () => {
    try {
      const result = await getHistoryAPI()
      // console.log(result);

      setResume(result.data)
    } catch (err) {
      console.log(err);

    }
  }
  // console.log(resume);

  const handleRemoveHistory = async (id)=>{
    try{
      await deleteHistoryAPI(id)
      getHistory()
    }catch(err){
      console.log(err);
      
    }
  }

  return (
    <>
      <div className=''>
        <h1 className='text-center my-5'>Resume Downloaded History</h1>
        <Link to={'/'} className='btn btn-primary float-end' style={{ marginTop: "-50px", marginRight: "20px" }} >Back</Link>
      </div>
      <Box component="section" className='container-fluid'>
        <div className='row'>
          {
            resume.length > 0 ?
              resume?.map((item, index) => (
                <div key={index} className='col-md-4'>
                  <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: "center" }}>
                    <div className='d-flex align-items-center justify-content-between'>
                      <h6>Downloaded At : <br /> {item?.timeStamp}</h6>
                      <button onClick={()=>handleRemoveHistory(item?.id)} className='btn text-danger fs-4 '><MdDelete /></button>
                    </div>
                    <div className='border rounded p-1 m-1'>
                      <img className='img-fluid' src={item?.imgURL} alt="resume" />
                    </div>
                  </Paper>
                </div>
              ))
              :
              <p>History is Empty</p>
          }
        </div>
      </Box>
    </>
  )
}

export default History
