import React from 'react' ;
import ReactDOM from 'react-dom';


const App = () => {
    return [
            <nav>
                <img src='images/ironhack-logo.svg'/>
                <img src='images/menu-top.svg'/>
            </nav>,
            <div>
                <h1 className='test'>Say helloo to ReactJS</h1>,
                <p>You will learn how to use the most popular frontend library, and becopme a super Nnja developer</p>,
                <button>Awesome!</button>
            </div>,
            <div>
                <article>
                    <img src="images/icon1.png"/>
                    <h2>Declarative</h2>
                    <p>React makes it painless to create interactive UIs.</p>
                </article>
                <article>
                    <img src="images/icon2.png"/>
                    <h2>Compoments</h2>
                    <p>React makes it painless to create interactive UIs.</p>
                </article>
                <article>
                    <img src="images/icon3.png"/>
                    <h2>Single Way</h2>
                    <p>React makes it painless to create interactive UIs.</p>
                </article>
                <article>
                    <img src="images/icon4.png"/>
                    <h2>JSX</h2>
                    <p>React makes it painless to create interactive UIs.</p>
                </article>
            </div>
            
]
};

ReactDOM.render(<App />, document.getElementById('root'));