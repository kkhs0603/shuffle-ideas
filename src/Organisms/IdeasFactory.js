import React ,{ useState, useReducer,useEffect  } from 'react';
import CountAndHistory from '../Molecules/CountAndHistory'
import SendIdea from '../Molecules/SendIdea'
import GetIdea from '../Molecules/GetIdea'
import firebase from "firebase";
import "firebase/storage";
import reducer from '../reducers'
import {useSelector} from "react-redux";

const IdeasFactory = () => {
  const [state, dispatch] = useReducer(reducer,[])
  const [ideas, setIdeas] = useState([])
  const addFireData = (idea) => {
    console.log("add : "+idea)
    let db = firebase.database();
    let ref = db.ref('ideas/3');
    ref.set({idea: idea})
  }
  const getFireData = () => {
    let db = firebase.database();
    console.log('db')
    let ref = db.ref('ideas');
    ref.on('value', (snapshot)=> {
      console.log(snapshot.val())
      snapshot.val()
      setIdeas([...ideas,snapshot.val()])
    });
    console.log(ideas)
  }
  const userState = useSelector(state => {console.log(state); return state.values});
  const setIdea = () => {
    console.log(userState);
    let db = firebase.database();
    let ref = db.ref('ideas');
    ref.push({
      "idea":"test"
    });
  }

  
  
  return(
    <div>
      <CountAndHistory/>
      <SendIdea onClick={setIdea}/>
      <GetIdea/>
    </div>
  )
}

export default IdeasFactory