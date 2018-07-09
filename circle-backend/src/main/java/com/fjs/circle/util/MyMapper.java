package com.fjs.circle.util;

import tk.mybatis.mapper.common.Mapper;
import tk.mybatis.mapper.common.MySqlMapper;

/**
 * Created by yinzf on 2018/7/9.
 */
public interface MyMapper<T> extends Mapper<T>, MySqlMapper<T> {

}
