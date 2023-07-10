/* eslint-disable react/jsx-pascal-case */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Teachers_Page from './components/teacher/teachers';
import AddTeacher from './components/teacher/addteacher';
import { useState } from 'react';
import { studentData, teacherData } from './data/datas';

import Students_Page from './components/student/student';
import AddNewStudent from './components/student/addstudent';
import EditUser from './components/student/editStudent';
import EditTeacher from './components/teacher/editteacher';
import ViewStudent from './components/student/viewstudents';
import ViewTeacher from './components/teacher/viewteacher';
import UserDetails from './components/UserDetails/User';

function App() {
  const [teacher,setTeacher] = useState(teacherData);
  const [student,setStudent] = useState(studentData);

  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <UserDetails/>
        </Route>

        <Route path={"/students"}>
          <Students_Page student={student} setStudent={setStudent} />
        </Route>

        <Route path={"/addstudent"}>
          <AddNewStudent student={student} setStudent={setStudent} />
        </Route>

        <Route path={"/editstudent/:id"}>
          <EditUser student={student} setStudent={setStudent} />
        </Route>

        <Route path={"/view/student/:id"}>
          <ViewStudent student={student} setStudent={setStudent} />
        </Route>

        <Route path={"/teacher"}>
          <Teachers_Page teacher={teacher} setTeacher={setTeacher} />
        </Route>

        <Route path={"/addteacher"}>
          <AddTeacher teacher={teacher} setTeacher={setTeacher} />
        </Route>

        <Route path={"/edit/teacher/:id"}>
          <EditTeacher teacher={teacher} setTeacher={setTeacher} />
        </Route>

        <Route path={"/view/teacher/:id"}>
          <ViewTeacher teacher={teacher} setTeacher={setTeacher} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;