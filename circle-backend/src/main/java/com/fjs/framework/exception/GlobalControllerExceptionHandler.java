package com.fjs.framework.exception;

import com.alibaba.fastjson.JSONObject;
import feign.FeignException;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.http.HttpServletResponse;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.Set;

@ControllerAdvice
class GlobalControllerExceptionHandler {

    // 异常处理方法：
    // 根据特定的异常返回指定的 HTTP 状态码
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)  // 400
    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseBody
    public ResponseError handleValidationException(ConstraintViolationException ex) {
        Set<ConstraintViolation<?>> errors = ex.getConstraintViolations();
        StringBuilder strBuilder = new StringBuilder();
        for (ConstraintViolation<?> violation : errors) {
            strBuilder.append(violation.getMessage() + "\n");
        }
        return ResponseError.build(ResponseError.Type.VALIDATION_ERROR, strBuilder.toString());
    }

    // 通用异常的处理，返回500
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)  // 500
    @ExceptionHandler(Exception.class)
    @ResponseBody
    public ResponseError handleException(Exception ex) {
        ex.printStackTrace();
        return ResponseError.build(ResponseError.Type.INTERNAL_SERVER_ERROR, ex.getMessage());
    }

    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)  // 500
    @ExceptionHandler(BaseException.class)
    @ResponseBody
    public ResponseError handleBaseException(HttpServletResponse response, BaseException ex) {
        return ex.getResponseError();
    }



    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)  // 500
    @ExceptionHandler(FeignException.class)
    @ResponseBody
    public ResponseError handleFeignException(HttpServletResponse response, FeignException ex) {
        String destSrc = "content";
        String result = ex.getMessage().substring(ex.getMessage().indexOf(destSrc) + destSrc.length() + 1);
        String res = result.replace("\\\\n", "");
        ResponseError restServiceError = JSONObject.parseObject(res, ResponseError.class);
        if (StringUtils.isEmpty(restServiceError.getMessage())) {
            restServiceError.setMessage(restServiceError.getError());
        }
        return restServiceError;
    }



}