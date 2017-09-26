/*
* @Author: Administrator
* @Date:   2017-09-25 20:53:29
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-26 00:53:07
*/
require('./index.css');

var _mm = require('util/mm.js');

//通用页面头部
var header = {
    init : function(){
        this.bindEvent();
    },
    //初始
    onLoad : function(){
        var keyword = _mm.getUrlParam('keyword');
        //keyword存在 则回填输入框
        if(keyword){
            $('#search-input').val(keyword);
        }
    },
   
    bindEvent : function(){
        var _this = this;
        //点击 搜索提交
        $('#search-btn').click(function(){
            _this.searchSubmit();
        });
        //输入完成后 回车提交搜索
        $('#search-input').keyup(function(e){
            //13是回车键
            if(e.keyCode === 13){
                 _this.searchSubmit();
            }
        });
    },
    // 搜索的提交
    searchSubmit : function(){
        var keyword = $.trim($('#search-input').val());
        //有值 跳转到list页
        if(keyword){
            window.location.href = './list.html?keyword=' + keyword;
        }else{
            _mm.goHome();
        }
    }
};

header.init();