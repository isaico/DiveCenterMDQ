import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CoursesList from './CoursesList';
import PageHeading from '../../components/PageHeading/PageHeading';
import { BiBook } from 'react-icons/bi';
import { getFirestore } from '../../firebase/firebase';
import { Loader } from '../../components/Loader';
import CoursesOptions from './CoursesOptions';
import Wave from 'react-wavify';

const CoursesContainer = () => {
  //Hooks
  const { urlCourses } = useParams();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  //Coleccion de Firestore (base de datos)
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('cursos');
    setLoading(true);
    //filtra segun categoria sea igual al urlCursos
    if (urlCourses) {
      const itemCollCategoria = itemCollection.where(
        'category',
        '==',
        urlCourses
      );
      itemCollCategoria
        .get()
        .then((data) => {
          if (data.size === 0) console.log('no se encontraron los datos');

          setItems(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      const itemCollection = db.collection('cursos');
      itemCollection
        .get()
        .then((data) => {
          if (data.size === 0) console.log('no se encontraron los datos');
          setItems(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [urlCourses]);

  return (
    <div className="bg-gray-100">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="max-w-7xl mx-auto">
            <div
              id="coursesList"
              className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none"
            >
              <PageHeading text="Cursos" icon={BiBook} />
              <CoursesOptions />
              <CoursesList courses={items} loader={loading} />
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default CoursesContainer;
