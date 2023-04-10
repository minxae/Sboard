import { ToastContainer } from "react-toastify";
import "../css/pages/sboard.css"
import "../css/pages/studentView.css"
import StudentViewTeacherAva from "../widgets/studentViewTeacherAva";
import StudentViewSlideShow from "../widgets/studentViewSlideshow";

function StudentView() {
    return (
        <div className='container-fluid wrapper'>
            <ToastContainer/>
            <div className='row h-100'>
                <div className="col-md-4 p-4">
                    <StudentViewTeacherAva/>
                </div>
                <div className="col-md-8 p-4">
                    <StudentViewSlideShow/>
                </div>
            </div>
        </div>
    );
  }
  
  export default StudentView;