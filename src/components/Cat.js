import React from 'react'
import styles from './Cat.module.css';

export default function Cat(props) {
  switch (props.activity) {
    case 'eating':
      return <span class={styles.Cat} role="img" aria-label="Eating cat">😽🍗</span>
    case 'pouting':
      return <span class={styles.Cat} role="img" aria-label="Pouting cat">😾</span>
    case 'sleeping':
      return <span class={styles.Cat} role="img" aria-label="Sleeping cat">🐱💤</span>
    default:
      return <span class={styles.Cat} role="img" aria-label="Happy cat">😸</span>
  }
}
