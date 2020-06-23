import React from 'react'
import Cat from './Cat';

export default function CatCafe() {
  return (
    <div>
      <Cat />
      <Cat activity='sleeping' />
      <Cat activity='eating' />
      <Cat activity='pouting' />
    </div>
  )
}
