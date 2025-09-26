function VideoCard({
  image,
  title,
  description,
  avatar,
  name,
  role,
  company,
  rating,
  review,
  price,
}) {
  // fungsi untuk generate bintang
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={`full-${i}`} className="fa-solid fa-star text-yellow-500"></i>
      );
    }

    if (hasHalf) {
      stars.push(
        <i
          key="half"
          className="fa-solid fa-star-half-stroke text-yellow-500"
        ></i>
      );
    }

    while (stars.length < 5) {
      stars.push(
        <i
          key={`empty-${stars.length}`}
          className="fa-regular fa-star text-yellow-500"
        ></i>
      );
    }

    return stars;
  };

  return (
    <div className="containervideo desain">
      <img
        src={image}
        alt={title}
        className="w-1/3 box-border h-32 rounded-lg md:videoimg"
      />

      <div className="w-3/5 md:flex md:w-full md:flex-wrap">
        <h3 className="font-bold md:w-full">{title}</h3>
        <p className="hidden md:flex">{description}</p>

        <div className="flex justify-between items-center">
          <img
            src={avatar}
            alt={name}
            className="py-4 avatarimg rounded-lg w-1/5"
          />
          <div className="w-4/5 p-2">
            <h4 className="font-semibold">{name}</h4>
            <p className="text-darkgray">{role}</p>
          </div>
          <p className="hidden md:block font-semibold text-black ml-auto">
            {company}
          </p>
        </div>
      </div>

      <div className="rating-container flex items-center gap-2">
        <div className="rating flex gap-1">
          {renderStars(parseFloat(rating))}
        </div>
        <span className="review text-gray-600 text-sm">
          {rating} ({review})
        </span>
        <span className="price font-semibold ml-auto">{price}</span>
      </div>
    </div>
  );
}

export default VideoCard;
