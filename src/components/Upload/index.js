/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
function Upload() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: 'none',
        }}
      />
      <div
        style={{
          height: '60px',
          width: '60px',
          border: '1px dashed black',
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: '50%',
            height: '50%',
            position: 'absolute',
          }}
        />
      </div>
      Click to upload Image
    </div>
  );
}

export default Upload;
