package com.snapurl.backend.service;

import com.snapurl.backend.dto.UrlData;
import com.snapurl.backend.dto.UrlRequest;
import com.snapurl.backend.dto.UrlResponse;
import com.snapurl.backend.entity.UrlEntity;
import com.snapurl.backend.repository.UrlRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
public class UrlService {

    @Autowired
    private UrlRepository urlRepository;

    public UrlResponse save(UrlRequest requestData){

        //some logic here
//        DTO to entity
        log.info("Requested Data recieved in service layer : " + requestData);

        try{


        // first let's check if it is already present
        if(requestData.getOriginalUrl() ==  null || requestData.getOriginalUrl().isEmpty()){
            log.info("Empty URL Shared");
            throw new IllegalArgumentException("Empty Url Found");
        }

        } catch (Exception e) {
            log.error("Some exception has occurred"+e);
            log.info("Some exception has occurred check the error log");
            return new UrlResponse("Kindly input the URL first", new UrlData(null));
        }

        log.info("Checking if it already existed in the DB");
        Optional<UrlEntity> existingUrl =
                urlRepository.findByLongUrl(requestData.getOriginalUrl());

        if (existingUrl.isPresent()) {
            log.info("URL already exists, returning existing short URL");

            return new UrlResponse(
                    "URL already shortened",
                    new UrlData(existingUrl.get().getShortUrl())
            );
        }

        UrlEntity urlEntity = new UrlEntity();
        urlEntity.setLongUrl(requestData.getOriginalUrl());
        urlEntity.setDate(new Date());
        urlEntity.setShortUrl(generateShortUrl());
        log.info("Data converted ot urlEntity form : " + urlEntity);

        try{
            urlRepository.save(urlEntity);
            log.info("Data Successfully Saved in the DB");
            return new UrlResponse(
                    "Successfully Saved in the DB",
                    new UrlData(urlEntity.getShortUrl())

            );

        }catch (Exception e){
            log.error("Some exception has occurred"+e);
            log.info("Some exception has occurred check the error log");
            return new UrlResponse("Oops!, Some error has occured. Please retry", new UrlData(null));
        }



    }
    private String generateShortUrl() {
        return "http://localhost:5000/" +
                UUID.randomUUID().toString().substring(0, 6);
    }
}
