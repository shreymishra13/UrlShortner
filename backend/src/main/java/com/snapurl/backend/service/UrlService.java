package com.snapurl.backend.service;

import com.snapurl.backend.dto.UrlData;
import com.snapurl.backend.dto.UrlRequest;
import com.snapurl.backend.dto.UrlResponse;
import com.snapurl.backend.entity.UrlEntity;
import com.snapurl.backend.repository.UrlRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.time.LocalDate;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
public class UrlService {

    @Autowired
    private UrlRepository urlRepository;

    @Value("${app.public-base-url}")
    private String baseUrl;

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
                    new UrlData(baseUrl +"/url/"+existingUrl.get().getShortUrl())
            );
        }

        UrlEntity urlEntity = new UrlEntity();
        urlEntity.setLongUrl(requestData.getOriginalUrl());
        urlEntity.setDate(new Date());
        urlEntity.setShortUrl(generateShortUrl());
        log.info("Data converted to urlEntity form : " + urlEntity);

        try{
            urlRepository.save(urlEntity);
            log.info("Data Successfully Saved in the DB");
            return new UrlResponse(
                    "Successfully Saved in the DB",
                    new UrlData(baseUrl +"/url/"+ urlEntity.getShortUrl())

            );

        }catch (Exception e){
            log.error("Some exception has occurred"+e);
            log.info("Some exception has occurred check the error log");
            return new UrlResponse("Oops!, Some error has occured. Please retry", new UrlData(null));
        }



    }
    private String generateShortUrl() {
        return
                UUID.randomUUID().toString().substring(0, 6);
    }

    public String getOrginalUrl(String urlCode) {
        log.info("Url Code recieved : "+ urlCode);
//
        Optional<UrlEntity> urlEntity = urlRepository.findByShortUrl(urlCode);
        log.info("Url entity received from DB : "+urlEntity.toString());

        log.info("Long url : " + urlEntity.get().getLongUrl());
        return urlEntity.get().getLongUrl();
    }
}
