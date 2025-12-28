    package com.snapurl.backend.contoller;


    import com.snapurl.backend.dto.UrlRequest;
    import com.snapurl.backend.dto.UrlResponse;
    import com.snapurl.backend.service.UrlService;
    import jakarta.servlet.http.HttpServletResponse;
    import lombok.extern.slf4j.Slf4j;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.beans.factory.annotation.Value;
    import org.springframework.web.bind.annotation.*;

    import java.io.IOException;

    @RestController
    @RequestMapping("/url")
    @Slf4j
    @CrossOrigin(origins = "http://localhost:5173")
    public class UrlController {

        @Value("${app.public-base-url}")
        private String baseUrl;

        @Autowired
        private UrlService urlService;

        @PostMapping("/save")
        public UrlResponse save(@RequestBody UrlRequest requestData){
            log.info("Date Recieved :" +  requestData);

            return urlService.save(requestData);
        }

        @GetMapping("/{urlCode}")
        public void getOriginalUrl(@PathVariable String urlCode ,  HttpServletResponse response) throws IOException {

            log.info("Url Code recieved "+ urlCode);
            log.info("https://"+urlService.getOrginalUrl(urlCode));
             response.sendRedirect("https://"+urlService.getOrginalUrl(urlCode));

        }




    }
