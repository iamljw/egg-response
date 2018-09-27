'use strict';

module.exports = {
    /**
     * 创建成功的响应
     * @param {object} data 返回数据
     * @param {boolean} isData 是否有数据返回
     * @param {int} code 响应状态码
     * @param {object} addition 附加信息
     */
    successful(data, { isData = true, code = 200, addition = {} } = {}) {
        this.status = code;
        this.body = {
            success: true
        };
        if (!isData) {
            this.body = Object.assign(this.body, { message: data }, addition);
            return;
        }
        this.body = Object.assign(this.body, { data }, addition);
    },
    /**
     * 创建失败的响应
     * @param {string} message 错误提示信息
     * @param {int} code 错误码
     * @param {object} addition 附加信息
     */
    failed({ message = 'Request error', code = 422, addition = {} } = {}) {
        this.status = code;
        this.body = Object.assign({ success: false, message }, addition);
    },
    /**
     * 创建成功的响应
     * @deprecated(过时的)
     * @param {object} data 返回数据
     * @param {int} code 状态码
     */
    createSuccessResponse(data, code = 200) {
        this.status = code;
        this.body = {
            success: true,
            data
        };
    },
    /**
     * 创建失败的响应
     * @deprecated(过时的)
     * @param {string} message 错误提示信息
     * @param {*} code 错误码
     */
    createFailedResponse(message = 'Request error', code = 422) {
        this.status = code;
        this.body = {
            success: false,
            message
        };
    }
};
