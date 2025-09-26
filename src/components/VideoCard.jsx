function VideoCard({
  category,
  image,
  title,
  description,
  avatar,
  author,
  role,
  company,
  rating,
  reviews,
  price,
}) {
  return (
    <div className={`containervideomobile md:containervideo ${category}`}>
      {/* gambar utama */}
      <img
        src={`${import.meta.env.BASE_URL}${image}`}
        alt={title}
        className="w-1/3 box-border h-32 rounded-lg md:videoimg"
      />

      {/* konten text */}
      <div className="w-3/5 md:flex md:w-full md:flex-wrap">
        <h3 className="font-bold md:w-full">{title}</h3>
        <p className="hidden md:flex">{description}</p>

        {/* profil author */}
        <div className="flex justify-between items-center">
          <img
            src={`${import.meta.env.BASE_URL}${avatar}`}
            alt={author}
            className="py-4 avatarimg rounded-lg w-1/5"
          />
          <div className="w-4/5 p-2">
            <h4 className="font-semibold">{author}</h4>
            <p className="text-darkgray">{role}</p>
          </div>
          <p className="hidden md:block font-semibold text-black ml-auto">
            {company}
          </p>
        </div>
      </div>

      {/* rating + harga */}
      <div className="rating-container">
        <div className="rating">
          {/* contoh rating statis dulu */}
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <span className="review">
          {rating} ({reviews})
        </span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}

export default VideoCard;
