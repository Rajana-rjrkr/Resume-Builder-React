import BASEURL from "./baseURL"
import commonAPI from "./commonAPI"


//addResumeAPI - POST
export const addResumeAPI = async (resume)=>{
   return await commonAPI("POST",`${BASEURL}/all-resume`,resume)
}
//editResumeAPI - PUT - called by edit component when update button gets clicked.
export const editResumeAPI = async (id,resume)=>{
   return await commonAPI("PUT",`${BASEURL}/all-resume/${id}`,resume)
}

//add history API- POST
export const addDownloadHistoryAPI = async (resume)=>{
 return await commonAPI("POST",`${BASEURL}/history`,resume)
}

//get history API - GET : called by component when its page open in browser (useEffect)
export const getHistoryAPI = async()=>{
  return await commonAPI("GET",`${BASEURL}/history`,{})
}

//delete history API - DELETE( delete called by history when delete btn is called)

export const deleteHistoryAPI = async(id)=>{
  return await commonAPI("DELETE",`${BASEURL}/history/${id}`,{})
}

// getAResumeAPI - GET called by Edit component when its opening in the browser (useEffect)
export const getAResumeAPI = async(id)=>{
  return await commonAPI("GET",`${BASEURL}/all-resume/${id}`,{})
}