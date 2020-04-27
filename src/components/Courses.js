// import React from 'react';
// import axios from 'axios';


// function courses(props) {            
//     return (         
//                     <tr className="table-row">
//                         <td>{props.CourseId}</td>
//                         <td>{props.CourseName}</td>
//                         <td>{props.Provider}</td>  
//                         <td>{props.universitry}</td>  
//                         <td>{props.parentSubject}</td>  
//                         <td>{props.childSubject}</td>  
//                         <td>{props.url}</td>  
//                         <td>{props.nextSessionDate}</td>  
//                         <td>{props.length}</td>  
//                         <td>{props.videoUrl}</td>  
//                     </tr>                                                 
                  
//     )
// }

// export default courses;

import React from 'react'
import axios from 'axios';

class Courses extends React.Component {

  constructor(props) {
    super(props);   
    this.state = {      
      courses: []
    
    }
  }
  componentDidMount() {
        axios.get('courses')
        .then(response=>{
            // console.log(response.data) 
            this.setState({"courses":response.data.courses})
        })
        .catch(error=>{
            console.log(error)
        })
      }
  render() {
      // console.log(this.state.courses)
    return (
      
      <div >                           
          <table>
            <thead>              
              <tr>
                <td>Course Id</td>
                <td>Course Name</td>
                <td>Provider</td>
                <td>Universities/Institutions</td>
                <td>Parent Subject</td>
                <td>Child Subject</td>
                <td>Url</td>
                <td>Next Session Date</td>
                <td>Length</td>
                <td>Video(Url)</td>
            </tr>               
          </thead>
          <tbody > 
                {
                    this.state.courses.map(row =>(
                        <tr>
                            <td >{row["Course Id"]}</td>
                            <td>{row["Course Name"]}</td>
                            <td>{row["Provider"]}</td>
                            <td>{row["Universities/Institutions"]}</td>
                            <td>{row["Parent Subject"]}</td>
                            <td>{row["Child Subject"]}</td>
                            <td>{row["Url"]}</td>
                            <td>{row["Next Session Date"]}</td>
                            <td>{row["Length"]}</td>
                            <td>{row["Video(Url)"]}</td>
                        </tr>
                    ))
                }     
          </tbody>
          </table>                
      </div>
    )
  }
   
}

export default Courses;
