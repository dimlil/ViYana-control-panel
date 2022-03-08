import React from 'react'
import { useParams } from 'react-router-dom'

function PostPage() {
    let {id}= useParams();
  return (
    <div>Hello</div>
  )
}

export default PostPage