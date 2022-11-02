import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import { Component } from 'react';
import { useState,useEffect } from 'react';

const App = () => {
  console.log('render');
  const[searchField,setSearchField] =useState('');
  const [monster, setMonsters]=useState([]);
  const[filteredMonsters, setFieldMosnters]=useState(monster);
  console.log('render')


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json() )
      .then((users)=> setMonsters(users)
      );
  },[]);

  useEffect(()=>{
    const newfilteredMonsters=monster.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    setFieldMosnters(newfilteredMonsters);

  },[monster,searchField])
  

  const onSearchChange=(event)=>{
    const searchFielString= event.target.value.toLocaleLowerCase();
    setSearchField(searchFielString);
  };

  

  return(
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox 
      className='monsters-search-box'
      onChangeHandler={onSearchChange}
      placeholder='search monsters'/>
      <CardList monsters={filteredMonsters}/>
      
    </div>
  );

};
// // class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       monsters:[],
//       searchField: ''
//     };
    
//   }

//   componentDidMount(){
    
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json() )
//     .then((users)=> this.setState(()=>{
//       return {monsters:users}
//     },
//     ));
//   }

//   onSearchChange=(event)=>{
//     console.log(event.target.value);
//     const searchField =event.target.value.toLocaleLowerCase();

//   this.setState(()=>{
//     return {searchField};

//   });

// }
//   render(){
    
//     const{monsters,searchField}=this.state;
//     const{onSearchChange}=this;

//     const filteredMonsters=monsters.filter((monster)=>{
//       return  monster.name.toLocaleLowerCase().includes(searchField);
//   });

//     // return( 
//     // // <div className='App'>
//     //   <h1 className='app-title'>Monster Rolodex</h1>
//     //   <SearchBox 
//     //   className='monsters-search-box'
//     //   onChangeHandler={onSearchChange}
//     //   placeholder='search monsters'/>
//     //   <CardList monsters={filteredMonsters}/>
      
//     // </div>
//     // );
//   }

// }

export default App;
