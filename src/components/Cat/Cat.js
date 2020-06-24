import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styles from './Cat.module.scss';

function getCatFace(mood) {
  switch (mood) {
    case 'love':
      return <span role="img" aria-label="Loving cat">😻</span>
    case 'happy':
      return <span role="img" aria-label="Happy cat">😸</span>
    case 'sad':
      return <span role="img" aria-label="Happy cat">😿</span>
    case 'grumpy':
      return <span role="img" aria-label="Grumpy cat">😾</span>
    default:
      return <span role="img" aria-label="Cat">🐱</span>
  }
}

function getCatThought(thought) {
  switch (thought) {
    case 'food':
      return <span role="img" aria-label="I'm hungry'">🍗</span>
    case 'water':
      return <span role="img" aria-label="I'm thirsty">💧</span>
    case 'poop':
      return <span role="img" aria-label="I need to poop">💩</span>
    case 'sleep':
      return <span role="img" aria-label="I'm tired'">💤</span>
    case 'play':
      return <span role="img" aria-label="I'm bored">🧶</span>
    default:
      return null
  }
}

function Cat(props) {
  const { feed, water, play } = props;
  const [ open, setOpen ] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <div className={styles.Cat}>
      <div className="">
        <div className={styles.face}>
          {getCatFace(props.mood)}
        </div>
        <div className={styles.thought}>
          {getCatThought(props.thought)}
        </div>
        <nav>
          <button className={styles.toggle} onClick={toggleOpen}>Actions</button>
          <ul className={`${styles.actions} ${open ? styles.open : ''}`} >
            <li><button onClick={() => {toggleOpen(); feed();}}>Feed</button></li>
            <li><button onClick={() => {toggleOpen(); water();}}>Water</button></li>
            <li><button onClick={() => {toggleOpen(); play();}}>Play</button></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

Cat.propTypes = {
  feed: PropTypes.func,
  water: PropTypes.func,
  play: PropTypes.func,
  mood: PropTypes.string,
  thought: PropTypes.string,
}


Cat.defaultProps = {
  feed: () => {},
  water: () => {},
  play: () => {},
  mood: '',
  thought: '',
}

export default Cat;