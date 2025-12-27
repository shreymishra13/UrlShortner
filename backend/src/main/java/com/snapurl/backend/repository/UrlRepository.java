package com.snapurl.backend.repository;

import com.snapurl.backend.entity.UrlEntity;
import org.springframework.data.domain.Example;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UrlRepository extends MongoRepository<UrlEntity, String> {

    Optional<UrlEntity> findByLongUrl(String longUrl);


}