const ShimmerUI = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="shimmer">
      {Array.apply(null, Array(10)).map((_, i) => {
        return (
          <div className="card" key={i}>
            <div className="shimmerBG media"></div>
            <div className="p-32">
              <div className="shimmerBG title-line"></div>
              <div className="shimmerBG title-line end"></div>
              <div className="shimmerBG content-line m-t-24"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line end"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShimmerUI;
