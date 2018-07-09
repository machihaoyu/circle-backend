package com.fjs.circle.dto.common;


/**
 * Created by yinzf on 2018/7/9.
 */
public class CircleDTO<T> {
    private T data;

    private int result;

    private String message;

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public int getResult() {
        return result;
    }

    public void setResult(int result) {
        this.result = result;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
