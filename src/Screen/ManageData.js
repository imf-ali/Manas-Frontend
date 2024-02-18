import { useContext, useEffect, useState } from 'react';
import styles from './ManageData.module.css';
import AuthContext from '../store/AuthContext';

const Modal = ({ onCloseHandler, onDeleteHandler }) => {
  return (
    <>
      <div onClick={onCloseHandler} className={styles.backdrop} />;
      <div className={styles.modal}>
        <h3>Do you want to delete the item?</h3>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <button className={styles.btn} onClick={() => { onDeleteHandler() }}>Confirm</button>
          <button className={styles.btn} onClick={onCloseHandler}>Cancel</button>
        </div>
      </div>
    </>
  )
}

const CarouselData = ({ fileChangeHandler, onSubmitHandler, modalShowHandler, imageList }) => {
  return (
    <div>
      <h3>Home carousel</h3>
      <br/>
      <div>
        <label>Add Image</label>
        <input accept="image/*" type='file' onChange={fileChangeHandler} />
        <button className={styles.btn} onClick={() => { onSubmitHandler() }}>Upload</button>
        <div className={styles.imgWrapper}>
          {imageList.map((image, index) => (
            <img 
              className={styles.imgData} 
              src={image.data} 
              alt='img' 
              onClick={() => { modalShowHandler(image._id) }} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const PopUpData = ({ fileChangeHandler, onSubmitHandler, modalShowHandler, imageList }) => {
  return (
    <div>
      <h3>Pop up Image</h3>
      <br/>
      <div>
        <label>Add Image</label>
        <input accept="image/*" type='file' onChange={fileChangeHandler} />
        <button className={styles.btn} onClick={() => { onSubmitHandler() }}>Upload</button>
        {(imageList.length !== 0) && (
          <img 
            className={styles.imgData} 
            src={imageList[0].data} 
            alt='img' 
            onClick={() => { modalShowHandler(imageList[0]._id) }} 
          />
        )}
      </div>
    </div>
  )
}

const AchivementData = ({ fileChangeHandler, onSubmitHandler, modalShowHandler, imageList }) => {
  
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
      <h3>Our Achievement data</h3>
      <br/>
      <div className={styles.achieveDiv}>
        <div style={{display: 'flex', height: '30px', margin: '10px'}}>
          <label className={styles.labelDiv}>Name</label>
          <input className={styles.inputDiv} type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
        </div>
        <div style={{display: 'flex', height: '30px', margin: '10px'}}>
          <label className={styles.labelDiv}>Designation</label>
          <input className={styles.inputDiv} type='text' value={designation} onChange={(e) => { setDesignation(e.target.value) }}  />
        </div>
        <div style={{display: 'flex', height: '30px', margin: '10px'}}>
          <label className={styles.labelDiv}>Description</label>
          <input className={styles.inputDiv} type='text' value={description} onChange={(e) => { setDescription(e.target.value) }} />
        </div>
        <div style={{display: 'flex', height: '30px', margin: '10px'}}>
          <label className={styles.labelDiv}>Add Image</label>
          <input className={styles.inputDiv} accept="image/*" type='file' onChange={fileChangeHandler} />
        </div>
        <button className={styles.btn} onClick={() => onSubmitHandler({name, designation, description})}>Upload</button>
          <div className={styles.imgWrapper2}>
            {imageList.map((image, index) => (
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img 
                  className={styles.imgData} 
                  src={image.data} 
                  alt='img' 
                  onClick={() => { modalShowHandler(image._id) }} 
                />
                <div style={{ display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto' }}>
                  <h2>{image.meta.name}</h2>
                  <h4>{image.meta.designation}</h4>
                  <div>{image.meta.description}</div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

const TestimonialData = ({ fileChangeHandler, onSubmitHandler, modalShowHandler, imageList }) => {
  
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
      <h3>Our Testimonial data</h3>
      <br/>
      <div className={styles.achieveDiv2}>
        <div style={{display: 'flex', height: '30px', margin: '10px'}}>
          <label className={styles.labelDiv}>Name</label>
          <input className={styles.inputDiv} type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
        </div>
        <div style={{display: 'flex', height: '30px', margin: '10px'}}>
          <label className={styles.labelDiv}>College</label>
          <input className={styles.inputDiv} type='text' value={designation} onChange={(e) => { setDesignation(e.target.value) }}  />
        </div>
        <div style={{display: 'flex', margin: '10px'}}>
          <label className={styles.labelDiv}>Description</label>
          <textarea className={styles.textAreaDiv} type='text' value={description} onChange={(e) => { setDescription(e.target.value) }} />
        </div>
        <div style={{display: 'flex', height: '30px', margin: '10px'}}>
          <label className={styles.labelDiv}>Add Image</label>
          <input className={styles.inputDiv} accept="image/*" type='file' onChange={fileChangeHandler} />
        </div>
        <button className={styles.btn} onClick={() => onSubmitHandler({name, designation, description})}>Upload</button>
          <div className={styles.imgWrapper2}>
            {imageList.map((image, index) => (
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img 
                  className={styles.imgData} 
                  src={image.data} 
                  alt='img' 
                  onClick={() => { modalShowHandler(image._id) }} 
                />
                <div style={{ display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto' }}>
                  <h2>{image.meta.name}</h2>
                  <h4>{image.meta.designation}</h4>
                  <div>{image.meta.description}</div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

const ManageData = () => {

  const { manasInstance } = useContext(AuthContext);

  const [imageId, setImageId] = useState();
  const [showModal, setShowModal] = useState(false);
  const [isCarousel, setIsCarousel] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);
  const [isAchivement, setIsAchivement] = useState(false);
  const [isTestimonial, setIsTestimonial] = useState(false);
  const [imageTag, setImageTag] = useState('');
  const [imgData, setImgData] = useState('');
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const res = await manasInstance.getImageData(['carousel', 'popup', 'achievement', 'testimonial']);
      setImageList(res.data.asset);
    };
    getImages();
  }, [manasInstance])

  const setComponentHanler = (type) => {
    setIsCarousel(false);
    setIsPopUp(false);
    setIsAchivement(false);
    setIsTestimonial(false);
    if(type === 'carousel')
      setIsCarousel(true);
    if(type === 'popup')
      setIsPopUp(true);
    if(type === 'achievement')
      setIsAchivement(true);
    if(type === 'testimonial')
      setIsTestimonial(true);
    setImageTag(type);
  }

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
  });

  const fileChangeHandler = async (e) => {
    const file = e.target.files[0];
    const img = await toBase64(file);
    setImgData(img);
  }

  const onDeleteHandler = async () => {
    await manasInstance.deleteImageData(imageId);
    setImageList((prev) => prev.filter((img) => (img._id !== imageId)))
    setShowModal(false);
  };

  const onSubmitHandler = async (meta) => {
    console.log('here')
    const res = await manasInstance.uploadImageData(imageTag, imgData, meta);
    if(res){
      setImageList((prev) => [ ...prev, res.data.asset ])
    }
  }

  const modalShowHandler = (id) => {
    setShowModal(true);
    setImageId(id);
  }

  const onCloseHandler = () => {
    setShowModal(false);
  }

  return (
    <div className={styles.parentDiv}>
      <h2>Manage Data</h2>
      <div className={styles.buttonDiv}>
        <button onClick={() => { setComponentHanler('carousel') }} className={styles.btn}>Home Carousel</button>
        <button onClick={() => { setComponentHanler('popup') }} className={styles.btn}>Pop Up</button>
        <button onClick={() => { setComponentHanler('achievement') }} className={styles.btn}>Our Achivements</button>
        <button onClick={() => { setComponentHanler('testimonial') }} className={styles.btn}>Testimonial</button>
      </div>
      <hr />
      <div className={styles.mainDiv}>
        {isCarousel && (
          <CarouselData 
            imageList={imageList.filter(image => image.tag === 'carousel')}
            fileChangeHandler={fileChangeHandler} 
            modalShowHandler={modalShowHandler}
            onSubmitHandler={onSubmitHandler} 
          />
        )}
        {isPopUp && (
          <PopUpData 
            imageList={imageList.filter(image => image.tag === 'popup')}
            fileChangeHandler={fileChangeHandler} 
            modalShowHandler={modalShowHandler}
            onSubmitHandler={onSubmitHandler} 
          />
        )}
        {isAchivement && (
          <AchivementData
            imageList={imageList.filter(image => image.tag === 'achievement')}
            fileChangeHandler={fileChangeHandler} 
            modalShowHandler={modalShowHandler}
            onSubmitHandler={onSubmitHandler} 
        />)}
        {isTestimonial && (
          <TestimonialData 
            imageList={imageList.filter(image => image.tag === 'testimonial')}
            fileChangeHandler={fileChangeHandler} 
            modalShowHandler={modalShowHandler}
            onSubmitHandler={onSubmitHandler} 
        />)}
      </div>
      {showModal && (
        <Modal 
          onCloseHandler={onCloseHandler} 
          onDeleteHandler={onDeleteHandler} 
        />
      )}
    </div>
  )
}

export default ManageData;