package com.acme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.acme.entity.UserAnswers;



@Repository
public interface UserAnswerRepository extends JpaRepository<UserAnswers, Long> {
    // Custom methods for user answer-related operations
}
