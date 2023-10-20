package com.onepager.server.repository;

import com.onepager.server.model.DatabaseFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

   @Repository
    public interface DatabaseFileRepository extends JpaRepository<DatabaseFile, String> {

    }

