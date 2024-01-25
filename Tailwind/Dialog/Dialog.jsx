import SweetAlert from "react-bootstrap-sweetalert";
import { useSelector,useDispatch } from "react-redux";
import { Icon } from "..";
const Dialog = ({title=null,children}) =>{
      const dispatch = useDispatch();
     const DialogReducer = useSelector(response=>response.DialogReducer)
     const design = (
      <>
         <SweetAlert
         title={title}
         show={DialogReducer.open}
         showConfirm={false}
         >
            <Icon className="absolute top-3 right-3" 
            style={{cursor:"pointer"}}
            onClick={()=>dispatch({type : "CLOSE_DIALOG"})}
            > close
            </Icon>
            {children}
         </SweetAlert>
      </>
     );
     return design;
}
export default Dialog;