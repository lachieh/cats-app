import React from 'react'
import Cat from './Cat/Cat';

export default function CatCafe() {
  return (
    <div>
      <Cat />
      <Cat mood='love' />
      <Cat mood='happy' />
      <Cat mood='sad' />
      <Cat mood='grumpy' />
    </div>
  )
}
