import React, { useState } from 'react';
import { deleteComment, putComment } from '../../services/comments';
import CustomModal from '../../components/customModal/CustomModal'
import Edit from './commentsComponents/Edit';
import Post from './commentsComponents/Post';

const Comments = (props) => {
  const { campsite, user, setCampsite } = props
  const [openPost, setOpenPost] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  const handleOpenPost = () => setOpenPost(true);
  const handleClosePost = () => setOpenPost(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  
  const handleDelete = async (id) => {
    await deleteComment(campsite.id, id);
    setCampsite(prevState => prevState.comments.filter(comment => {
      return comment.id !== id
    }))
  }
  const handleUpdate = async (site_id, id, siteData) => {
    const updatedComment = await putComment(site_id, id, siteData);
    setCampsite(prevState => prevState.comment.map(comment => {
      return comment.id === Number(id) ? updatedComment : comment
    }))
  }
  
  return (
    <>
      <h3>Comments</h3>
      {user && <button onClick={handleOpenPost}>Leave A Comment</button>}
      {campsite.comments.length ? 
        campsite.comments.map(comment => {
          return (
            <>
            <p>{comment.user.username}</p>
            <p>{comment.content}</p>
            { user && comment.user_id === user.id ?
            <>
            <button onClick={handleOpenEdit}>edit</button>
            <button onClick={() => handleDelete(comment.id)}>delete</button>
            </> : <></>}
            </>
          )
        })
        :
        <p>Be the first to comment on {campsite.name}</p>
      }
      <CustomModal
        open={openPost}
        close={handleClosePost}
      >
        <Post
          close={handleClosePost}
          // handleUpdate={handleCreate}
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
        />
      </CustomModal>
    </>
  );
};

export default Comments;