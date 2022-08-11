import React, { useContext, useEffect, useState } from "react";
import { courseContext } from "../../contexts/courseContext";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./OneCourse.css";

const OneCourse = () => {
  const { getOneCourses, lesson } = useContext(courseContext);
  const [value, setValue] = useState("");
  const [lessons, setLessons] = useState(null);
  const params = useParams();
  useEffect(() => {
    getOneCourses(params.id);
  }, [params.id]);
  useEffect(() => {
    setLessons(lesson);
  }, [lesson]);
  return (
    <>
      <Navbar />
      {lessons ? (
        <div className="container lesson__">
          <div className="lesson_main">
            <div className="lesson_main-left">
              <h3 className="lesson-titles">{lessons.name}</h3>
              <div id="lesson_select_main">
                <select
                  className="lesson_select"
                  size="14"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  {lessons.lesson.map((item) => (
                    <option className="lesson_option" value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="lesson_right">
              {lessons.lesson.map((item) =>
                item.name == value ? (
                  <div>
                    <video controls className="video_containers">
                      <source src={item.file} type="video/mp4"></source>
                    </video>
                    <p className="item_description">{item.description}</p>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </>
  );
};

export default OneCourse;
