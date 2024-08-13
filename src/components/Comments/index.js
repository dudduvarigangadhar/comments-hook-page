import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')

  const [commentsList, setCommentsList] = useState([])

  const onAddComment = event => {
    event.preventDefault()

    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentsList(previousCommentsList => [
      ...previousCommentsList,
      newComment,
    ])
    setName('')
    setCommentText('')
  }

  const onChangeName = event => setName(event.target.value)
  const onChangeCommentText = event => setCommentText(event.target.value)

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeCommentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem commentDetails={eachComment} key={eachComment.id} />
        ))}
      </CommentsList>
      {/* <CommentItem commentDetails={comment} /> */}
    </CommentsContainer>
  )
}

export default Comments
