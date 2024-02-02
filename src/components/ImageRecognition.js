const ImageRecognition = ({ imageUrl, userDetails }) => {
  return (
    <div className="row">
      <div className="col">
        <img src={imageUrl} width="500px" height="auto" />
      </div>
      <div className="col">
        <p>Object % accuracy</p>
        <hr />
        {userDetails.boundingBoxesData.map((box, j) => (
          <p>
            {box.name} {box.probability * 100}%
          </p>
        ))}
      </div>
    </div>
  );
};

export default ImageRecognition;
