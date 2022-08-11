import React, { useReducer } from "react";
import axios from "axios";
import { AUTH_API } from "../helpers/API";
import { GET_ALL_COURSES, GET_ONE_COURSES } from "../helpers/Cases";

export const courseContext = React.createContext();

const INIT_STATE = {
  courses: [],
  lesson: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_COURSES:
      return { ...state, courses: action.payload };
    case GET_ONE_COURSES:
      return { ...state, lesson: action.payload };
    default:
      return state;
  }
};

const CourseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function getAllCourses() {
    let { data } = await axios.get(`${AUTH_API}/course/api/v1/`);
    dispatch({
      type: GET_ALL_COURSES,
      payload: data.results,
    });
  }
  async function getOneCourses(id) {
    let { data } = await axios.get(`${AUTH_API}/course/api/v1/${id}/`);
    console.log(data);
    dispatch({
      type: GET_ONE_COURSES,
      payload: data,
    });
  }
  return (
    <courseContext.Provider
      value={{
        courses: state.courses,
        lesson: state.lesson,
        getAllCourses,
        getOneCourses,
      }}
    >
      {children}
    </courseContext.Provider>
  );
};
export default CourseContextProvider;
