package com.arbejdsflow.backend.repository;

import com.arbejdsflow.backend.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}

