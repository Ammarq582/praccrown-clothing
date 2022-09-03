import './category-item.styles.scss'

const CategoryItem = ({category}) => {
    const {imageUrl, title} = category;
  return (
    <div className="category-container">
            <div className="background-image" style={
            {backgroundImage: `url(${imageUrl})`}
          } />
            <div className="category-body-container">
              <h2 className="category-body-container__heading">
                {title}
              </h2>
              <p className="category-body-container__text">
                Shop Now
              </p>
            </div>
          </div>
  )
}

export default CategoryItem;