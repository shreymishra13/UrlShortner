package com.snapurl.backend.contoller;


import com.snapurl.backend.dto.UrlRequest;
import com.snapurl.backend.dto.UrlResponse;
import com.snapurl.backend.service.UrlService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("url")
@Slf4j
@CrossOrigin(origins = "http://localhost:5173")
public class UrlController {


    @Autowired
    private UrlService urlService;
    @PostMapping("/save")
    public UrlResponse save(@RequestBody UrlRequest requestData){
        log.info("Date Recieved :" +  requestData);

        return urlService.save(requestData);
    }


}
