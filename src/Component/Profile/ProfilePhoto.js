import img from "../../img.jpg";

function CreateProfilePhoto() {
  return (
    <img
      src={img}
      className=""
      alt="profilephoto"
      style={{ width: "300px", border: "3px solid #000" }}
    />
  );
}

export default CreateProfilePhoto;
