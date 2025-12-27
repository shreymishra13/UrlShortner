package com.snapurl.backend.entity;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Collection;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "urls")
public class UrlEntity {
    @Id
    private String id;
    private String shortUrl;
    private String longUrl;
    private Date date;

}
