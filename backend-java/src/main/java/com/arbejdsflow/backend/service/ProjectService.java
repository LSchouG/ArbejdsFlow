package com.arbejdsflow.backend.service;

import com.arbejdsflow.backend.model.Project;
import com.arbejdsflow.backend.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    private final ProjectRepository repo;

    public ProjectService(ProjectRepository repo) {
        this.repo = repo;
    }

    public List<Project> getAll() {
        return repo.findAll();
    }

    public Project create(Project p) {
        return repo.save(p);
    }
}

