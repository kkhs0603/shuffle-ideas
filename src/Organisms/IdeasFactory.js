import React ,{ useState, useReducer,useEffect  } from 'react';
import CountAndHistory from '../Molecules/CountAndHistory'
import SendIdea from '../Molecules/SendIdea'
import GetIdea from '../Molecules/GetIdea'
import firebase from "firebase";
import "firebase/storage";
import reducer from '../reducers'

const IdeasFactory = () => {
  // const test = () => {
  //   return console.log("a")
  // }
  // useEffect(()=>{

  //   return test
  // }
  // )
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
      setIdeas(snapshot.val())
      snapshot.val()
      setIdeas([...ideas,snapshot.val()])
    });
    console.log(ideas)
  }
  
  const getLastID = () => {
    let db = firebase.database();
    let ref = db.ref("ideas/");
    let self = this;
    let hoge;
    ref
      .orderByKey()
      .limitToLast(1)
      .on("value", snapshot => {
        let res = snapshot.val();
        console.log(res)
        for (let i in res) {
          console.log(res[i].id);
          hoge = res[i].id;
          // return res[i].id;
        }
      });
    return hoge
  }
  return(
    <div>
      <CountAndHistory/>
      <SendIdea onClick={getFireData}/>
      <GetIdea/>
    </div>
  )
}

export default IdeasFactory