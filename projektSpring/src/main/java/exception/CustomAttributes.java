package exception;

import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.reactive.error.DefaultErrorAttributes;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@Component
public class CustomAttributes extends DefaultErrorAttributes {
 @Override
 public Map<String, Object> getErrorAttributes(ServerRequest webRequest, ErrorAttributeOptions options){
     Map<String,Object> errorAttributesMap=super.getErrorAttributes(webRequest,options);
     Throwable throwable=getError(webRequest);

     if(throwable instanceof ResponseStatusException){
         ResponseStatusException ex=(ResponseStatusException) throwable;
         errorAttributesMap.put("message",ex.getMessage());
         errorAttributesMap.put("developerMessage","A ResponseStatusException Happened");
         return errorAttributesMap;
     }
     return errorAttributesMap;
 }
}
