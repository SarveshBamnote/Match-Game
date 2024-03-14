import './index.css'

const ImageItem = props => {
  const {eachImage, clickedImageId} = props
  const {id, thumbnailUrl} = eachImage

  const onClickImage = () => {
    clickedImageId(id)
  }

  return (
    <li className="images-list">
      <button className="thumbnail-btn" onClick={onClickImage} type="button">
        <img className="image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
