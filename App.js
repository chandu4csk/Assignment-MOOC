import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Courses from './components/Courses';

class App extends Component {

  constructor(props) {
    super(props);   
    this.state = {      
      displayCourses: true,      
      displayFilteredCourses: [

      ],
      coursesList: [

      ]
    

    }
  }
  
  componentDidMount() {
    this.getCoursesList();
  }
  
  // Retrieving and Setting data into coursesList
  getCoursesList = async() => {    
      try{
            let res = await axios(`http://localhost:5678/courses`);
            let courses = res.data;
            console.log(res); 
            await this.setState({coursesList: courses});                        
            
      } catch (err) {
        console.log(err);
      }
    }
        
    getFilterProviders = (providerName) => {
    
    this.setState({displayCourses: false})       
        
    let tBodyId = document.getElementById('tBody');
    let tBodyChildren = document.querySelector('.t-body').children;
    
    for (var i of tBodyChildren) {
      i.classList.add('hidden');          
    }                
        this.state.coursesList.filter((provider)=> { 
               
          let res = "";
            if (provider.Provider === providerName) {                                                                     
              res = res + `<tr className="table-row">
                          <td>${provider["Course Id"]}</td>
                          <td>${provider["Course Name"]}</td>
                          <td>${provider.Provider}</td>
                          <td>${provider["Universities/Institutions"]}</td>
                          <td>${provider["Parent Subject"]}</td>
                          <td>${provider["Child Subject"]}</td>
                          <td>${provider.Url}</td>
                          <td>${provider["Next Session Date"]}</td>
                          <td>${provider.Length}</td>
                          <td>${provider["Video(Url)"]}</td>
                          </tr>`;
            }
            tBodyId.insertAdjacentHTML('afterbegin', res);            
    })
  }

  
  // Sorting Length triggerFunction
  triggerFunction = (value) => {
        let sortCoursesList = [this.state.coursesList];

        sortCoursesList.sort(function(a, b){
                    
          
          if (value == 'LengthASC'){  
            let parA = parseInt(a.Length);
            let parB = parseInt(b.Length);
            if ( parA > parB ){
              return -1;
            }
            if ( parA < parB ){
              return 1;
            }
            return 0;
        
          } 

          else if (value == 'LengthDESC') {
            let parA = parseInt(a.Length);
            let parB = parseInt(b.Length);
            if ( parB > parA ){
              return -1;
            }
            if ( parB < parA ){
              return 1;
            }            
            return 0;
          } 
          else if (value == 'ChildSubject'){
            let parA = a.Length;
            let parB = b.Length;

            if ( parA > parB ){
              return -1;
            }
            if ( parA < parB ){
              return 1;
            }
            return 0;
          }
          else if (value == 'NextSessionDate'){

            let chng = (value) => {
              if(value.includes('th')){                               
                        return value.replace(/th/, '');
                    }                     
                    else if (value.length == 8){
                      return new Date(value).getTime();
                    }
                    else if (value.includes('Self paced')){                      
                        return value.replace(/Self paced/, '0');                        
                    } else if (value.includes('NA')){
                        return value.replace(/NA/, '0');                        
                    } else if (value.length == 0){                      
                        return 0;                  
                    } 
          }
            let parA = chng(a["Next Session Date"]); 
            let parB = chng(b["Next Session Date"]);
            
            let dateA = new Date(parA), dateB = new Date(parB);
            return dateA - dateB;    
          }      
      });  

      
      let tBodyId = document.getElementById('tBody');
        let tBodyChildren = document.querySelector('.t-body').children;
        
        for (var i of tBodyChildren) {
          i.classList.add('hidden');          
        }

      sortCoursesList.map(course => {
        let res = "";
                                                                              
          res = res + `<tr className="table-row">
                      <td>${course["Course Id"]}</td>
                      <td>${course["Course Name"]}</td>
                      <td>${course["Provider"]}</td>
                      <td>${course["Universities/Institutions"]}</td>
                      <td>${course["Parent Subject"]}</td>
                      <td>${course["Child Subject"]}</td>
                      <td>${course.Url}</td>
                      <td>${course["Next Session Date"]}</td>
                      <td>${course.Length}</td>
                      <td>${course["Video(Url)"]}</td>
                      </tr>`;          
                    tBodyId.insertAdjacentHTML('afterbegin', res);
      })    
  }
  
  render() {

    let coursesListNew = [this.state.coursesList]; 
    let courses = null;

    
    if (this.state.displayCourses){

        courses =  coursesListNew.map((course, index) => {
          
              return (                                                     
                    <Courses key={index}                
                          CourseId = {course["Course Id"]}
                          CourseName = {course["Course Name"]}
                          Provider = {course["Provider"]}
                          universitry = {course["Universities/Institutions"]}
                          parentSubject = {course["Parent Subject"]}
                          childSubject = {course["Child Subject"]}                  
                          url = {course.Url}
                          nextSessionDate = {course["Next Session Date"]}
                          length = {course.Length}
                          videoUrl = {course["Video(Url)"]}/>  
                    )
                })  
    }
    
    return (
      
      <div className="App">        
          <section id="filter-sort">
        <div id="filter">                                    
            <select id="" onChange={(e) => this.getFilterProviders(e.target.value)}>
                <option value= "selected hidden disabled">Filter</option>                 
                <option value="Complexity Explorer">Complexity Explorer</option>
                <option value="Coursera">Coursera</option>
                <option value="Desire2Learn">Desire2Learn</option>
                <option value="EdCast">EdCast</option>
                <option value="Edraak">Edraak</option>
                <option value="edX">edX</option>
                <option value="EMMA">EMMA</option>
                <option value="First Business MOOC">First Business MOOC</option>
                <option value="France Université Numerique">France Université Numerique</option>
                <option value="Georgia Tech Online Master of Science in Computer Science">Georgia Tech Online Master of Science in Computer Science</option>
                <option value="FutureLearn">FutureLearn</option>
                <option value="gacco">gacco</option>
                <option value="IONIS">IONIS</option>
                <option value="iversity">iversity</option>
                <option value="Janux">Janux</option>
                <option value="Kadenze">Kadenze</option>
                <option value="Miríada">Miríada X</option>
                <option value="MongoDB University">MongoDB University</option>
                <option value="MOOC-ED">MOOC-ED</option>
                <option value="MRUniversity">MRUniversity</option>
                <option value="NovoED">NovoED</option>
                <option value="NPTEL">NPTEL</option>
                <option value="Open Education by Blackboard">Open Education by Blackboard</option>
                <option value="Open2Study">Open2Study</option>
                <option value="OpenClassrooms">OpenClassrooms</option>
                <option value="openHPI">openHPI</option>
                <option value="OpenLearning">OpenLearning</option>
                <option value="openSAP">openSAP</option>
                <option value="Polimi OPEN KNOWLEDGE">Polimi OPEN KNOWLEDGE</option>
                <option value="Rwaq (رواق)">Rwaq (رواق)</option>
                <option value="Stanford OpenEdx">Stanford OpenEdx</option>
                <option value="Udacity">Udacity</option>
                <option value="Udemy">Udemy</option>
                <option value="UPV [X]">UPV [X]</option>
                <option value="World Science U">World Science U</option>
            </select>
        </div>
        <div id="sort">
            <select id="" onChange={(e) => this.triggerFunction(e.target.value)}>
                <option value=" selected hidden disabled">Sort</option>
                <option value="NextSessionDate">Next Session Date</option>
                <option value="LengthASC">Length ASC</option>
                <option value="LengthDESC">Length DESC</option>
                <option value="ChildSubject">Child Subject</option>
            </select>            
        </div>
        <div>          
        </div>
    </section>                                      
          <table>
            <thead>              
              <tr>
                <td>Course Id</td>
                <td>Course Name</td>
                <td>Provide</td>
                <td>Universities/Institutions</td>
                <td>Parent Subject</td>
                <td>Child Subject</td>
                <td>Url</td>
                <td>Next Session Id</td>
                <td>Length</td>
                <td>Video(Url)</td>
            </tr>               
          </thead>
          <tbody className="t-body" id="tBody"> 
          { courses }
          
          </tbody>
          </table>                
      </div>
    )
  }
  
}

export default App;

