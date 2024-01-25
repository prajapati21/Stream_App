import AdminPanel from "../../../../components/AdminPanel/AdminPanel";
import Movies from "../../../../components/Movies/Movies";
const Page = () =>{
     const design =(
      <>
          <AdminPanel>
            <Movies/>
          </AdminPanel>
      </>
     );
     return design;
}
export default Page;