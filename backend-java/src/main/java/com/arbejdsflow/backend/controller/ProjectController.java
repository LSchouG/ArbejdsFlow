package com.arbejdsflow.backend.controller;

import com.arbejdsflow.backend.model.Project;
import com.arbejdsflow.backend.service.ProjectService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    private final ProjectService service;

    public ProjectController(ProjectService service) {
        this.service = service;
    }

    @GetMapping
    public List<Project> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Project create(@RequestBody Project p) {
        return service.create(p);
    }
}

