package com.acme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.acme.entity.Questions;


@Repository
public interface QuestionRepository extends JpaRepository<Questions, Long> {
    // Custom methods for question-related operations
}