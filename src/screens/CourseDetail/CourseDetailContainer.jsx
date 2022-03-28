import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase';
import ItemDetail from './ItemDetail';
import { Loader } from '../../components/Loader';

console.log('first');
const CourseDetailContainer = () => {
  const { urlDetailCourse } = useParams();
  const [itemDetail, setItemDetail] = useState("sin datos");
  const [loading, setLoading] = useState(true);

  console.log('soy la url', urlDetailCourse);
  //   //   //fetch
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('cursos').doc(urlDetailCourse);
   

    itemCollection
      .get()
      .then((doc) => {
        setItemDetail({ id: doc.id, ...doc.data() });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [urlDetailCourse]);

  console.log(itemDetail);

  return (
    <div>
      { loading? <Loader/>:
      <ItemDetail item={itemDetail}></ItemDetail>}
    </div>
  );
};

export default CourseDetailContainer;
