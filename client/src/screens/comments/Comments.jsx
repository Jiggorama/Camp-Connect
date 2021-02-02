import React, { useState } from 'react';
import { deleteComment, postComment, putComment } from '../../services/comments';
import CustomModal from '../../components/customModal/CustomModal'
import Edit from './commentsComponents/Edit';
import Post from './commentsComponents/Post';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import './Comments.css'

const Comments = (props) => {
  const { campsite, user, setCampsite } = props
  const [openPost, setOpenPost] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [currentComment, setCurrentComment] = useState()

  const handleOpenPost = () => setOpenPost(true);
  const handleClosePost = () => setOpenPost(false);
  const handleOpenEdit = (current) => {
    setCurrentComment(current);
    setOpenEdit(true);
  }
  const handleCloseEdit = () => setOpenEdit(false);
  
  const handleDelete = async (id) => {
    await deleteComment(campsite.id, id);
    setCampsite(prevState => ({
      ...prevState,
      comments: prevState.comments.filter(comment => {
        return comment.id !== id       
      })
    }))
  }
  const handleUpdate = async (site_id, id, commentData) => {
    const updatedComment = await putComment(site_id, id, commentData);
    updatedComment.user = user
    setCampsite(prevState => ({
      ...prevState,
      comments: prevState.comments.map(comment => {
        return comment.id === Number(id) ? updatedComment : comment
      })
    }))
  }
  const handlePost = async (site_id, commentData) => {
    const newComment = await postComment(site_id, commentData)
    newComment.user = user
    setCampsite(prevState => ({
      ...prevState,
      comments: [...prevState.comments, newComment]
    }))
  }
  return (
    <>
    {/* <div>Comments</div> */}
      {user && <button onClick={handleOpenPost}>Leave A Comment</button>}
    <div className='comments'>
      {campsite.comments.length ? 
        campsite.comments.reverse().map(comment => {
          return (
            <div className='comment' key={comment.id}>
              <div className='info'>
                <div>{comment.user.username}:</div>
                { user && comment.user_id === user.id ?
                  <div className = 'user-controls'>
                  <div className='button' onClick={()=>handleOpenEdit(comment)}><EditIcon/></div>
                  <div className='button' onClick={() => handleDelete(comment.id)}><DeleteIcon/></div>
                </div> : <></>}
              </div>
              <div className='content'>{comment.content}</div>
            </div>
          )
        })
        :
        <div>Be the first to comment on {campsite.name}</div>
      }
      <CustomModal
        open={openPost}
        close={handleClosePost}
      >
        <Post
          close={handleClosePost}
          handlePost={handlePost}
          campsite={campsite}
          setCampsite={setCampsite}
        />
      </CustomModal>
      <CustomModal
        open={openEdit}
        close={handleCloseEdit}
      >
        <Edit
          close={handleCloseEdit}
          handleUpdate={handleUpdate}
          campsite={campsite}
          setCampsite={setCampsite}
          currentComment = {currentComment}
        />
      </CustomModal>
      </div>
      </>
  );
};

export default Comments;