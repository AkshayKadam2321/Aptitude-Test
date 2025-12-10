import React from "react";
import {  Routes, Route } from "react-router-dom";
import Login from "./Login";
import AdminLogin from "./AdminLogin";
import ShowQuestions from "./ShowQuestions";
import QuizGenerator from "./QuizGenerator";
import QuizPage from "./QuizPage";
import ShowUserResponse from "./ShowUserResponse";
import NewUserLogin from "./Register";
import { PrivateRoute } from "./component/PrivateRoute";
import ErrorComponent from "./Error";

const App = () => {
  return (
    
      <Routes>
        <Route path="/Register" element={<NewUserLogin />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<ErrorComponent />} />
        <Route path="/admin" element={<PrivateRoute> <AdminLogin /></PrivateRoute>} />
        
        <Route path="/user" element={<PrivateRoute><QuizPage /> </PrivateRoute>} />
        <Route path="/admin/show-question" element={<PrivateRoute><ShowQuestions /></PrivateRoute>} />
        <Route path="/admin/generate-quiz" element={<PrivateRoute><QuizGenerator /></PrivateRoute>} />
        <Route path="/admin/validate-answer" element={<PrivateRoute><ShowUserResponse /></PrivateRoute>} />
      </Routes>
    
    
  );
};

export default App;
