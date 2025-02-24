import s from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
// import {useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';

const App = () => {
//   useEffect(() => {
//     const abortController = new AbortController()

//     axios
//       .get('https://dummyjson.com/test', {signal: abortController.signal})
//       .then(res => console.log(res.data))
//       .catch(error => {
//         if (axios.isCancel(error)) {
//           console.log('Cancel with abort controller');
//           toast.error('Cancel abort controller');
//         }
//       console.log(error);
//       });
    
//     return () => {
//       abortController.abort()
//     }
// }, []);
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <SearchBox/>
      <ContactForm/>
      <ContactList/>
    </div>
  );
};

export default App;
