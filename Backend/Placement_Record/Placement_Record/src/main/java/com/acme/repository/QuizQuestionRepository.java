package com.acme.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.acme.entity.Quiz;
import com.acme.entity.QuizQuestion;



public interface QuizQuestionRepository extends JpaRepository<QuizQuestion, Long> {
    // Custom methods for quiz question-related operations
	public List<QuizQuestion> findByQuiz(Quiz quiz);
}