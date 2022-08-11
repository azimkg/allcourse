import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { courseContext } from "../../contexts/courseContext";
import "./Courses.css";

const Courses = () => {
  const { getAllCourses, courses } = useContext(courseContext);
  const params = useParams();
  const [elem, setElem] = useState("");
  useEffect(() => {
    getAllCourses();
  }, []);
  console.log(courses);
  return (
    <div className="container courser_main_page">
      <h2 className="courses_title">Все курсы</h2>
      <div className="courses_name">
        {courses.map((item) => (
          <Link
            style={{ textDecoration: "none" }}
            key={item.id}
            to={`/courses/${item.id}`}
          >
            <div className="courses_name_place">
              <h4 className="courses_name-title">{item.name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
