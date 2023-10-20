package com.onepager.server.controller;

import com.onepager.server.model.DatabaseFile;
import com.onepager.server.service.DatabaseFileService;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileNotFoundException;

@RestController
public class OnePagerFileDownloadController{

    @Autowired
    private DatabaseFileService fileStorageService;

    @GetMapping("/downloadFile/{fileName:.+}")
    public ResponseEntity <Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) throws FileNotFoundException {

        DatabaseFile databaseFile = fileStorageService.getFile(fileName);

        return ResponseEntity.ok().contentType(MediaType.parseMediaType(databaseFile.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + databaseFile.getFileName() + "\"")
                .body((Resource) new ByteArrayResource(databaseFile.getData()));}}
