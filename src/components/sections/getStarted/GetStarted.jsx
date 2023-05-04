import { Title, Description, CardCourse } from '../../elements';

const GetStarted = ({ data, windowWidth }) => {
  const courses = data.courses;

  return (
    <div className='section section__get-started'>
      <Title type='h2' title={data.title} />
      <Description type='section' description={data.description} />
      <div className='card-container'>
        <CardCourse
          size={courses[0].size}
          title={courses[0].title}
          description={courses[0].description}
          nbChapters={courses[0].nbChapters}
          background={courses[0].image}
        />
        <div
          className={
            windowWidth >= 960
              ? 'grid-3-col'
              : windowWidth >= 640
              ? 'grid-2-col'
              : 'grid-1-col'
          }
        >
          {courses.map((course, index) => {
            if (index > 0) {
              return (
                <CardCourse
                  key={index}
                  description={course.description}
                  nbChapters={course.nbChapters}
                  background={course.image}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
