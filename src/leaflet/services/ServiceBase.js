/* Copyright© 2000 - 2018 SuperMap Software Co.Ltd. All rights reserved.
 * This program are made available under the terms of the Apache License, Version 2.0
 * which accompanies this distribution and is available at/r* http://www.apache.org/licenses/LICENSE-2.0.html.*/
import L from "leaflet";

/**
 * @class L.supermap.ServiceBase
 * @classdesc L.supermap 服务基类。
 * @category  iServer
 * @param {string} url - 与客户端交互的服务地址。
 * @param {Object} options - 参数。
 * @param {string} [options.proxy] - 服务代理地址。
 * @param {SuperMap.ServerType} [options.serverType=SuperMap.ServerType.ISERVER] - 服务来源 iServer|iPortal|online。
 * @param {boolean} [options.withCredentials=false] - 请求是否携带 cookie。
 */
export var ServiceBase = L.Evented.extend({

    options: {
        url: null,

        proxy: null,
        //服务来源 iServer|iPortal|online
        serverType: null,

        withCredentials: false
    },

    initialize: function (url, options) {
        if (url) {
            url = (url.indexOf("/") !== url.length - 1) ?
                url : url.substr(0, url.length - 1);
        }
        this.url = url;
        L.setOptions(this, options);
        this.fire("initialized", this);
    },

    /**
     * @function L.supermap.ServiceBase.prototype.destroy
     * @description 释放资源，将引用的资源属性置空。
     */
    destroy: function () {
        this.fire("destroy", this);
    }

});
L.supermap.ServiceBase = ServiceBase;