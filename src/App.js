import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Library } from "./Library";
import { Home } from "./Home";

import { Economics } from "./Economics";
import { History } from "./History";
import { Science } from "./Science";
import { Geography } from "./Geography";

import { useState } from "react";

import { historydata } from "./historydata";
import { scidata } from "./scidata";
import { geodata } from "./geodata";
import { ecodata } from "./ecodata";

import { Scienceview } from "./Scienceview";
import { Hisview } from "./Hisview";
import { Geoview } from "./Geoview";
import { Ecoview } from "./Ecoview";

import { Ecoadd } from "./Ecoadd";
import { Geoadd } from "./Geoadd";
import { Hisadd } from "./Hisadd";
import { Scienceadd } from "./Scienceadd";

import { Hisedit } from "./Hisedit";
import { Ecoedit } from "./Ecoedit";
import { Geoedit } from "./Geoedit";
import { Scienceedit } from "./Scienceedit";


function App() {
  
  
  const[his,setHis]=useState(historydata);
  const[science,setScience]=useState(scidata);
  const[geo,setGeo]=useState(geodata);
  const[eco,setEco]=useState(ecodata);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
          </Route>
        <Route path="/library">
          <Library />
        </Route>
        
        <Route path="/history">
          <History his={his} setHistory={setHis}/>
        </Route>
        <Route path="/science">
          <Science science={science} setScience={setScience} />
        </Route>
        <Route path="/geography">
          <Geography geo={geo} setGeo={setGeo}/>
        </Route>
        <Route path="/economics">
          <Economics eco={eco} setEco={setEco}/>
        </Route>



        <Route path="/ecoedit/:id">
          <Ecoedit eco={eco} setEco={setEco}/>
        </Route>
        <Route path="/ecoview/:id">
          <Ecoview eco={eco} setEco={setEco}/>
        </Route>
        <Route path="/ecoadd">
          <Ecoadd eco={eco} setEco={setEco}/>
        </Route>


        <Route path="/geoadd">
        <Geoadd geo={geo} setGeo={setGeo}/>
        </Route>
        <Route path="/geoedit/:id">
        <Geoedit geo={geo} setGeo={setGeo}/>
        </Route>
        <Route path="/geoview/:id">
        <Geoview geo={geo} setGeo={setGeo}/>
        </Route>


        <Route path="/hisview/:id">
        <Hisview his={his} setHis={setHis}/>
        </Route>
        <Route path="/hisedit/:id">
        <Hisedit his={his} setHis={setHis}/>
        </Route>
        <Route path="/hisadd">
        <Hisadd his={his} setHis={setHis}/>
        </Route>


        <Route path="/scienceadd">
        <Scienceadd science={science} setScience={setScience} />
        </Route>
        <Route path="/scienceedit/:id">
        <Scienceedit science={science} setScience={setScience} />
        </Route>
        <Route path="/scienceview/:id">
        <Scienceview science={science} setScience={setScience} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;



