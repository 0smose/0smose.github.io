import React from 'react';
import MyWorks from '../components/MyWorks'
import progame from '../img/progame.png'
import eventbrite from '../img/eventbrite.png'
import sharesquare from '../img/sharesquare.png'
import fako_fashion from '../img/fako-fashion.png'
import boat from '../img/merry.png'

const Works = () => {

  return (
    <div className="container">
      {/* <ul>
        <li>
          <h1 className="title">Im works page</h1>
        </li>
        <li className="test" id='first-work'>
          <MyWorks title={"my first work"}></MyWorks>
        </li>
        <li className="test" id='second-work'>
          <MyWorks title={"my second work"}></MyWorks>
        </li>
        <li className="test" id='third-work'>
          <MyWorks title={"my third work"}></MyWorks>
        </li>
      </ul> */}
      <section id="work">
        <h1 className="title">Im works page</h1>
        <div className="boat">
          <img src={boat} alt=""/>
        
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </div>
      </section>
      
      <section id='first-work'>
        <MyWorks title={"my first work"} img={progame} 
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam urna bibendum, vulputate nulla quis, suscipit ipsum. Nullam quis ante enim. Integer aliquam rhoncus purus, sit amet commodo ante maximus nec. Sed convallis facilisis urna sed tincidunt. Integer non ipsum neque. Nunc sodales purus eu odio venenatis, eget vulputate urna venenatis. Ut suscipit, nunc vitae finibus finibus, arcu enim bibendum neque, sollicitudin sagittis turpis urna vel justo. Aenean sit amet augue at nulla egestas consequat. Nulla bibendum, eros et condimentum consequat."}></MyWorks>
      </section>
      <section id='second-work'>
        <MyWorks title={"my second work"} img={eventbrite}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam urna bibendum, vulputate nulla quis, suscipit ipsum. Nullam quis ante enim. Integer aliquam rhoncus purus, sit amet commodo ante maximus nec. Sed convallis facilisis urna sed tincidunt. Integer non ipsum neque. Nunc sodales purus eu odio venenatis, eget vulputate urna venenatis. Ut suscipit, nunc vitae finibus finibus, arcu enim bibendum neque, sollicitudin sagittis turpis urna vel justo. Aenean sit amet augue at nulla egestas consequat. Nulla bibendum, eros et condimentum consequat."}></MyWorks>
      </section>
      <section id='third-work'>
        <MyWorks title={"my third work"} img={sharesquare}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam urna bibendum, vulputate nulla quis, suscipit ipsum. Nullam quis ante enim. Integer aliquam rhoncus purus, sit amet commodo ante maximus nec. Sed convallis facilisis urna sed tincidunt. Integer non ipsum neque. Nunc sodales purus eu odio venenatis, eget vulputate urna venenatis. Ut suscipit, nunc vitae finibus finibus, arcu enim bibendum neque, sollicitudin sagittis turpis urna vel justo. Aenean sit amet augue at nulla egestas consequat. Nulla bibendum, eros et condimentum consequat."}>
        </MyWorks>
      </section>
      <section id='fourth-work'>
        <MyWorks title={"my fourth work"} img={fako_fashion}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam urna bibendum, vulputate nulla quis, suscipit ipsum. Nullam quis ante enim. Integer aliquam rhoncus purus, sit amet commodo ante maximus nec. Sed convallis facilisis urna sed tincidunt. Integer non ipsum neque. Nunc sodales purus eu odio venenatis, eget vulputate urna venenatis. Ut suscipit, nunc vitae finibus finibus, arcu enim bibendum neque, sollicitudin sagittis turpis urna vel justo. Aenean sit amet augue at nulla egestas consequat. Nulla bibendum, eros et condimentum consequat."}>
        </MyWorks>
      </section>
    </div>
  )
}
export default Works;