var Chcore = (function ($) {

    // var hostname = "http://192.168.1.124:1030/fjs/heimdall-backend-dev"; //接口请求地址的host
    var hostname = "http://192.168.1.128:1030/fjs/heimdall-backend"; //接口请求地址的host測試
    var chartBaseUrl = 'http://140.207.0.90:8000/trusted/'; //请求图表的host
    var token = 'Bearer 8ca150aa-8005-4b96-b6c5-a292ae6e157f';

    var config = { //配置信息
        hostname: hostname,
        apis: {
            F10001: {
              url: hostname + '/showdetail/v1/getShowDetailByCategory', //获取图表地址
              param: {}
            },
            F10002: {
              url: hostname + '/category/v1/getAllCategory', //获取token
              param: {}
            }
        }
    }

    var apiData = function(options) {
        return new ApiDataFn(options);
    };

    function ApiDataFn(options) {
        var me = this;
        me.opts = $.extend(true, {}, {
            id: "",
            requestType: "get",
            dataType: "json",
            params: "",
            successFuc: "",
            errorFuc: function() {
                console.log("ajax请求失败，执行的操作");
            },
            completeFuc: function() {
                console.log("ajax请求完成，执行的操作")
            }
        }, options);

        $.ajax({
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            url: config.apis[me.opts.id].url,
            timeout: 15000,
            type: me.opts.requestType,
            dataType: me.opts.dataType,
            data: me.opts.params,
            success: me.opts.successFuc,
            error: me.opts.errorFuc,
            complete: me.opts.completeFuc,
            beforeSend: function(request) {
              request.setRequestHeader("Authorization", token);
            }
        });
    };

    var ajaxIsSuccess = function(data) {
        if (data != null && data.result == '0') {
            return true;
        }
        return false;
    }

    var getUrlKey = function(name){
	    return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
		}

    return{
      apiData: apiData,
      ajaxIsSuccess: ajaxIsSuccess,
      getUrlKey: getUrlKey,
      chartBaseUrl: chartBaseUrl
    }
} ($));
