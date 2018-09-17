'use strict';

module.exports = {
    /**
     * 创建成功的响应
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
     * @param {string} message 错误提示信息
     * @param {*} code 错误码
     */
    createFailedResponse(message = '请求出错', code = 422) {
        this.status = code;
        this.body = {
            success: false,
            message
        };
    }
};
