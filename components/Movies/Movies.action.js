import { 
          MOVIES_REQUEST,
          MOVIES_SUCCESS,
          MOVIES_FAILED
 } from "./Movies.state";
 import axios from "axios";

export const create = (data) =>{
      return async (dispatch) =>{
            try{
                  dispatch({
                        type : MOVIES_REQUEST
                  });
                  const response = await axios({
                        method : "post",
                        url : "/api/s3"
                  });
                  dispatch({
                        type : MOVIES_SUCCESS,
                        payload : response.data.data
                  });
            }
            catch(error)
            {
                  dispatch({
                        type : MOVIES_FAILED,
                        payload : error.response
                  });
            }
      }
}