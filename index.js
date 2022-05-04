import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css';

const firstBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/71aFt4+OTOL._AC_UL604_SR604,400_.jpg',
  title: 'The Alchemist',
  author: 'Paulo Coelho'
}
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg',
  title: 'Amelia Hepworth',
  author: 'I Love You to the Moon and Back'
}

function BookList(){
  return (
  <section className='booklist'>
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
  </section>
  );
}


const Book = (props) => {
  return (
  <article className='book'>
    <img src= {props.img}
alt=''
/>
<h1>{props.title}</h1>
<h4>{props.author}</h4>
    </article>
    );
};

ReactDom.render(<BookList />, document.getElementById('root'));